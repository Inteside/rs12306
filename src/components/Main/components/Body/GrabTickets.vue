<script setup lang="ts">
import { ref, h, computed, onMounted } from 'vue';
import { RepeatOutline } from '@vicons/ionicons5';
import { NIcon, NSpin } from 'naive-ui';
import stationList from '../../../../utils/StationList';
import { invoke } from '@tauri-apps/api/core';
import { useTicketStore } from '@/stores';

import type { TrainInfo } from '@/types/TrainInfo';

const ticketStore = useTicketStore();

// 使用 store 中的状态
const form = computed({
  get: () => ticketStore.formData,
  set: (val) => ticketStore.updateFormData(val),
});
// 筛选
const checkedValues = computed({
  get: () => ticketStore.checkedValues,
  set: (val) => ticketStore.updateCheckedValues(val),
});
// 全选
const checkAll = computed({
  get: () => ticketStore.checkAll,
  set: (val) => ticketStore.updateCheckAll(val),
});

const StationList = ref(stationList);
// 筛选选项
const screenOptions = ref([
  '高铁/城际',
  'D动车',
  'Z直达',
  'T特快',
  'K快速',
  '其他',
]);

// 发车时间
const DepartureTime = ref([
  { label: '00:00-24:00', value: '00:00-24:00' },
  { label: '00:00-06:00', value: '00:00-06:00' },
  { label: '06:00-12:00', value: '06:00-12:00' },
  { label: '12:00-18:00', value: '12:00-18:00' },
  { label: '18:00-24:00', value: '18:00-24:00' },
]);

// 通用座位渲染
const renderSeat = (value: string, isNoSeat: boolean = false) => {
  if (value === '--') {
    return h('span', { style: 'color: #999' }, value);
  }
  if (value === '无') {
    return h(
      'span',
      { style: isNoSeat ? 'color: #999' : 'color: orange' },
      isNoSeat ? '无' : '候补',
    );
  }
  if (value === '有') {
    return h('span', { style: 'color: #18A058' }, value);
  }
  return !isNaN(Number(value))
    ? h('span', { style: 'color: #18A058' }, value)
    : value;
};

// 表格头
const columns = ref([
  {
    title: '车次',
    key: 'trainNumber',
  },
  {
    title: '出发站/时间',
    key: 'departure',
    render: (row: any) => {
      return h('div', [
        h('div', row.from),
        h('div', { style: 'color: #666; font-size: 12px;' }, row.departureTime),
      ]);
    },
  },
  {
    title: '到达站/时间',
    key: 'arrival',
    render: (row: any) => {
      return h('div', [
        h('div', row.to),
        h('div', { style: 'color: #666; font-size: 12px;' }, row.arrivalTime),
      ]);
    },
  },
  {
    title: '历时',
    key: 'duration',
  },
  {
    title: '商务/特等座',
    key: 'seats.specialClass',
    render: (row: any) => renderSeat(row.seats.specialClass),
  },
  {
    title: '优选一等座',
    key: 'seats.PreferredFirstClassSeat',
    render: (row: any) => renderSeat(row.seats.PreferredFirstClassSeat),
  },
  {
    title: '一等座',
    key: 'seats.firstClass',
    render: (row: any) => renderSeat(row.seats.firstClass),
  },
  {
    title: '二等座',
    key: 'seats.secondClass',
    render: (row: any) => renderSeat(row.seats.secondClass),
  },
  {
    title: '软卧',
    key: 'seats.softSleeper',
    render: (row: any) => renderSeat(row.seats.softSleeper),
  },
  {
    title: '硬卧',
    key: 'seats.hardSleeper',
    render: (row: any) => renderSeat(row.seats.hardSleeper),
  },
  {
    title: '硬座',
    key: 'seats.hardSeat',
    render: (row: any) => renderSeat(row.seats.hardSeat),
  },
  {
    title: '无座',
    key: 'seats.noSeat',
    render: (row: any) => renderSeat(row.seats.noSeat, true),
  },
]);

// 处理全选
const handleCheckAll = (checked: boolean) => {
  ticketStore.updateCheckAll(checked);
  if (checked) {
    ticketStore.updateCheckedValues([...screenOptions.value]);
  } else {
    ticketStore.updateCheckedValues([]);
  }
};

// 交换
const handleSwap = () => {
  const temp = form.value.from;
  ticketStore.updateFormData({
    from: form.value.to,
    to: temp,
  });
};

// 监听选项变化
const handleCheckedChange = (values: string[]) => {
  ticketStore.updateCheckedValues(values);
  ticketStore.updateCheckAll(values.length === screenOptions.value.length);
};

// 渲染图标
const renderIcon = () => {
  return h(NIcon, null, {
    default: () => h(RepeatOutline),
  });
};

// 搜索
const handleSearch = computed(() => {
  return (keyword: string) => {
    if (!keyword) return StationList.value;
    return StationList.value.filter((item) =>
      item.label.toLowerCase().includes(keyword.toLowerCase()),
    );
  };
});

// 处理车次信息逻辑
const handleTrainInfo = (trainInfo: any) => {
  const allTrains = trainInfo.data.result;
  // 站名映射对象
  const alias = trainInfo.data.map;
  const processedTrains = [];

  for (const oneTrain of allTrains) {
    const dataList = oneTrain.split('|');
    console.log(dataList);
    // 使用alias映射转换站名
    const fromStation = alias[dataList[6]] || dataList[6];
    const toStation = alias[dataList[7]] || dataList[7];

    const trainData = {
      trainNumber: dataList[3],
      from: fromStation, // 使用转换后的站名
      to: toStation, // 使用转换后的站名
      departureTime: dataList[8],
      arrivalTime: dataList[9],
      duration: dataList[10],
      seats: {
        PreferredFirstClassSeat: dataList[20] || '--', // 优选一等座
        specialClass: dataList[32] || '--', // 商务/特等座
        firstClass: dataList[31] || '--', // 一等座
        secondClass: dataList[30] || '--', // 二等座
        softSleeper: dataList[23] || '--', // 软卧
        hardSleeper: dataList[28] || '--', // 硬卧
        hardSeat: dataList[29] || '--', // 硬座
        noSeat: dataList[26] || '--',
      },
    };

    processedTrains.push(trainData);
  }

  return processedTrains;
};

const tableData = ref<TrainInfo[]>([]);
// 1. 首先在 script 部分添加 loading ref
const loading = ref(false);

// 3. 修改查询函数
const handleDataSearch = async () => {
  try {
    loading.value = true; // 开始加载
    tableData.value = [];

    const fromStation = StationList.value.find(
      (item) => item.label === form.value.from,
    );
    const toStation = StationList.value.find(
      (item) => item.label === form.value.to,
    );

    if (fromStation) form.value.from_station = fromStation.alias;
    if (toStation) form.value.to_station = toStation.alias;

    const date = new Date(form.value.date);
    const formattedDate = date
      .toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\//g, '-');

    const res: any = await invoke('fetch_grab_tickets', {
      params: {
        'leftTicketDTO.train_date': formattedDate,
        'leftTicketDTO.from_station': form.value.from_station,
        'leftTicketDTO.to_station': form.value.to_station,
        purpose_codes: 'ADULT',
      },
    });

    const processedData = handleTrainInfo(res);
    tableData.value = processedData;
    ticketStore.updateTableData(processedData);
  } catch (error) {
    console.error('查询失败:', error);
  } finally {
    loading.value = false; // 结束加载
  }
};

// 监听出发站选择
const handleFromSelect = (value: string) => {
  const station = StationList.value.find((item) => item.value === value);
  if (station) {
    form.value.from_station = station.alias;
  }
};

// 监听目的地选择
const handleToSelect = (value: string) => {
  const station = StationList.value.find((item) => item.value === value);
  if (station) {
    form.value.to_station = station.alias;
  }
};

// 日期禁用
const isDateDisabled = (timestamp: number) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 14);
  maxDate.setHours(23, 59, 59, 999);

  return timestamp < today.getTime() || timestamp > maxDate.getTime();
};

// 在组件挂载时初始化表格数据
onMounted(() => {
  if (ticketStore.tableData && ticketStore.tableData.length > 0) {
    tableData.value = ticketStore.tableData;
  }
});

const filterByDepartureTime = (train: TrainInfo) => {
  const selectedTime = form.value.time;
  if (selectedTime === '00:00-24:00') return true;
  
  const time = train.departureTime;
  const [start, end] = selectedTime.split('-');
  
  const trainTime = new Date(`2000/01/01 ${time}`);
  const startTime = new Date(`2000/01/01 ${start}`);
  const endTime = new Date(`2000/01/01 ${end}`);
  
  return trainTime >= startTime && trainTime <= endTime;
};

const filteredTableData = computed(() => {
  if (checkedValues.value.length === 0) return [];
  
  return tableData.value.filter(train => {
    // 首先检查发车时间
    if (!filterByDepartureTime(train)) return false;
    
    const trainNumber = train.trainNumber;
    if (checkedValues.value.includes('高铁/城际') && trainNumber.startsWith('G')) {
      return true;
    }
    if (checkedValues.value.includes('D动车') && trainNumber.startsWith('D')) {
      return true;
    }
    if (checkedValues.value.includes('Z直达') && trainNumber.startsWith('Z')) {
      return true;
    }
    if (checkedValues.value.includes('T特快') && trainNumber.startsWith('T')) {
      return true;
    }
    if (checkedValues.value.includes('K快速') && trainNumber.startsWith('K')) {
      return true;
    }
    // 其他类型的车次
    if (checkedValues.value.includes('其他') && 
        !['G', 'D', 'Z', 'T', 'K'].includes(trainNumber[0])) {
      return true;
    }
    return false;
  });
});

const emptyText = computed(() => {
  if (checkedValues.value.length === 0) {
    return '请选择要查看的车次类型';
  }
  return '暂无符合条件的车次';
});
</script>

<template>
  <n-card class="grabTickets" title="抢票页面">
    <n-spin :show="loading">
      <n-tabs type="line" animated>
        <n-tab-pane name="oasis" tab="单程">
          <n-form inline label-placement="left">
            <n-grid :cols="36" :x-gap="36">
              <n-form-item-gi :span="9" label="出发站：" path="from">
                <n-auto-complete
                  v-model:value="form.from"
                  :options="handleSearch(form.from)"
                  placeholder="请输入车站名称"
                  @select="handleFromSelect"
                />
                <!-- 交换按钮 -->
                <n-button
                  strong
                  secondary
                  round
                  type="primary"
                  :render-icon="renderIcon"
                  style="left: 10px"
                  @click="handleSwap"
                />
              </n-form-item-gi>

              <n-form-item-gi :span="8" label="目的地：" path="to">
                <n-auto-complete
                  v-model:value="form.to"
                  :options="handleSearch(form.to)"
                  placeholder="请输入车站名称"
                  @select="handleToSelect"
                />
              </n-form-item-gi>

              <n-form-item-gi :span="6" label="日期：" path="form">
                <n-date-picker
                  v-model:value="form.date"
                  type="date"
                  value-format="yyyy-MM-dd"
                  :default-value="Date.now()"
                  :is-date-disabled="isDateDisabled"
                />
              </n-form-item-gi>

              <n-form-item-gi :span="6">
                <n-button type="primary" @click="handleDataSearch"
                  >查询</n-button
                >
              </n-form-item-gi>

              <n-form-item-gi :span="8" label="发车时间：" path="from">
                <n-select v-model:value="form.time" :options="DepartureTime" />
              </n-form-item-gi>

              <n-form-item-gi :span="20" label="筛选：" path="from">
                <n-checkbox
                  style="margin-right: 10px"
                  :checked="checkAll"
                  @update:checked="handleCheckAll"
                  label="全部"
                />
                <n-checkbox-group
                  v-model:value="checkedValues"
                  @update:value="handleCheckedChange"
                >
                  <n-space item-style="display: flex;">
                    <n-checkbox
                      v-for="option in screenOptions"
                      :key="option"
                      :value="option"
                      :label="option"
                    />
                  </n-space>
                </n-checkbox-group>
              </n-form-item-gi>
            </n-grid>
          </n-form>
          <n-data-table
            size="small"
            :columns="columns"
            :data="filteredTableData"
            :bordered="false"
            :pagination="{
              pageSize: 10,
            }"
            :max-height="280"
            :row-key="(row: TrainInfo) => row.trainNumber"
            :empty="emptyText"
          />
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="往返"></n-tab-pane>
        <n-tab-pane name="jay chou" tab="中转乘"> 七里香 </n-tab-pane>
        <n-tab-pane name="www" tab="退改签"> 七里香 </n-tab-pane>
      </n-tabs>
    </n-spin>
  </n-card>
</template>

<style lang="scss">
.grabTickets {
  width: 95%;
  margin: 0 auto;
  margin-bottom: 16px;
}
</style>
