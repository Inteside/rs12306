// 车次信息
import { defineStore } from 'pinia';

interface TrainInfo {
    trainNumber: string;
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    seats: {
        specialClass: string;
        firstClass: string;
        secondClass: string;
        softSleeper: string;
        hardSleeper: string;
        hardSeat: string;
        noSeat: string;
    };
}

export const useTicketStore = defineStore('ticket', {
    state: () => ({
        formData: {
            from: '',
            to: '',
            date: '',
            time: '00:00-24:00',
            from_station: '',
            to_station: '',
        },
        checkedValues: ['高铁/城际', 'D动车', 'Z直达', 'T特快', 'K快速', '其他'],
        checkAll: true,
        tableData: [] as TrainInfo[],
    }),

    actions: {
        updateFormData(data: any) {
            this.formData = { ...this.formData, ...data };
        },
        updateCheckedValues(values: string[]) {
            this.checkedValues = values;
        },
        updateCheckAll(value: boolean) {
            this.checkAll = value;
        },
        updateTableData(data: any[]) {
            this.tableData = data;
        },
        // 返回车次数据
        getTicketData() {
            return this.formData;
        }
    },

    persist: true
});