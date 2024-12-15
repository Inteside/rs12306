const stationList = [
    {
        "label": "北京北",
        "value": "北京北",
        "alias": "VAP"
    },
    {
        "label": "北京东",
        "value": "北京东",
        "alias": "BOP"
    },
    {
        "label": "北京",
        "value": "北京",
        "alias": "BJP"
    },
    {
        "label": "北京南",
        "value": "北京南",
        "alias": "VNP"
    },
    {
        "label": "北京大兴",
        "value": "北京大兴",
        "alias": "IPP"
    },
    {
        "label": "北京西",
        "value": "北京西",
        "alias": "BXP"
    },
    {
        "label": "北京朝阳",
        "value": "北京朝阳",
        "alias": "IFP"
    },
    {
        "label": "重庆北",
        "value": "重庆北",
        "alias": "CUW"
    },
    {
        "label": "重庆",
        "value": "重庆",
        "alias": "CQW"
    },
    {
        "label": "重庆南",
        "value": "重庆南",
        "alias": "CRW"
    },
    {
        "label": "重庆西",
        "value": "重庆西",
        "alias": "CXW"
    },
    {
        "label": "上海",
        "value": "上海",
        "alias": "SHH"
    },
    {
        "label": "上海南",
        "value": "上海南",
        "alias": "SNH"
    },
    {
        "label": "上海虹桥",
        "value": "上海虹桥",
        "alias": "AOH"
    },
    {
        "label": "上海西",
        "value": "上海西",
        "alias": "SXH"
    },
    {
        "label": "天津北",
        "value": "天津北",
        "alias": "TBP"
    },
    {
        "label": "天津",
        "value": "天津",
        "alias": "TJP"
    },
    {
        "label": "天津南",
        "value": "天津南",
        "alias": "TIP"
    },
    {
        "label": "天津西",
        "value": "天津西",
        "alias": "TXP"
    },
    {
        "label": "万象",
        "value": "万象",
        "alias": "YTM"
    },
    {
        "label": "滨江",
        "value": "滨江",
        "alias": "BJB"
    },
    {
        "label": "百浪",
        "value": "百浪",
        "alias": "BRZ"
    },
    {
        "label": "班猫箐",
        "value": "班猫箐",
        "alias": "BNM"
    },
    {
        "label": "北营",
        "value": "北营",
        "alias": "BIV"
    },
    {
        "label": "长春",
        "value": "长春",
        "alias": "CCT"
    },
    {
        "label": "长春南",
        "value": "长春南",
        "alias": "CET"
    },
    {
        "label": "长春西",
        "value": "长春西",
        "alias": "CRT"
    },
    {
        "label": "成都东",
        "value": "成都东",
        "alias": "ICW"
    },
    {
        "label": "成都南",
        "value": "成都南",
        "alias": "CNW"
    },
    {
        "label": "成都",
        "value": "成都",
        "alias": "CDW"
    },
    {
        "label": "成都西",
        "value": "成都西",
        "alias": "CMW"
    },
    {
        "label": "陈官营",
        "value": "陈官营",
        "alias": "CAJ"
    },
    {
        "label": "长清",
        "value": "长清",
        "alias": "CNK"
    },
    {
        "label": "长沙",
        "value": "长沙",
        "alias": "CSQ"
    },
    {
        "label": "长沙南",
        "value": "长沙南",
        "alias": "CWQ"
    },
    {
        "label": "长沙西",
        "value": "长沙西",
        "alias": "RXQ"
    },
    {
        "label": "常庄",
        "value": "常庄",
        "alias": "CVK"
    },
    {
        "label": "大成",
        "value": "大成",
        "alias": "DCT"
    },
    {
        "label": "大拟",
        "value": "大拟",
        "alias": "DNZ"
    },
    {
        "label": "读书铺",
        "value": "读书铺",
        "alias": "DPM"
    },
    {
        "label": "大王滩",
        "value": "大王滩",
        "alias": "DZZ"
    },
    {
        "label": "大元",
        "value": "大元",
        "alias": "DYZ"
    },
    {
        "label": "丰水村",
        "value": "丰水村",
        "alias": "FSJ"
    },
    {
        "label": "福州",
        "value": "福州",
        "alias": "FZS"
    },
    {
        "label": "福州南",
        "value": "福州南",
        "alias": "FYS"
    },
    {
        "label": "甘草店",
        "value": "甘草店",
        "alias": "GDJ"
    },
    {
        "label": "钢城",
        "value": "钢城",
        "alias": "GAK"
    },
    {
        "label": "孤家子",
        "value": "孤家子",
        "alias": "GKT"
    },
    {
        "label": "广南卫",
        "value": "广南卫",
        "alias": "GNM"
    },
    {
        "label": "贵阳",
        "value": "贵阳",
        "alias": "GIW"
    },
    {
        "label": "贵阳北",
        "value": "贵阳北",
        "alias": "KQW"
    },
    {
        "label": "贵阳东",
        "value": "贵阳东",
        "alias": "KEW"
    },
    {
        "label": "广州北",
        "value": "广州北",
        "alias": "GBQ"
    },
    {
        "label": "广州东",
        "value": "广州东",
        "alias": "GGQ"
    },
    {
        "label": "广州",
        "value": "广州",
        "alias": "GZQ"
    },
    {
        "label": "广州南",
        "value": "广州南",
        "alias": "IZQ"
    },
    {
        "label": "广州西",
        "value": "广州西",
        "alias": "GXQ"
    },
    {
        "label": "广州白云",
        "value": "广州白云",
        "alias": "GBA"
    },
    {
        "label": "哈尔滨北",
        "value": "哈尔滨北",
        "alias": "HTB"
    },
    {
        "label": "哈尔滨",
        "value": "哈尔滨",
        "alias": "HBB"
    },
    {
        "label": "哈尔滨东",
        "value": "哈尔滨东",
        "alias": "VBB"
    },
    {
        "label": "哈尔滨西",
        "value": "哈尔滨西",
        "alias": "VAB"
    },
    {
        "label": "合肥北城",
        "value": "合肥北城",
        "alias": "COH"
    },
    {
        "label": "合肥",
        "value": "合肥",
        "alias": "HFH"
    },
    {
        "label": "合肥南",
        "value": "合肥南",
        "alias": "ENH"
    },
    {
        "label": "皇姑屯",
        "value": "皇姑屯",
        "alias": "HTT"
    },
    {
        "label": "呼和浩特东",
        "value": "呼和浩特东",
        "alias": "NDC"
    },
    {
        "label": "呼和浩特",
        "value": "呼和浩特",
        "alias": "HHC"
    },
    {
        "label": "海口东",
        "value": "海口东",
        "alias": "HMQ"
    },
    {
        "label": "海口",
        "value": "海口",
        "alias": "VUQ"
    },
    {
        "label": "杭州东",
        "value": "杭州东",
        "alias": "HGH"
    },
    {
        "label": "杭州",
        "value": "杭州",
        "alias": "HZH"
    },
    {
        "label": "杭州南",
        "value": "杭州南",
        "alias": "XHH"
    },
    {
        "label": "金马村",
        "value": "金马村",
        "alias": "JMM"
    },
    {
        "label": "济南",
        "value": "济南",
        "alias": "JNK"
    },
    {
        "label": "济南东",
        "value": "济南东",
        "alias": "MDK"
    },
    {
        "label": "济南西",
        "value": "济南西",
        "alias": "JGK"
    },
    {
        "label": "昆明",
        "value": "昆明",
        "alias": "KMM"
    },
    {
        "label": "昆明南",
        "value": "昆明南",
        "alias": "KOM"
    },
    {
        "label": "历城",
        "value": "历城",
        "alias": "VHK"
    },
    {
        "label": "蔺家楼",
        "value": "蔺家楼",
        "alias": "ULK"
    },
    {
        "label": "龙泉寺",
        "value": "龙泉寺",
        "alias": "UQJ"
    },
    {
        "label": "拉萨",
        "value": "拉萨",
        "alias": "LSO"
    },
    {
        "label": "乐善村",
        "value": "乐善村",
        "alias": "LUM"
    },
    {
        "label": "林盛堡",
        "value": "林盛堡",
        "alias": "LBT"
    },
    {
        "label": "骆驼巷",
        "value": "骆驼巷",
        "alias": "LTJ"
    },
    {
        "label": "莱芜北",
        "value": "莱芜北",
        "alias": "VIK"
    },
    {
        "label": "兰州东",
        "value": "兰州东",
        "alias": "LVJ"
    },
    {
        "label": "兰州",
        "value": "兰州",
        "alias": "LZJ"
    },
    {
        "label": "兰州新区",
        "value": "兰州新区",
        "alias": "LQJ"
    },
    {
        "label": "兰州西",
        "value": "兰州西",
        "alias": "LAJ"
    },
    {
        "label": "茂舍祖",
        "value": "茂舍祖",
        "alias": "MOM"
    },
    {
        "label": "南昌东",
        "value": "南昌东",
        "alias": "NUG"
    },
    {
        "label": "南昌",
        "value": "南昌",
        "alias": "NCG"
    },
    {
        "label": "南昌南",
        "value": "南昌南",
        "alias": "HOG"
    },
    {
        "label": "宁村",
        "value": "宁村",
        "alias": "NCZ"
    },
    {
        "label": "南昌西",
        "value": "南昌西",
        "alias": "NXG"
    },
    {
        "label": "南京",
        "value": "南京",
        "alias": "NJH"
    },
    {
        "label": "南京南",
        "value": "南京南",
        "alias": "NKH"
    },
    {
        "label": "那罗",
        "value": "那罗",
        "alias": "ULZ"
    },
    {
        "label": "南宁北",
        "value": "南宁北",
        "alias": "NRZ"
    },
    {
        "label": "南宁东",
        "value": "南宁东",
        "alias": "NFZ"
    },
    {
        "label": "南宁",
        "value": "南宁",
        "alias": "NNZ"
    },
    {
        "label": "南宁西",
        "value": "南宁西",
        "alias": "NXZ"
    },
    {
        "label": "那铺",
        "value": "那铺",
        "alias": "NPZ"
    },
    {
        "label": "暖泉",
        "value": "暖泉",
        "alias": "NQJ"
    },
    {
        "label": "坡底下",
        "value": "坡底下",
        "alias": "PXJ"
    },
    {
        "label": "七甸",
        "value": "七甸",
        "alias": "QDM"
    },
    {
        "label": "世博园",
        "value": "世博园",
        "alias": "ZWT"
    },
    {
        "label": "石家庄北",
        "value": "石家庄北",
        "alias": "VVP"
    },
    {
        "label": "石家庄东",
        "value": "石家庄东",
        "alias": "SXP"
    },
    {
        "label": "邵家堂",
        "value": "邵家堂",
        "alias": "SJJ"
    },
    {
        "label": "石家庄",
        "value": "石家庄",
        "alias": "SJP"
    },
    {
        "label": "施家嘴",
        "value": "施家嘴",
        "alias": "SHM"
    },
    {
        "label": "沈阳",
        "value": "沈阳",
        "alias": "SYT"
    },
    {
        "label": "沈阳北",
        "value": "沈阳北",
        "alias": "SBT"
    },
    {
        "label": "沈阳东",
        "value": "沈阳东",
        "alias": "SDT"
    },
    {
        "label": "沈阳南",
        "value": "沈阳南",
        "alias": "SOT"
    },
    {
        "label": "水源",
        "value": "水源",
        "alias": "OYJ"
    },
    {
        "label": "沈阳西",
        "value": "沈阳西",
        "alias": "OOT"
    },
    {
        "label": "桑园子",
        "value": "桑园子",
        "alias": "SAJ"
    },
    {
        "label": "太原北",
        "value": "太原北",
        "alias": "TBV"
    },
    {
        "label": "太原东",
        "value": "太原东",
        "alias": "TDV"
    },
    {
        "label": "太原南",
        "value": "太原南",
        "alias": "TNV"
    },
    {
        "label": "太原",
        "value": "太原",
        "alias": "TYV"
    },
    {
        "label": "武汉",
        "value": "武汉",
        "alias": "WHN"
    },
    {
        "label": "武汉东",
        "value": "武汉东",
        "alias": "LFN"
    },
    {
        "label": "王家湾",
        "value": "王家湾",
        "alias": "WJJ"
    },
    {
        "label": "乌鲁木齐南",
        "value": "乌鲁木齐南",
        "alias": "WMR"
    },
    {
        "label": "乌鲁木齐",
        "value": "乌鲁木齐",
        "alias": "WAR"
    },
    {
        "label": "吴圩机场",
        "value": "吴圩机场",
        "alias": "WJZ"
    },
    {
        "label": "王兆屯",
        "value": "王兆屯",
        "alias": "WZB"
    },
    {
        "label": "西安北",
        "value": "西安北",
        "alias": "EAY"
    },
    {
        "label": "西安",
        "value": "西安",
        "alias": "XAY"
    },
    {
        "label": "西固城",
        "value": "西固城",
        "alias": "XUJ"
    },
    {
        "label": "西街口",
        "value": "西街口",
        "alias": "EKM"
    },
    {
        "label": "许家台",
        "value": "许家台",
        "alias": "XTJ"
    },
    {
        "label": "西宁",
        "value": "西宁",
        "alias": "XNO"
    },
    {
        "label": "小哨",
        "value": "小哨",
        "alias": "XAM"
    },
    {
        "label": "新塘",
        "value": "新塘",
        "alias": "XWQ"
    },
    {
        "label": "雪野",
        "value": "雪野",
        "alias": "XYK"
    },
    {
        "label": "银川",
        "value": "银川",
        "alias": "YIJ"
    },
    {
        "label": "永丰营",
        "value": "永丰营",
        "alias": "YYM"
    },
    {
        "label": "一间堡",
        "value": "一间堡",
        "alias": "YJT"
    },
    {
        "label": "宜耐",
        "value": "宜耐",
        "alias": "YVM"
    },
    {
        "label": "羊堡",
        "value": "羊堡",
        "alias": "ABM"
    },
    {
        "label": "榆树台",
        "value": "榆树台",
        "alias": "YUT"
    },
    {
        "label": "引镇",
        "value": "引镇",
        "alias": "CAY"
    },
    {
        "label": "朱家窑",
        "value": "朱家窑",
        "alias": "ZUJ"
    },
    {
        "label": "章丘南",
        "value": "章丘南",
        "alias": "VQK"
    },
    {
        "label": "郑州东",
        "value": "郑州东",
        "alias": "ZAF"
    },
    {
        "label": "郑州航空港",
        "value": "郑州航空港",
        "alias": "ZIF"
    },
    {
        "label": "郑州",
        "value": "郑州",
        "alias": "ZZF"
    },
    {
        "label": "郑州西",
        "value": "郑州西",
        "alias": "XPF"
    },
    {
        "label": "昂昂溪",
        "value": "昂昂溪",
        "alias": "AAX"
    },
    {
        "label": "阿城北",
        "value": "阿城北",
        "alias": "ABB"
    },
    {
        "label": "阿城",
        "value": "阿城",
        "alias": "ACB"
    },
    {
        "label": "安次",
        "value": "安次",
        "alias": "ACI"
    },
    {
        "label": "安达",
        "value": "安达",
        "alias": "ADX"
    },
    {
        "label": "安德",
        "value": "安德",
        "alias": "ARW"
    },
    {
        "label": "阿尔山北",
        "value": "阿尔山北",
        "alias": "ARX"
    },
    {
        "label": "阿尔山",
        "value": "阿尔山",
        "alias": "ART"
    },
    {
        "label": "安吉",
        "value": "安吉",
        "alias": "AJU"
    },
    {
        "label": "安靖",
        "value": "安靖",
        "alias": "PYW"
    },
    {
        "label": "安家",
        "value": "安家",
        "alias": "AJB"
    },
    {
        "label": "安康",
        "value": "安康",
        "alias": "AKY"
    },
    {
        "label": "阿克苏",
        "value": "阿克苏",
        "alias": "ASR"
    },
    {
        "label": "阿克陶",
        "value": "阿克陶",
        "alias": "AER"
    },
    {
        "label": "阿拉尔",
        "value": "阿拉尔",
        "alias": "AOR"
    },
    {
        "label": "阿里河",
        "value": "阿里河",
        "alias": "AHX"
    },
    {
        "label": "阿拉山口",
        "value": "阿拉山口",
        "alias": "AKR"
    },
    {
        "label": "阿勒泰",
        "value": "阿勒泰",
        "alias": "AUR"
    },
    {
        "label": "安陆",
        "value": "安陆",
        "alias": "ALN"
    },
    {
        "label": "安陆西",
        "value": "安陆西",
        "alias": "AXN"
    },
    {
        "label": "安平",
        "value": "安平",
        "alias": "APT"
    },
    {
        "label": "安庆",
        "value": "安庆",
        "alias": "AQH"
    },
    {
        "label": "安庆西",
        "value": "安庆西",
        "alias": "AIU"
    },
    {
        "label": "安顺",
        "value": "安顺",
        "alias": "ASW"
    },
    {
        "label": "鞍山",
        "value": "鞍山",
        "alias": "AST"
    },
    {
        "label": "安顺西",
        "value": "安顺西",
        "alias": "ASE"
    },
    {
        "label": "鞍山西",
        "value": "鞍山西",
        "alias": "AXT"
    },
    {
        "label": "安亭北",
        "value": "安亭北",
        "alias": "ASH"
    },
    {
        "label": "安亭西",
        "value": "安亭西",
        "alias": "AXU"
    },
    {
        "label": "安阳",
        "value": "安阳",
        "alias": "AYF"
    },
    {
        "label": "安阳东",
        "value": "安阳东",
        "alias": "ADF"
    },
    {
        "label": "北安",
        "value": "北安",
        "alias": "BAB"
    },
    {
        "label": "博白",
        "value": "博白",
        "alias": "BBZ"
    },
    {
        "label": "蚌埠南",
        "value": "蚌埠南",
        "alias": "BMH"
    },
    {
        "label": "蚌埠",
        "value": "蚌埠",
        "alias": "BBH"
    },
    {
        "label": "巴楚",
        "value": "巴楚",
        "alias": "BCR"
    },
    {
        "label": "白城",
        "value": "白城",
        "alias": "BCT"
    },
    {
        "label": "北辰",
        "value": "北辰",
        "alias": "BII"
    },
    {
        "label": "宝坻北",
        "value": "宝坻北",
        "alias": "BPP"
    },
    {
        "label": "八达岭长城",
        "value": "八达岭长城",
        "alias": "VLP"
    },
    {
        "label": "保定东",
        "value": "保定东",
        "alias": "BMP"
    },
    {
        "label": "北戴河",
        "value": "北戴河",
        "alias": "BEP"
    },
    {
        "label": "保定",
        "value": "保定",
        "alias": "BDP"
    },
    {
        "label": "八达岭",
        "value": "八达岭",
        "alias": "ILP"
    },
    {
        "label": "巴东",
        "value": "巴东",
        "alias": "BBN"
    },
    {
        "label": "八方山",
        "value": "八方山",
        "alias": "FGQ"
    },
    {
        "label": "柏果",
        "value": "柏果",
        "alias": "BGM"
    },
    {
        "label": "北海",
        "value": "北海",
        "alias": "BHZ"
    },
    {
        "label": "布海",
        "value": "布海",
        "alias": "BUT"
    },
    {
        "label": "滨海",
        "value": "滨海",
        "alias": "YKP"
    },
    {
        "label": "滨海北",
        "value": "滨海北",
        "alias": "FCP"
    },
    {
        "label": "白河",
        "value": "白河",
        "alias": "BEL"
    },
    {
        "label": "滨海西",
        "value": "滨海西",
        "alias": "FHP"
    },
    {
        "label": "毕节",
        "value": "毕节",
        "alias": "BOE"
    },
    {
        "label": "宝鸡",
        "value": "宝鸡",
        "alias": "BJY"
    },
    {
        "label": "白涧",
        "value": "白涧",
        "alias": "BAP"
    },
    {
        "label": "宝鸡南",
        "value": "宝鸡南",
        "alias": "BBY"
    },
    {
        "label": "北京丰台",
        "value": "北京丰台",
        "alias": "FTP"
    },
    {
        "label": "白奎堡",
        "value": "白奎堡",
        "alias": "BKB"
    },
    {
        "label": "博克图",
        "value": "博克图",
        "alias": "BKX"
    },
    {
        "label": "博乐",
        "value": "博乐",
        "alias": "BER"
    },
    {
        "label": "巴林",
        "value": "巴林",
        "alias": "BLX"
    },
    {
        "label": "勃利",
        "value": "勃利",
        "alias": "BLB"
    },
    {
        "label": "白马井",
        "value": "白马井",
        "alias": "BFQ"
    },
    {
        "label": "八面通",
        "value": "八面通",
        "alias": "BMB"
    },
    {
        "label": "北票",
        "value": "北票",
        "alias": "BPT"
    },
    {
        "label": "宝清",
        "value": "宝清",
        "alias": "BUB"
    },
    {
        "label": "宝泉岭",
        "value": "宝泉岭",
        "alias": "BQB"
    },
    {
        "label": "百色",
        "value": "百色",
        "alias": "BIZ"
    },
    {
        "label": "白山市",
        "value": "白山市",
        "alias": "HJL"
    },
    {
        "label": "包头东",
        "value": "包头东",
        "alias": "BDC"
    },
    {
        "label": "包头",
        "value": "包头",
        "alias": "BTC"
    },
    {
        "label": "北屯市",
        "value": "北屯市",
        "alias": "BXR"
    },
    {
        "label": "宾西北",
        "value": "宾西北",
        "alias": "BBB"
    },
    {
        "label": "本溪",
        "value": "本溪",
        "alias": "BXT"
    },
    {
        "label": "步行街",
        "value": "步行街",
        "alias": "BWW"
    },
    {
        "label": "宾阳",
        "value": "宾阳",
        "alias": "UKZ"
    },
    {
        "label": "白云鄂博",
        "value": "白云鄂博",
        "alias": "BEC"
    },
    {
        "label": "白云北",
        "value": "白云北",
        "alias": "BVE"
    },
    {
        "label": "白云机场北",
        "value": "白云机场北",
        "alias": "BBA"
    },
    {
        "label": "白洋淀",
        "value": "白洋淀",
        "alias": "FWP"
    },
    {
        "label": "巴彦淖尔",
        "value": "巴彦淖尔",
        "alias": "FMC"
    },
    {
        "label": "背荫河",
        "value": "背荫河",
        "alias": "BYB"
    },
    {
        "label": "百宜",
        "value": "百宜",
        "alias": "FHW"
    },
    {
        "label": "巴彦高勒",
        "value": "巴彦高勒",
        "alias": "BAC"
    },
    {
        "label": "鲅鱼圈",
        "value": "鲅鱼圈",
        "alias": "BYT"
    },
    {
        "label": "白银西",
        "value": "白银西",
        "alias": "BXJ"
    },
    {
        "label": "白云西",
        "value": "白云西",
        "alias": "BXE"
    },
    {
        "label": "巴中东",
        "value": "巴中东",
        "alias": "BDE"
    },
    {
        "label": "彬州东",
        "value": "彬州东",
        "alias": "BFY"
    },
    {
        "label": "巴中",
        "value": "巴中",
        "alias": "IEW"
    },
    {
        "label": "滨州",
        "value": "滨州",
        "alias": "BIK"
    },
    {
        "label": "亳州",
        "value": "亳州",
        "alias": "BZH"
    },
    {
        "label": "宾州",
        "value": "宾州",
        "alias": "BZB"
    },
    {
        "label": "亳州南",
        "value": "亳州南",
        "alias": "BNU"
    },
    {
        "label": "查布嘎",
        "value": "查布嘎",
        "alias": "CBC"
    },
    {
        "label": "赤壁",
        "value": "赤壁",
        "alias": "CBN"
    },
    {
        "label": "长白山",
        "value": "长白山",
        "alias": "CUL"
    },
    {
        "label": "常德",
        "value": "常德",
        "alias": "VGQ"
    },
    {
        "label": "承德",
        "value": "承德",
        "alias": "CDP"
    },
    {
        "label": "承德南",
        "value": "承德南",
        "alias": "IVP"
    },
    {
        "label": "曹妃甸东",
        "value": "曹妃甸东",
        "alias": "POP"
    },
    {
        "label": "赤峰",
        "value": "赤峰",
        "alias": "CID"
    },
    {
        "label": "曹妃甸港",
        "value": "曹妃甸港",
        "alias": "PGP"
    },
    {
        "label": "赤峰南",
        "value": "赤峰南",
        "alias": "CFD"
    },
    {
        "label": "嵯岗",
        "value": "嵯岗",
        "alias": "CAX"
    },
    {
        "label": "柴岗",
        "value": "柴岗",
        "alias": "CGT"
    },
    {
        "label": "柴沟堡",
        "value": "柴沟堡",
        "alias": "CGV"
    },
    {
        "label": "长葛北",
        "value": "长葛北",
        "alias": "CGF"
    },
    {
        "label": "城固",
        "value": "城固",
        "alias": "CGY"
    },
    {
        "label": "成高子",
        "value": "成高子",
        "alias": "CZB"
    },
    {
        "label": "草海",
        "value": "草海",
        "alias": "WBW"
    },
    {
        "label": "巢湖东",
        "value": "巢湖东",
        "alias": "GUH"
    },
    {
        "label": "柴河",
        "value": "柴河",
        "alias": "CHB"
    },
    {
        "label": "巢湖",
        "value": "巢湖",
        "alias": "CIH"
    },
    {
        "label": "从江",
        "value": "从江",
        "alias": "KNW"
    },
    {
        "label": "蔡家崖",
        "value": "蔡家崖",
        "alias": "EBV"
    },
    {
        "label": "长乐东",
        "value": "长乐东",
        "alias": "CIS"
    },
    {
        "label": "长乐",
        "value": "长乐",
        "alias": "CAS"
    },
    {
        "label": "长临河",
        "value": "长临河",
        "alias": "FVH"
    },
    {
        "label": "慈利",
        "value": "慈利",
        "alias": "CUQ"
    },
    {
        "label": "茶陵",
        "value": "茶陵",
        "alias": "CDG"
    },
    {
        "label": "崇礼",
        "value": "崇礼",
        "alias": "KOP"
    },
    {
        "label": "昌黎",
        "value": "昌黎",
        "alias": "CLP"
    },
    {
        "label": "长流",
        "value": "长流",
        "alias": "CLA"
    },
    {
        "label": "长乐南",
        "value": "长乐南",
        "alias": "CVS"
    },
    {
        "label": "晨明",
        "value": "晨明",
        "alias": "CMB"
    },
    {
        "label": "苍南",
        "value": "苍南",
        "alias": "CEH"
    },
    {
        "label": "昌平北",
        "value": "昌平北",
        "alias": "VBP"
    },
    {
        "label": "常平东",
        "value": "常平东",
        "alias": "FQQ"
    },
    {
        "label": "翠屏",
        "value": "翠屏",
        "alias": "YBW"
    },
    {
        "label": "昌平",
        "value": "昌平",
        "alias": "CPP"
    },
    {
        "label": "长庆桥",
        "value": "长庆桥",
        "alias": "CQJ"
    },
    {
        "label": "崇仁",
        "value": "崇仁",
        "alias": "CRG"
    },
    {
        "label": "长寿北",
        "value": "长寿北",
        "alias": "COW"
    },
    {
        "label": "潮汕",
        "value": "潮汕",
        "alias": "CBQ"
    },
    {
        "label": "察素齐",
        "value": "察素齐",
        "alias": "CSC"
    },
    {
        "label": "朝天",
        "value": "朝天",
        "alias": "CTE"
    },
    {
        "label": "长汀南",
        "value": "长汀南",
        "alias": "CNS"
    },
    {
        "label": "朝天南",
        "value": "朝天南",
        "alias": "CTY"
    },
    {
        "label": "昌图",
        "value": "昌图",
        "alias": "CTT"
    },
    {
        "label": "昌图西",
        "value": "昌图西",
        "alias": "CPT"
    },
    {
        "label": "长汀镇",
        "value": "长汀镇",
        "alias": "CDB"
    },
    {
        "label": "长武",
        "value": "长武",
        "alias": "CWY"
    },
    {
        "label": "苍溪",
        "value": "苍溪",
        "alias": "CXE"
    },
    {
        "label": "辰溪",
        "value": "辰溪",
        "alias": "CXQ"
    },
    {
        "label": "磁县",
        "value": "磁县",
        "alias": "CIP"
    },
    {
        "label": "楚雄",
        "value": "楚雄",
        "alias": "CUM"
    },
    {
        "label": "曹县",
        "value": "曹县",
        "alias": "CXK"
    },
    {
        "label": "城西",
        "value": "城西",
        "alias": "CIA"
    },
    {
        "label": "长兴南",
        "value": "长兴南",
        "alias": "CFH"
    },
    {
        "label": "陈相屯",
        "value": "陈相屯",
        "alias": "CXT"
    },
    {
        "label": "春阳",
        "value": "春阳",
        "alias": "CAL"
    },
    {
        "label": "潮阳",
        "value": "潮阳",
        "alias": "CNQ"
    },
    {
        "label": "朝阳川",
        "value": "朝阳川",
        "alias": "CYL"
    },
    {
        "label": "朝阳湖",
        "value": "朝阳湖",
        "alias": "CYE"
    },
    {
        "label": "滁州北",
        "value": "滁州北",
        "alias": "CUH"
    },
    {
        "label": "常州北",
        "value": "常州北",
        "alias": "ESH"
    },
    {
        "label": "长治北",
        "value": "长治北",
        "alias": "CBF"
    },
    {
        "label": "长治东",
        "value": "长治东",
        "alias": "CUF"
    },
    {
        "label": "长征",
        "value": "长征",
        "alias": "CZJ"
    },
    {
        "label": "池州",
        "value": "池州",
        "alias": "IYH"
    },
    {
        "label": "滁州",
        "value": "滁州",
        "alias": "CXH"
    },
    {
        "label": "郴州",
        "value": "郴州",
        "alias": "CZQ"
    },
    {
        "label": "沧州",
        "value": "沧州",
        "alias": "COP"
    },
    {
        "label": "常州",
        "value": "常州",
        "alias": "CZH"
    },
    {
        "label": "长治",
        "value": "长治",
        "alias": "CZF"
    },
    {
        "label": "崇州",
        "value": "崇州",
        "alias": "CZE"
    },
    {
        "label": "崇左南",
        "value": "崇左南",
        "alias": "COZ"
    },
    {
        "label": "崇左",
        "value": "崇左",
        "alias": "CZZ"
    },
    {
        "label": "郴州西",
        "value": "郴州西",
        "alias": "ICQ"
    },
    {
        "label": "沧州西",
        "value": "沧州西",
        "alias": "CBP"
    },
    {
        "label": "大安北",
        "value": "大安北",
        "alias": "RNT"
    },
    {
        "label": "东安东",
        "value": "东安东",
        "alias": "DCZ"
    },
    {
        "label": "达坂城",
        "value": "达坂城",
        "alias": "DCR"
    },
    {
        "label": "定边",
        "value": "定边",
        "alias": "DYJ"
    },
    {
        "label": "东岔",
        "value": "东岔",
        "alias": "DCJ"
    },
    {
        "label": "丹东",
        "value": "丹东",
        "alias": "DUT"
    },
    {
        "label": "东方",
        "value": "东方",
        "alias": "UFQ"
    },
    {
        "label": "丹凤",
        "value": "丹凤",
        "alias": "DGY"
    },
    {
        "label": "大丰",
        "value": "大丰",
        "alias": "KRQ"
    },
    {
        "label": "东方红",
        "value": "东方红",
        "alias": "DFB"
    },
    {
        "label": "大方南",
        "value": "大方南",
        "alias": "DNE"
    },
    {
        "label": "东风南",
        "value": "东风南",
        "alias": "DPJ"
    },
    {
        "label": "东港北",
        "value": "东港北",
        "alias": "RGT"
    },
    {
        "label": "东莞东",
        "value": "东莞东",
        "alias": "DMQ"
    },
    {
        "label": "东莞南",
        "value": "东莞南",
        "alias": "DNA"
    },
    {
        "label": "大孤山",
        "value": "大孤山",
        "alias": "RMT"
    },
    {
        "label": "东莞",
        "value": "东莞",
        "alias": "RTQ"
    },
    {
        "label": "东莞西",
        "value": "东莞西",
        "alias": "WGQ"
    },
    {
        "label": "大红旗",
        "value": "大红旗",
        "alias": "DQD"
    },
    {
        "label": "大虎山",
        "value": "大虎山",
        "alias": "DHD"
    },
    {
        "label": "敦化",
        "value": "敦化",
        "alias": "DHL"
    },
    {
        "label": "敦煌",
        "value": "敦煌",
        "alias": "DHJ"
    },
    {
        "label": "德惠",
        "value": "德惠",
        "alias": "DHT"
    },
    {
        "label": "德惠西",
        "value": "德惠西",
        "alias": "DXT"
    },
    {
        "label": "东京城",
        "value": "东京城",
        "alias": "DJB"
    },
    {
        "label": "达家沟",
        "value": "达家沟",
        "alias": "DJT"
    },
    {
        "label": "垫江",
        "value": "垫江",
        "alias": "DJE"
    },
    {
        "label": "道滘",
        "value": "道滘",
        "alias": "RRQ"
    },
    {
        "label": "大涧",
        "value": "大涧",
        "alias": "DFP"
    },
    {
        "label": "洞井",
        "value": "洞井",
        "alias": "FWQ"
    },
    {
        "label": "都江堰",
        "value": "都江堰",
        "alias": "DDW"
    },
    {
        "label": "洞口",
        "value": "洞口",
        "alias": "DKA"
    },
    {
        "label": "大连北",
        "value": "大连北",
        "alias": "DFT"
    },
    {
        "label": "德令哈",
        "value": "德令哈",
        "alias": "DHO"
    },
    {
        "label": "达连河",
        "value": "达连河",
        "alias": "DCB"
    },
    {
        "label": "大荔",
        "value": "大荔",
        "alias": "DNY"
    },
    {
        "label": "大理",
        "value": "大理",
        "alias": "DKM"
    },
    {
        "label": "大连",
        "value": "大连",
        "alias": "DLT"
    },
    {
        "label": "大明湖",
        "value": "大明湖",
        "alias": "JAK"
    },
    {
        "label": "得莫利",
        "value": "得莫利",
        "alias": "DTB"
    },
    {
        "label": "东明县",
        "value": "东明县",
        "alias": "DNF"
    },
    {
        "label": "定南",
        "value": "定南",
        "alias": "DNG"
    },
    {
        "label": "定南南",
        "value": "定南南",
        "alias": "DIG"
    },
    {
        "label": "大埔",
        "value": "大埔",
        "alias": "DPI"
    },
    {
        "label": "大庆东",
        "value": "大庆东",
        "alias": "LFX"
    },
    {
        "label": "大庆",
        "value": "大庆",
        "alias": "DZX"
    },
    {
        "label": "对青山",
        "value": "对青山",
        "alias": "DQB"
    },
    {
        "label": "大庆西",
        "value": "大庆西",
        "alias": "RHX"
    },
    {
        "label": "东胜",
        "value": "东胜",
        "alias": "DOC"
    },
    {
        "label": "独山",
        "value": "独山",
        "alias": "RWW"
    },
    {
        "label": "砀山南",
        "value": "砀山南",
        "alias": "PRH"
    },
    {
        "label": "大石桥",
        "value": "大石桥",
        "alias": "DQT"
    },
    {
        "label": "东胜西",
        "value": "东胜西",
        "alias": "DYC"
    },
    {
        "label": "大同南",
        "value": "大同南",
        "alias": "DMV"
    },
    {
        "label": "大同",
        "value": "大同",
        "alias": "DTV"
    },
    {
        "label": "大屯",
        "value": "大屯",
        "alias": "DNT"
    },
    {
        "label": "大通西",
        "value": "大通西",
        "alias": "DTO"
    },
    {
        "label": "大武口",
        "value": "大武口",
        "alias": "DFJ"
    },
    {
        "label": "党武",
        "value": "党武",
        "alias": "DWE"
    },
    {
        "label": "定西北",
        "value": "定西北",
        "alias": "DNJ"
    },
    {
        "label": "大兴机场",
        "value": "大兴机场",
        "alias": "IWP"
    },
    {
        "label": "定西",
        "value": "定西",
        "alias": "DSJ"
    },
    {
        "label": "东乡",
        "value": "东乡",
        "alias": "DXG"
    },
    {
        "label": "大兴",
        "value": "大兴",
        "alias": "DXX"
    },
    {
        "label": "东兴市",
        "value": "东兴市",
        "alias": "RIZ"
    },
    {
        "label": "德阳",
        "value": "德阳",
        "alias": "DYW"
    },
    {
        "label": "当阳",
        "value": "当阳",
        "alias": "DYN"
    },
    {
        "label": "丹阳",
        "value": "丹阳",
        "alias": "DYH"
    },
    {
        "label": "大冶北",
        "value": "大冶北",
        "alias": "DBN"
    },
    {
        "label": "大英东",
        "value": "大英东",
        "alias": "IAW"
    },
    {
        "label": "都匀东",
        "value": "都匀东",
        "alias": "KJW"
    },
    {
        "label": "东营",
        "value": "东营",
        "alias": "DPK"
    },
    {
        "label": "大邑",
        "value": "大邑",
        "alias": "DEE"
    },
    {
        "label": "东营南",
        "value": "东营南",
        "alias": "DOK"
    },
    {
        "label": "大杨树",
        "value": "大杨树",
        "alias": "DUX"
    },
    {
        "label": "都匀",
        "value": "都匀",
        "alias": "RYW"
    },
    {
        "label": "德州东",
        "value": "德州东",
        "alias": "DIP"
    },
    {
        "label": "定州东",
        "value": "定州东",
        "alias": "DOP"
    },
    {
        "label": "邓州东",
        "value": "邓州东",
        "alias": "DDF"
    },
    {
        "label": "东至",
        "value": "东至",
        "alias": "DCH"
    },
    {
        "label": "达州",
        "value": "达州",
        "alias": "RXW"
    },
    {
        "label": "德州",
        "value": "德州",
        "alias": "DZP"
    },
    {
        "label": "定州",
        "value": "定州",
        "alias": "DXP"
    },
    {
        "label": "邓州",
        "value": "邓州",
        "alias": "DOF"
    },
    {
        "label": "峨边南",
        "value": "峨边南",
        "alias": "ENE"
    },
    {
        "label": "鄂尔多斯",
        "value": "鄂尔多斯",
        "alias": "EEC"
    },
    {
        "label": "额济纳",
        "value": "额济纳",
        "alias": "EJC"
    },
    {
        "label": "二连",
        "value": "二连",
        "alias": "RLC"
    },
    {
        "label": "峨眉",
        "value": "峨眉",
        "alias": "EMW"
    },
    {
        "label": "峨眉山",
        "value": "峨眉山",
        "alias": "IXW"
    },
    {
        "label": "恩施",
        "value": "恩施",
        "alias": "ESN"
    },
    {
        "label": "鄂州",
        "value": "鄂州",
        "alias": "ECN"
    },
    {
        "label": "防城港北",
        "value": "防城港北",
        "alias": "FBZ"
    },
    {
        "label": "福鼎",
        "value": "福鼎",
        "alias": "FES"
    },
    {
        "label": "肥东",
        "value": "肥东",
        "alias": "FIH"
    },
    {
        "label": "丰都",
        "value": "丰都",
        "alias": "FUW"
    },
    {
        "label": "发耳",
        "value": "发耳",
        "alias": "FEM"
    },
    {
        "label": "福海",
        "value": "福海",
        "alias": "FHR"
    },
    {
        "label": "凤凰机场",
        "value": "凤凰机场",
        "alias": "FJQ"
    },
    {
        "label": "凤凰城",
        "value": "凤凰城",
        "alias": "FHT"
    },
    {
        "label": "汾河",
        "value": "汾河",
        "alias": "FEV"
    },
    {
        "label": "奉化",
        "value": "奉化",
        "alias": "FHH"
    },
    {
        "label": "富锦",
        "value": "富锦",
        "alias": "FIB"
    },
    {
        "label": "范家屯",
        "value": "范家屯",
        "alias": "FTT"
    },
    {
        "label": "涪陵北",
        "value": "涪陵北",
        "alias": "FEW"
    },
    {
        "label": "风陵渡",
        "value": "风陵渡",
        "alias": "FLV"
    },
    {
        "label": "浮梁东",
        "value": "浮梁东",
        "alias": "FVG"
    },
    {
        "label": "涪陵",
        "value": "涪陵",
        "alias": "FLW"
    },
    {
        "label": "富拉尔基",
        "value": "富拉尔基",
        "alias": "FRX"
    },
    {
        "label": "福利区",
        "value": "福利区",
        "alias": "FLJ"
    },
    {
        "label": "阜宁东",
        "value": "阜宁东",
        "alias": "FDU"
    },
    {
        "label": "富宁",
        "value": "富宁",
        "alias": "FNM"
    },
    {
        "label": "福清",
        "value": "福清",
        "alias": "FQS"
    },
    {
        "label": "福泉",
        "value": "福泉",
        "alias": "VMW"
    },
    {
        "label": "芙蓉南",
        "value": "芙蓉南",
        "alias": "KCQ"
    },
    {
        "label": "抚顺北",
        "value": "抚顺北",
        "alias": "FET"
    },
    {
        "label": "富顺",
        "value": "富顺",
        "alias": "FSE"
    },
    {
        "label": "佛山",
        "value": "佛山",
        "alias": "FSQ"
    },
    {
        "label": "扶绥",
        "value": "扶绥",
        "alias": "FSZ"
    },
    {
        "label": "佛山西",
        "value": "佛山西",
        "alias": "FOQ"
    },
    {
        "label": "福田",
        "value": "福田",
        "alias": "NZQ"
    },
    {
        "label": "凤县",
        "value": "凤县",
        "alias": "FXY"
    },
    {
        "label": "阜新",
        "value": "阜新",
        "alias": "FOT"
    },
    {
        "label": "肥西",
        "value": "肥西",
        "alias": "FAH"
    },
    {
        "label": "阜新南",
        "value": "阜新南",
        "alias": "FXD"
    },
    {
        "label": "阜阳",
        "value": "阜阳",
        "alias": "FYH"
    },
    {
        "label": "富阳",
        "value": "富阳",
        "alias": "FYU"
    },
    {
        "label": "扶余北",
        "value": "扶余北",
        "alias": "FBT"
    },
    {
        "label": "分宜",
        "value": "分宜",
        "alias": "FYG"
    },
    {
        "label": "富蕴",
        "value": "富蕴",
        "alias": "FYR"
    },
    {
        "label": "富源",
        "value": "富源",
        "alias": "FYM"
    },
    {
        "label": "抚远",
        "value": "抚远",
        "alias": "FYB"
    },
    {
        "label": "富裕",
        "value": "富裕",
        "alias": "FYX"
    },
    {
        "label": "阜阳西",
        "value": "阜阳西",
        "alias": "FXU"
    },
    {
        "label": "丰镇",
        "value": "丰镇",
        "alias": "FZC"
    },
    {
        "label": "凤州",
        "value": "凤州",
        "alias": "FZY"
    },
    {
        "label": "抚州",
        "value": "抚州",
        "alias": "FZG"
    },
    {
        "label": "方正",
        "value": "方正",
        "alias": "FNB"
    },
    {
        "label": "广安南",
        "value": "广安南",
        "alias": "VUW"
    },
    {
        "label": "广安",
        "value": "广安",
        "alias": "VJW"
    },
    {
        "label": "高安",
        "value": "高安",
        "alias": "GCG"
    },
    {
        "label": "贵安",
        "value": "贵安",
        "alias": "GAE"
    },
    {
        "label": "古北口",
        "value": "古北口",
        "alias": "GKP"
    },
    {
        "label": "藁城",
        "value": "藁城",
        "alias": "GEP"
    },
    {
        "label": "藁城南",
        "value": "藁城南",
        "alias": "GUP"
    },
    {
        "label": "高村",
        "value": "高村",
        "alias": "GCV"
    },
    {
        "label": "古东",
        "value": "古东",
        "alias": "GDV"
    },
    {
        "label": "格尔木",
        "value": "格尔木",
        "alias": "GRO"
    },
    {
        "label": "贵港",
        "value": "贵港",
        "alias": "GGZ"
    },
    {
        "label": "甘谷",
        "value": "甘谷",
        "alias": "GGJ"
    },
    {
        "label": "根河",
        "value": "根河",
        "alias": "GEX"
    },
    {
        "label": "高花",
        "value": "高花",
        "alias": "HGD"
    },
    {
        "label": "古交",
        "value": "古交",
        "alias": "GJV"
    },
    {
        "label": "皋兰",
        "value": "皋兰",
        "alias": "GEJ"
    },
    {
        "label": "桂林北",
        "value": "桂林北",
        "alias": "GBZ"
    },
    {
        "label": "高楞",
        "value": "高楞",
        "alias": "GLB"
    },
    {
        "label": "桂林",
        "value": "桂林",
        "alias": "GLZ"
    },
    {
        "label": "古莲",
        "value": "古莲",
        "alias": "GRX"
    },
    {
        "label": "公庙子",
        "value": "公庙子",
        "alias": "GMC"
    },
    {
        "label": "广南县",
        "value": "广南县",
        "alias": "GXM"
    },
    {
        "label": "桂平",
        "value": "桂平",
        "alias": "GAZ"
    },
    {
        "label": "共青城",
        "value": "共青城",
        "alias": "GAG"
    },
    {
        "label": "固始",
        "value": "固始",
        "alias": "GXN"
    },
    {
        "label": "广水",
        "value": "广水",
        "alias": "GSN"
    },
    {
        "label": "谷山",
        "value": "谷山",
        "alias": "FFQ"
    },
    {
        "label": "观沙岭",
        "value": "观沙岭",
        "alias": "FKQ"
    },
    {
        "label": "干塘",
        "value": "干塘",
        "alias": "GNJ"
    },
    {
        "label": "广通北",
        "value": "广通北",
        "alias": "GPM"
    },
    {
        "label": "古田会址",
        "value": "古田会址",
        "alias": "STS"
    },
    {
        "label": "高兴",
        "value": "高兴",
        "alias": "VWW"
    },
    {
        "label": "冠县",
        "value": "冠县",
        "alias": "GHP"
    },
    {
        "label": "广阳",
        "value": "广阳",
        "alias": "LFP"
    },
    {
        "label": "高邑",
        "value": "高邑",
        "alias": "GIP"
    },
    {
        "label": "巩义",
        "value": "巩义",
        "alias": "GXF"
    },
    {
        "label": "巩义南",
        "value": "巩义南",
        "alias": "GYF"
    },
    {
        "label": "固原",
        "value": "固原",
        "alias": "GUJ"
    },
    {
        "label": "广元",
        "value": "广元",
        "alias": "GYW"
    },
    {
        "label": "赣榆",
        "value": "赣榆",
        "alias": "GYU"
    },
    {
        "label": "高邑西",
        "value": "高邑西",
        "alias": "GNP"
    },
    {
        "label": "高州",
        "value": "高州",
        "alias": "GSQ"
    },
    {
        "label": "赣州",
        "value": "赣州",
        "alias": "GZG"
    },
    {
        "label": "公主岭",
        "value": "公主岭",
        "alias": "GLT"
    },
    {
        "label": "公主岭南",
        "value": "公主岭南",
        "alias": "GBT"
    },
    {
        "label": "冠豸山",
        "value": "冠豸山",
        "alias": "GPS"
    },
    {
        "label": "盖州西",
        "value": "盖州西",
        "alias": "GAT"
    },
    {
        "label": "赣州西",
        "value": "赣州西",
        "alias": "GOG"
    },
    {
        "label": "淮安东",
        "value": "淮安东",
        "alias": "HAU"
    },
    {
        "label": "淮安",
        "value": "淮安",
        "alias": "AUH"
    },
    {
        "label": "红安西",
        "value": "红安西",
        "alias": "VXN"
    },
    {
        "label": "淮北",
        "value": "淮北",
        "alias": "HRH"
    },
    {
        "label": "鹤北",
        "value": "鹤北",
        "alias": "HMB"
    },
    {
        "label": "淮滨",
        "value": "淮滨",
        "alias": "HVN"
    },
    {
        "label": "河边",
        "value": "河边",
        "alias": "HBV"
    },
    {
        "label": "湖潮东",
        "value": "湖潮东",
        "alias": "HCE"
    },
    {
        "label": "韩城",
        "value": "韩城",
        "alias": "HCY"
    },
    {
        "label": "合川",
        "value": "合川",
        "alias": "WKW"
    },
    {
        "label": "珲春",
        "value": "珲春",
        "alias": "HUL"
    },
    {
        "label": "潢川",
        "value": "潢川",
        "alias": "KCN"
    },
    {
        "label": "海城",
        "value": "海城",
        "alias": "HCT"
    },
    {
        "label": "花城街",
        "value": "花城街",
        "alias": "HCA"
    },
    {
        "label": "黄村",
        "value": "黄村",
        "alias": "HCP"
    },
    {
        "label": "河池西",
        "value": "河池西",
        "alias": "HIZ"
    },
    {
        "label": "海城西",
        "value": "海城西",
        "alias": "HXT"
    },
    {
        "label": "邯郸",
        "value": "邯郸",
        "alias": "HDP"
    },
    {
        "label": "河东机场",
        "value": "河东机场",
        "alias": "HFJ"
    },
    {
        "label": "邯郸东",
        "value": "邯郸东",
        "alias": "HPP"
    },
    {
        "label": "横店",
        "value": "横店",
        "alias": "HJU"
    },
    {
        "label": "惠东南",
        "value": "惠东南",
        "alias": "KDQ"
    },
    {
        "label": "哈达铺",
        "value": "哈达铺",
        "alias": "HDJ"
    },
    {
        "label": "花都",
        "value": "花都",
        "alias": "HAA"
    },
    {
        "label": "洪洞西",
        "value": "洪洞西",
        "alias": "HTV"
    },
    {
        "label": "横道河子",
        "value": "横道河子",
        "alias": "HDB"
    },
    {
        "label": "霍尔果斯",
        "value": "霍尔果斯",
        "alias": "HFR"
    },
    {
        "label": "鹤岗",
        "value": "鹤岗",
        "alias": "HGB"
    },
    {
        "label": "黄冈东",
        "value": "黄冈东",
        "alias": "KAN"
    },
    {
        "label": "红果",
        "value": "红果",
        "alias": "HEM"
    },
    {
        "label": "汉沽",
        "value": "汉沽",
        "alias": "HGP"
    },
    {
        "label": "红光镇",
        "value": "红光镇",
        "alias": "IGW"
    },
    {
        "label": "红河",
        "value": "红河",
        "alias": "HHM"
    },
    {
        "label": "黑河",
        "value": "黑河",
        "alias": "HJB"
    },
    {
        "label": "怀化南",
        "value": "怀化南",
        "alias": "KAQ"
    },
    {
        "label": "黄河景区",
        "value": "黄河景区",
        "alias": "HCF"
    },
    {
        "label": "怀化",
        "value": "怀化",
        "alias": "HHQ"
    },
    {
        "label": "后湖",
        "value": "后湖",
        "alias": "IHN"
    },
    {
        "label": "环江",
        "value": "环江",
        "alias": "HFZ"
    },
    {
        "label": "和静",
        "value": "和静",
        "alias": "HJR"
    },
    {
        "label": "河津",
        "value": "河津",
        "alias": "HJV"
    },
    {
        "label": "怀集",
        "value": "怀集",
        "alias": "FAQ"
    },
    {
        "label": "华家",
        "value": "华家",
        "alias": "HJT"
    },
    {
        "label": "河口北",
        "value": "河口北",
        "alias": "HBM"
    },
    {
        "label": "宏克力",
        "value": "宏克力",
        "alias": "OKB"
    },
    {
        "label": "河口南",
        "value": "河口南",
        "alias": "HKJ"
    },
    {
        "label": "汉口",
        "value": "汉口",
        "alias": "HKN"
    },
    {
        "label": "呼兰",
        "value": "呼兰",
        "alias": "HUB"
    },
    {
        "label": "葫芦岛北",
        "value": "葫芦岛北",
        "alias": "HPD"
    },
    {
        "label": "葫芦岛",
        "value": "葫芦岛",
        "alias": "HLD"
    },
    {
        "label": "海拉尔",
        "value": "海拉尔",
        "alias": "HRX"
    },
    {
        "label": "哈拉海",
        "value": "哈拉海",
        "alias": "HIT"
    },
    {
        "label": "寒岭",
        "value": "寒岭",
        "alias": "HAT"
    },
    {
        "label": "海林",
        "value": "海林",
        "alias": "HRB"
    },
    {
        "label": "虎林",
        "value": "虎林",
        "alias": "VLB"
    },
    {
        "label": "霍林郭勒",
        "value": "霍林郭勒",
        "alias": "HWD"
    },
    {
        "label": "黄陵南",
        "value": "黄陵南",
        "alias": "VLY"
    },
    {
        "label": "海伦",
        "value": "海伦",
        "alias": "HLB"
    },
    {
        "label": "侯马",
        "value": "侯马",
        "alias": "HMV"
    },
    {
        "label": "黄梅东",
        "value": "黄梅东",
        "alias": "HDU"
    },
    {
        "label": "鲘门",
        "value": "鲘门",
        "alias": "KMQ"
    },
    {
        "label": "海门",
        "value": "海门",
        "alias": "HMU"
    },
    {
        "label": "哈密",
        "value": "哈密",
        "alias": "HMR"
    },
    {
        "label": "侯马西",
        "value": "侯马西",
        "alias": "HPV"
    },
    {
        "label": "淮南",
        "value": "淮南",
        "alias": "HAH"
    },
    {
        "label": "桦南",
        "value": "桦南",
        "alias": "HNB"
    },
    {
        "label": "淮南东",
        "value": "淮南东",
        "alias": "HOH"
    },
    {
        "label": "淮南南",
        "value": "淮南南",
        "alias": "HNU"
    },
    {
        "label": "海宁西",
        "value": "海宁西",
        "alias": "EUH"
    },
    {
        "label": "鹤庆",
        "value": "鹤庆",
        "alias": "HQM"
    },
    {
        "label": "怀柔北",
        "value": "怀柔北",
        "alias": "HBP"
    },
    {
        "label": "怀仁东",
        "value": "怀仁东",
        "alias": "HFV"
    },
    {
        "label": "怀柔南",
        "value": "怀柔南",
        "alias": "IMP"
    },
    {
        "label": "怀柔",
        "value": "怀柔",
        "alias": "HRP"
    },
    {
        "label": "华山北",
        "value": "华山北",
        "alias": "HDY"
    },
    {
        "label": "衡水北",
        "value": "衡水北",
        "alias": "IHP"
    },
    {
        "label": "黄山北",
        "value": "黄山北",
        "alias": "NYH"
    },
    {
        "label": "黄石东",
        "value": "黄石东",
        "alias": "OSN"
    },
    {
        "label": "和什托洛盖",
        "value": "和什托洛盖",
        "alias": "VSR"
    },
    {
        "label": "华山",
        "value": "华山",
        "alias": "HGY"
    },
    {
        "label": "和硕",
        "value": "和硕",
        "alias": "VUR"
    },
    {
        "label": "黑水",
        "value": "黑水",
        "alias": "HOT"
    },
    {
        "label": "衡水",
        "value": "衡水",
        "alias": "HSP"
    },
    {
        "label": "黄石",
        "value": "黄石",
        "alias": "HSN"
    },
    {
        "label": "黄山",
        "value": "黄山",
        "alias": "HKH"
    },
    {
        "label": "花山南",
        "value": "花山南",
        "alias": "KNN"
    },
    {
        "label": "黑山寺",
        "value": "黑山寺",
        "alias": "HVP"
    },
    {
        "label": "海石湾",
        "value": "海石湾",
        "alias": "HSO"
    },
    {
        "label": "黄山西",
        "value": "黄山西",
        "alias": "HWU"
    },
    {
        "label": "花山镇",
        "value": "花山镇",
        "alias": "HZA"
    },
    {
        "label": "黄土店",
        "value": "黄土店",
        "alias": "HKP"
    },
    {
        "label": "和田",
        "value": "和田",
        "alias": "VTR"
    },
    {
        "label": "会同",
        "value": "会同",
        "alias": "VTQ"
    },
    {
        "label": "海湾",
        "value": "海湾",
        "alias": "RWH"
    },
    {
        "label": "花溪大学城",
        "value": "花溪大学城",
        "alias": "HDE"
    },
    {
        "label": "环县",
        "value": "环县",
        "alias": "KXJ"
    },
    {
        "label": "花溪南",
        "value": "花溪南",
        "alias": "HNE"
    },
    {
        "label": "花溪西",
        "value": "花溪西",
        "alias": "HUE"
    },
    {
        "label": "惠阳",
        "value": "惠阳",
        "alias": "KNQ"
    },
    {
        "label": "衡阳",
        "value": "衡阳",
        "alias": "HYQ"
    },
    {
        "label": "海阳",
        "value": "海阳",
        "alias": "KYK"
    },
    {
        "label": "河源东",
        "value": "河源东",
        "alias": "HEA"
    },
    {
        "label": "衡阳东",
        "value": "衡阳东",
        "alias": "HVQ"
    },
    {
        "label": "华蓥",
        "value": "华蓥",
        "alias": "HUW"
    },
    {
        "label": "鄠邑",
        "value": "鄠邑",
        "alias": "KXY"
    },
    {
        "label": "汉源",
        "value": "汉源",
        "alias": "WHW"
    },
    {
        "label": "河源",
        "value": "河源",
        "alias": "VIQ"
    },
    {
        "label": "湟源",
        "value": "湟源",
        "alias": "HNO"
    },
    {
        "label": "惠州北",
        "value": "惠州北",
        "alias": "HUA"
    },
    {
        "label": "菏泽东",
        "value": "菏泽东",
        "alias": "KDK"
    },
    {
        "label": "菏泽",
        "value": "菏泽",
        "alias": "HIK"
    },
    {
        "label": "贺州",
        "value": "贺州",
        "alias": "HXZ"
    },
    {
        "label": "华州",
        "value": "华州",
        "alias": "HXY"
    },
    {
        "label": "湖州",
        "value": "湖州",
        "alias": "VZH"
    },
    {
        "label": "汉中",
        "value": "汉中",
        "alias": "HOY"
    },
    {
        "label": "惠州",
        "value": "惠州",
        "alias": "HCQ"
    },
    {
        "label": "吉安",
        "value": "吉安",
        "alias": "VAG"
    },
    {
        "label": "集安",
        "value": "集安",
        "alias": "JAL"
    },
    {
        "label": "建安",
        "value": "建安",
        "alias": "JUL"
    },
    {
        "label": "吉安西",
        "value": "吉安西",
        "alias": "JIG"
    },
    {
        "label": "江边村",
        "value": "江边村",
        "alias": "JBG"
    },
    {
        "label": "晋城东",
        "value": "晋城东",
        "alias": "JGF"
    },
    {
        "label": "金昌",
        "value": "金昌",
        "alias": "JCJ"
    },
    {
        "label": "晋城",
        "value": "晋城",
        "alias": "JCF"
    },
    {
        "label": "金城江",
        "value": "金城江",
        "alias": "JJZ"
    },
    {
        "label": "景德镇北",
        "value": "景德镇北",
        "alias": "JDG"
    },
    {
        "label": "建德",
        "value": "建德",
        "alias": "JDU"
    },
    {
        "label": "鸡东",
        "value": "鸡东",
        "alias": "JOB"
    },
    {
        "label": "景德镇",
        "value": "景德镇",
        "alias": "JCG"
    },
    {
        "label": "嘉峰",
        "value": "嘉峰",
        "alias": "JFF"
    },
    {
        "label": "加格达奇",
        "value": "加格达奇",
        "alias": "JGX"
    },
    {
        "label": "井冈山",
        "value": "井冈山",
        "alias": "JGG"
    },
    {
        "label": "近海",
        "value": "近海",
        "alias": "JHD"
    },
    {
        "label": "静海",
        "value": "静海",
        "alias": "JHP"
    },
    {
        "label": "蛟河",
        "value": "蛟河",
        "alias": "JHL"
    },
    {
        "label": "精河南",
        "value": "精河南",
        "alias": "JIR"
    },
    {
        "label": "金华南",
        "value": "金华南",
        "alias": "RNH"
    },
    {
        "label": "金华",
        "value": "金华",
        "alias": "JBH"
    },
    {
        "label": "蛟河西",
        "value": "蛟河西",
        "alias": "JOL"
    },
    {
        "label": "金华镇",
        "value": "金华镇",
        "alias": "JZE"
    },
    {
        "label": "晋江",
        "value": "晋江",
        "alias": "JJS"
    },
    {
        "label": "九江",
        "value": "九江",
        "alias": "JJG"
    },
    {
        "label": "军粮城北",
        "value": "军粮城北",
        "alias": "JMP"
    },
    {
        "label": "贾鲁河",
        "value": "贾鲁河",
        "alias": "JLF"
    },
    {
        "label": "吉林",
        "value": "吉林",
        "alias": "JLL"
    },
    {
        "label": "即墨北",
        "value": "即墨北",
        "alias": "JVK"
    },
    {
        "label": "江门",
        "value": "江门",
        "alias": "JOQ"
    },
    {
        "label": "荆门",
        "value": "荆门",
        "alias": "JMN"
    },
    {
        "label": "剑门关",
        "value": "剑门关",
        "alias": "JME"
    },
    {
        "label": "佳木斯",
        "value": "佳木斯",
        "alias": "JMB"
    },
    {
        "label": "荆门西",
        "value": "荆门西",
        "alias": "MXN"
    },
    {
        "label": "井南",
        "value": "井南",
        "alias": "JNP"
    },
    {
        "label": "建宁县北",
        "value": "建宁县北",
        "alias": "JCS"
    },
    {
        "label": "济宁",
        "value": "济宁",
        "alias": "JIK"
    },
    {
        "label": "江宁",
        "value": "江宁",
        "alias": "JJH"
    },
    {
        "label": "集宁南",
        "value": "集宁南",
        "alias": "JAC"
    },
    {
        "label": "江宁西",
        "value": "江宁西",
        "alias": "OKH"
    },
    {
        "label": "经棚",
        "value": "经棚",
        "alias": "JPC"
    },
    {
        "label": "建平",
        "value": "建平",
        "alias": "JAD"
    },
    {
        "label": "酒泉南",
        "value": "酒泉南",
        "alias": "JNJ"
    },
    {
        "label": "酒泉",
        "value": "酒泉",
        "alias": "JQJ"
    },
    {
        "label": "金山北",
        "value": "金山北",
        "alias": "EGH"
    },
    {
        "label": "吉首东",
        "value": "吉首东",
        "alias": "JDA"
    },
    {
        "label": "吉首",
        "value": "吉首",
        "alias": "JIQ"
    },
    {
        "label": "江山",
        "value": "江山",
        "alias": "JUH"
    },
    {
        "label": "尖山",
        "value": "尖山",
        "alias": "JPQ"
    },
    {
        "label": "建三江",
        "value": "建三江",
        "alias": "JIB"
    },
    {
        "label": "界首南",
        "value": "界首南",
        "alias": "JKU"
    },
    {
        "label": "九台",
        "value": "九台",
        "alias": "JTL"
    },
    {
        "label": "九台南",
        "value": "九台南",
        "alias": "JNL"
    },
    {
        "label": "镜铁山",
        "value": "镜铁山",
        "alias": "JVJ"
    },
    {
        "label": "绩溪北",
        "value": "绩溪北",
        "alias": "NRH"
    },
    {
        "label": "介休东",
        "value": "介休东",
        "alias": "JDV"
    },
    {
        "label": "介休",
        "value": "介休",
        "alias": "JXV"
    },
    {
        "label": "靖西",
        "value": "靖西",
        "alias": "JMZ"
    },
    {
        "label": "嘉兴",
        "value": "嘉兴",
        "alias": "JXH"
    },
    {
        "label": "鸡西",
        "value": "鸡西",
        "alias": "JXB"
    },
    {
        "label": "井陉",
        "value": "井陉",
        "alias": "JJP"
    },
    {
        "label": "进贤",
        "value": "进贤",
        "alias": "JUG"
    },
    {
        "label": "嘉兴南",
        "value": "嘉兴南",
        "alias": "EPH"
    },
    {
        "label": "进贤南",
        "value": "进贤南",
        "alias": "JXG"
    },
    {
        "label": "绩溪县",
        "value": "绩溪县",
        "alias": "JRH"
    },
    {
        "label": "鸡西西",
        "value": "鸡西西",
        "alias": "JAB"
    },
    {
        "label": "金阳",
        "value": "金阳",
        "alias": "JYE"
    },
    {
        "label": "巨野",
        "value": "巨野",
        "alias": "JYK"
    },
    {
        "label": "嘉峪关",
        "value": "嘉峪关",
        "alias": "JGJ"
    },
    {
        "label": "嘉峪关南",
        "value": "嘉峪关南",
        "alias": "JBJ"
    },
    {
        "label": "金阳南",
        "value": "金阳南",
        "alias": "JNE"
    },
    {
        "label": "简阳南",
        "value": "简阳南",
        "alias": "JOW"
    },
    {
        "label": "江油",
        "value": "江油",
        "alias": "JFW"
    },
    {
        "label": "金银潭",
        "value": "金银潭",
        "alias": "JTN"
    },
    {
        "label": "靖宇",
        "value": "靖宇",
        "alias": "JYL"
    },
    {
        "label": "锦州北",
        "value": "锦州北",
        "alias": "JFT"
    },
    {
        "label": "蓟州北",
        "value": "蓟州北",
        "alias": "JKP"
    },
    {
        "label": "荆州",
        "value": "荆州",
        "alias": "JBN"
    },
    {
        "label": "金寨",
        "value": "金寨",
        "alias": "JZH"
    },
    {
        "label": "锦州",
        "value": "锦州",
        "alias": "JZD"
    },
    {
        "label": "金州",
        "value": "金州",
        "alias": "JZT"
    },
    {
        "label": "晋州",
        "value": "晋州",
        "alias": "JXP"
    },
    {
        "label": "蓟州",
        "value": "蓟州",
        "alias": "JIP"
    },
    {
        "label": "锦州南",
        "value": "锦州南",
        "alias": "JOD"
    },
    {
        "label": "焦作",
        "value": "焦作",
        "alias": "JOF"
    },
    {
        "label": "焦作西",
        "value": "焦作西",
        "alias": "JIF"
    },
    {
        "label": "开安",
        "value": "开安",
        "alias": "KAT"
    },
    {
        "label": "库车",
        "value": "库车",
        "alias": "KCR"
    },
    {
        "label": "库都尔",
        "value": "库都尔",
        "alias": "KDX"
    },
    {
        "label": "库尔勒",
        "value": "库尔勒",
        "alias": "KLR"
    },
    {
        "label": "开封北",
        "value": "开封北",
        "alias": "KBF"
    },
    {
        "label": "开封",
        "value": "开封",
        "alias": "KFF"
    },
    {
        "label": "开福寺",
        "value": "开福寺",
        "alias": "FLQ"
    },
    {
        "label": "开化",
        "value": "开化",
        "alias": "KHU"
    },
    {
        "label": "康金井",
        "value": "康金井",
        "alias": "KJB"
    },
    {
        "label": "岢岚",
        "value": "岢岚",
        "alias": "KLV"
    },
    {
        "label": "凯里",
        "value": "凯里",
        "alias": "KLW"
    },
    {
        "label": "凯里南",
        "value": "凯里南",
        "alias": "QKW"
    },
    {
        "label": "库伦",
        "value": "库伦",
        "alias": "KLD"
    },
    {
        "label": "开鲁",
        "value": "开鲁",
        "alias": "KLC"
    },
    {
        "label": "克拉玛依",
        "value": "克拉玛依",
        "alias": "KHR"
    },
    {
        "label": "喀什",
        "value": "喀什",
        "alias": "KSR"
    },
    {
        "label": "昆山",
        "value": "昆山",
        "alias": "KSH"
    },
    {
        "label": "克山",
        "value": "克山",
        "alias": "KSB"
    },
    {
        "label": "昆山南",
        "value": "昆山南",
        "alias": "KNH"
    },
    {
        "label": "奎屯",
        "value": "奎屯",
        "alias": "KTR"
    },
    {
        "label": "开阳",
        "value": "开阳",
        "alias": "KVW"
    },
    {
        "label": "昆阳",
        "value": "昆阳",
        "alias": "KAM"
    },
    {
        "label": "开原",
        "value": "开原",
        "alias": "KYT"
    },
    {
        "label": "开原西",
        "value": "开原西",
        "alias": "KXT"
    },
    {
        "label": "康庄",
        "value": "康庄",
        "alias": "KZP"
    },
    {
        "label": "喀左",
        "value": "喀左",
        "alias": "KZT"
    },
    {
        "label": "隆安东",
        "value": "隆安东",
        "alias": "IDZ"
    },
    {
        "label": "六安",
        "value": "六安",
        "alias": "UAH"
    },
    {
        "label": "灵宝",
        "value": "灵宝",
        "alias": "LBF"
    },
    {
        "label": "来宾北",
        "value": "来宾北",
        "alias": "UCZ"
    },
    {
        "label": "灵宝西",
        "value": "灵宝西",
        "alias": "LPF"
    },
    {
        "label": "绿博园",
        "value": "绿博园",
        "alias": "LCF"
    },
    {
        "label": "临沧",
        "value": "临沧",
        "alias": "LXM"
    },
    {
        "label": "隆昌北",
        "value": "隆昌北",
        "alias": "NWW"
    },
    {
        "label": "乐昌东",
        "value": "乐昌东",
        "alias": "ILQ"
    },
    {
        "label": "芦潮港",
        "value": "芦潮港",
        "alias": "UCH"
    },
    {
        "label": "陆川",
        "value": "陆川",
        "alias": "LKZ"
    },
    {
        "label": "龙川",
        "value": "龙川",
        "alias": "LUQ"
    },
    {
        "label": "利川",
        "value": "利川",
        "alias": "LCN"
    },
    {
        "label": "临川",
        "value": "临川",
        "alias": "LCG"
    },
    {
        "label": "隆昌",
        "value": "隆昌",
        "alias": "LCW"
    },
    {
        "label": "潞城",
        "value": "潞城",
        "alias": "UTP"
    },
    {
        "label": "聊城",
        "value": "聊城",
        "alias": "UCK"
    },
    {
        "label": "陵城",
        "value": "陵城",
        "alias": "LGK"
    },
    {
        "label": "龙川西",
        "value": "龙川西",
        "alias": "LCA"
    },
    {
        "label": "聊城西",
        "value": "聊城西",
        "alias": "VXK"
    },
    {
        "label": "老城镇",
        "value": "老城镇",
        "alias": "ACQ"
    },
    {
        "label": "两当",
        "value": "两当",
        "alias": "LDY"
    },
    {
        "label": "鹿道",
        "value": "鹿道",
        "alias": "LDL"
    },
    {
        "label": "龙洞堡",
        "value": "龙洞堡",
        "alias": "FVW"
    },
    {
        "label": "娄底",
        "value": "娄底",
        "alias": "LDQ"
    },
    {
        "label": "娄底南",
        "value": "娄底南",
        "alias": "UOQ"
    },
    {
        "label": "离堆公园",
        "value": "离堆公园",
        "alias": "INW"
    },
    {
        "label": "廊坊",
        "value": "廊坊",
        "alias": "LJP"
    },
    {
        "label": "娄烦",
        "value": "娄烦",
        "alias": "USV"
    },
    {
        "label": "陆丰",
        "value": "陆丰",
        "alias": "LLQ"
    },
    {
        "label": "临汾",
        "value": "临汾",
        "alias": "LFV"
    },
    {
        "label": "临汾西",
        "value": "临汾西",
        "alias": "LXV"
    },
    {
        "label": "拉古",
        "value": "拉古",
        "alias": "LGB"
    },
    {
        "label": "芦官",
        "value": "芦官",
        "alias": "LAE"
    },
    {
        "label": "麓谷",
        "value": "麓谷",
        "alias": "BNQ"
    },
    {
        "label": "良各庄",
        "value": "良各庄",
        "alias": "LGP"
    },
    {
        "label": "临河",
        "value": "临河",
        "alias": "LHC"
    },
    {
        "label": "柳河",
        "value": "柳河",
        "alias": "LNL"
    },
    {
        "label": "漯河",
        "value": "漯河",
        "alias": "LON"
    },
    {
        "label": "六合",
        "value": "六合",
        "alias": "KLH"
    },
    {
        "label": "珞璜南",
        "value": "珞璜南",
        "alias": "LNE"
    },
    {
        "label": "隆回",
        "value": "隆回",
        "alias": "LHA"
    },
    {
        "label": "隆化",
        "value": "隆化",
        "alias": "UHP"
    },
    {
        "label": "绿化",
        "value": "绿化",
        "alias": "LWJ"
    },
    {
        "label": "漯河西",
        "value": "漯河西",
        "alias": "LBN"
    },
    {
        "label": "刘家店",
        "value": "刘家店",
        "alias": "UDT"
    },
    {
        "label": "龙井",
        "value": "龙井",
        "alias": "LJL"
    },
    {
        "label": "临江",
        "value": "临江",
        "alias": "LQL"
    },
    {
        "label": "丽江",
        "value": "丽江",
        "alias": "LHM"
    },
    {
        "label": "龙嘉",
        "value": "龙嘉",
        "alias": "UJL"
    },
    {
        "label": "庐江",
        "value": "庐江",
        "alias": "UJH"
    },
    {
        "label": "连江",
        "value": "连江",
        "alias": "LKS"
    },
    {
        "label": "庐江西",
        "value": "庐江西",
        "alias": "LUU"
    },
    {
        "label": "兰考",
        "value": "兰考",
        "alias": "LKF"
    },
    {
        "label": "兰考南",
        "value": "兰考南",
        "alias": "LUF"
    },
    {
        "label": "林口",
        "value": "林口",
        "alias": "LKB"
    },
    {
        "label": "龙口市",
        "value": "龙口市",
        "alias": "UKK"
    },
    {
        "label": "吕梁",
        "value": "吕梁",
        "alias": "LHV"
    },
    {
        "label": "醴陵",
        "value": "醴陵",
        "alias": "LLG"
    },
    {
        "label": "兰棱",
        "value": "兰棱",
        "alias": "LLB"
    },
    {
        "label": "拉林",
        "value": "拉林",
        "alias": "LAB"
    },
    {
        "label": "柳林南",
        "value": "柳林南",
        "alias": "LKV"
    },
    {
        "label": "陇南",
        "value": "陇南",
        "alias": "INJ"
    },
    {
        "label": "辽宁朝阳",
        "value": "辽宁朝阳",
        "alias": "VET"
    },
    {
        "label": "梁平",
        "value": "梁平",
        "alias": "UQW"
    },
    {
        "label": "滦平",
        "value": "滦平",
        "alias": "UPP"
    },
    {
        "label": "罗平",
        "value": "罗平",
        "alias": "LPM"
    },
    {
        "label": "梁平南",
        "value": "梁平南",
        "alias": "LPE"
    },
    {
        "label": "临平南",
        "value": "临平南",
        "alias": "EVH"
    },
    {
        "label": "六盘水",
        "value": "六盘水",
        "alias": "UMW"
    },
    {
        "label": "灵丘",
        "value": "灵丘",
        "alias": "LVV"
    },
    {
        "label": "龙桥",
        "value": "龙桥",
        "alias": "LQU"
    },
    {
        "label": "龙山北",
        "value": "龙山北",
        "alias": "LBA"
    },
    {
        "label": "灵石东",
        "value": "灵石东",
        "alias": "UDV"
    },
    {
        "label": "乐山",
        "value": "乐山",
        "alias": "IVW"
    },
    {
        "label": "陵水",
        "value": "陵水",
        "alias": "LIQ"
    },
    {
        "label": "丽水",
        "value": "丽水",
        "alias": "USH"
    },
    {
        "label": "旅顺",
        "value": "旅顺",
        "alias": "LST"
    },
    {
        "label": "庐山",
        "value": "庐山",
        "alias": "LSG"
    },
    {
        "label": "溧水",
        "value": "溧水",
        "alias": "LDH"
    },
    {
        "label": "岚山西",
        "value": "岚山西",
        "alias": "UWK"
    },
    {
        "label": "黎塘",
        "value": "黎塘",
        "alias": "LTZ"
    },
    {
        "label": "芦台",
        "value": "芦台",
        "alias": "LTP"
    },
    {
        "label": "临潼",
        "value": "临潼",
        "alias": "LIY"
    },
    {
        "label": "乐同",
        "value": "乐同",
        "alias": "LEA"
    },
    {
        "label": "灵武北",
        "value": "灵武北",
        "alias": "UWJ"
    },
    {
        "label": "莱芜东",
        "value": "莱芜东",
        "alias": "LWK"
    },
    {
        "label": "洛湾三江",
        "value": "洛湾三江",
        "alias": "KRW"
    },
    {
        "label": "泸县",
        "value": "泸县",
        "alias": "LXE"
    },
    {
        "label": "澧县",
        "value": "澧县",
        "alias": "LEQ"
    },
    {
        "label": "陇西",
        "value": "陇西",
        "alias": "LXJ"
    },
    {
        "label": "陇县",
        "value": "陇县",
        "alias": "LXY"
    },
    {
        "label": "临西",
        "value": "临西",
        "alias": "UEP"
    },
    {
        "label": "莱西",
        "value": "莱西",
        "alias": "LBK"
    },
    {
        "label": "兰溪",
        "value": "兰溪",
        "alias": "LWH"
    },
    {
        "label": "良乡",
        "value": "良乡",
        "alias": "LAP"
    },
    {
        "label": "略阳",
        "value": "略阳",
        "alias": "LYY"
    },
    {
        "label": "辽阳",
        "value": "辽阳",
        "alias": "LYT"
    },
    {
        "label": "耒阳",
        "value": "耒阳",
        "alias": "LYQ"
    },
    {
        "label": "溧阳",
        "value": "溧阳",
        "alias": "LEH"
    },
    {
        "label": "龙岩",
        "value": "龙岩",
        "alias": "LYS"
    },
    {
        "label": "洛阳",
        "value": "洛阳",
        "alias": "LYF"
    },
    {
        "label": "临沂北",
        "value": "临沂北",
        "alias": "UMK"
    },
    {
        "label": "连云港东",
        "value": "连云港东",
        "alias": "UKH"
    },
    {
        "label": "洛阳东",
        "value": "洛阳东",
        "alias": "LDF"
    },
    {
        "label": "连云港",
        "value": "连云港",
        "alias": "UIH"
    },
    {
        "label": "临沂",
        "value": "临沂",
        "alias": "LVK"
    },
    {
        "label": "洛阳龙门",
        "value": "洛阳龙门",
        "alias": "LLF"
    },
    {
        "label": "柳园南",
        "value": "柳园南",
        "alias": "LNR"
    },
    {
        "label": "凌源",
        "value": "凌源",
        "alias": "LYD"
    },
    {
        "label": "辽源",
        "value": "辽源",
        "alias": "LYL"
    },
    {
        "label": "柳园",
        "value": "柳园",
        "alias": "DHR"
    },
    {
        "label": "涟源",
        "value": "涟源",
        "alias": "LAQ"
    },
    {
        "label": "涞源",
        "value": "涞源",
        "alias": "LYP"
    },
    {
        "label": "罗源",
        "value": "罗源",
        "alias": "LVS"
    },
    {
        "label": "耒阳西",
        "value": "耒阳西",
        "alias": "LPQ"
    },
    {
        "label": "泸州",
        "value": "泸州",
        "alias": "LUE"
    },
    {
        "label": "林芝",
        "value": "林芝",
        "alias": "LZO"
    },
    {
        "label": "柳州",
        "value": "柳州",
        "alias": "LZZ"
    },
    {
        "label": "六枝",
        "value": "六枝",
        "alias": "LIW"
    },
    {
        "label": "阆中",
        "value": "阆中",
        "alias": "LZE"
    },
    {
        "label": "龙镇",
        "value": "龙镇",
        "alias": "LZA"
    },
    {
        "label": "立志",
        "value": "立志",
        "alias": "LZX"
    },
    {
        "label": "辽中",
        "value": "辽中",
        "alias": "LZD"
    },
    {
        "label": "马鞍山东",
        "value": "马鞍山东",
        "alias": "OMH"
    },
    {
        "label": "麻城北",
        "value": "麻城北",
        "alias": "MBN"
    },
    {
        "label": "麻城",
        "value": "麻城",
        "alias": "MCN"
    },
    {
        "label": "渑池南",
        "value": "渑池南",
        "alias": "MNF"
    },
    {
        "label": "免渡河",
        "value": "免渡河",
        "alias": "MDX"
    },
    {
        "label": "磨丁",
        "value": "磨丁",
        "alias": "VBM"
    },
    {
        "label": "牡丹江",
        "value": "牡丹江",
        "alias": "MDB"
    },
    {
        "label": "莫尔道嘎",
        "value": "莫尔道嘎",
        "alias": "MRX"
    },
    {
        "label": "帽儿山",
        "value": "帽儿山",
        "alias": "MRB"
    },
    {
        "label": "帽儿山西",
        "value": "帽儿山西",
        "alias": "MUB"
    },
    {
        "label": "明光",
        "value": "明光",
        "alias": "MGH"
    },
    {
        "label": "满归",
        "value": "满归",
        "alias": "MHX"
    },
    {
        "label": "孟关",
        "value": "孟关",
        "alias": "MGE"
    },
    {
        "label": "磨憨",
        "value": "磨憨",
        "alias": "MHM"
    },
    {
        "label": "漠河",
        "value": "漠河",
        "alias": "MVX"
    },
    {
        "label": "梅河口",
        "value": "梅河口",
        "alias": "MHL"
    },
    {
        "label": "民和南",
        "value": "民和南",
        "alias": "MNO"
    },
    {
        "label": "孟家岗",
        "value": "孟家岗",
        "alias": "MGB"
    },
    {
        "label": "米兰",
        "value": "米兰",
        "alias": "MIR"
    },
    {
        "label": "勐腊",
        "value": "勐腊",
        "alias": "MWM"
    },
    {
        "label": "美兰",
        "value": "美兰",
        "alias": "MHQ"
    },
    {
        "label": "弥勒",
        "value": "弥勒",
        "alias": "MLM"
    },
    {
        "label": "穆棱",
        "value": "穆棱",
        "alias": "MLB"
    },
    {
        "label": "茂名",
        "value": "茂名",
        "alias": "MDQ"
    },
    {
        "label": "茂名西",
        "value": "茂名西",
        "alias": "MMZ"
    },
    {
        "label": "冕宁",
        "value": "冕宁",
        "alias": "UGW"
    },
    {
        "label": "玛纳斯",
        "value": "玛纳斯",
        "alias": "MSR"
    },
    {
        "label": "闽清北",
        "value": "闽清北",
        "alias": "MBS"
    },
    {
        "label": "民权",
        "value": "民权",
        "alias": "MQF"
    },
    {
        "label": "眉山东",
        "value": "眉山东",
        "alias": "IUW"
    },
    {
        "label": "名山",
        "value": "名山",
        "alias": "MSE"
    },
    {
        "label": "密山",
        "value": "密山",
        "alias": "MSB"
    },
    {
        "label": "庙山",
        "value": "庙山",
        "alias": "MSN"
    },
    {
        "label": "马三家",
        "value": "马三家",
        "alias": "MJT"
    },
    {
        "label": "米沙子",
        "value": "米沙子",
        "alias": "MST"
    },
    {
        "label": "麻尾",
        "value": "麻尾",
        "alias": "VAW"
    },
    {
        "label": "岷县",
        "value": "岷县",
        "alias": "MXJ"
    },
    {
        "label": "勉县",
        "value": "勉县",
        "alias": "MVY"
    },
    {
        "label": "茫崖",
        "value": "茫崖",
        "alias": "HTO"
    },
    {
        "label": "绵阳",
        "value": "绵阳",
        "alias": "MYW"
    },
    {
        "label": "密云北",
        "value": "密云北",
        "alias": "MUP"
    },
    {
        "label": "孟塬",
        "value": "孟塬",
        "alias": "HSY"
    },
    {
        "label": "墨玉",
        "value": "墨玉",
        "alias": "MUR"
    },
    {
        "label": "门源",
        "value": "门源",
        "alias": "MYO"
    },
    {
        "label": "暮云",
        "value": "暮云",
        "alias": "KIQ"
    },
    {
        "label": "密云",
        "value": "密云",
        "alias": "MYP"
    },
    {
        "label": "梅州",
        "value": "梅州",
        "alias": "MOQ"
    },
    {
        "label": "孟庄",
        "value": "孟庄",
        "alias": "MZF"
    },
    {
        "label": "蒙自",
        "value": "蒙自",
        "alias": "MZM"
    },
    {
        "label": "满洲里",
        "value": "满洲里",
        "alias": "MLX"
    },
    {
        "label": "梅州西",
        "value": "梅州西",
        "alias": "MXA"
    },
    {
        "label": "宁安",
        "value": "宁安",
        "alias": "NAB"
    },
    {
        "label": "农安",
        "value": "农安",
        "alias": "NAT"
    },
    {
        "label": "宁波东",
        "value": "宁波东",
        "alias": "NVH"
    },
    {
        "label": "宁波",
        "value": "宁波",
        "alias": "NGH"
    },
    {
        "label": "南部",
        "value": "南部",
        "alias": "NBE"
    },
    {
        "label": "南曹",
        "value": "南曹",
        "alias": "NEF"
    },
    {
        "label": "南充北",
        "value": "南充北",
        "alias": "NCE"
    },
    {
        "label": "南充",
        "value": "南充",
        "alias": "NCW"
    },
    {
        "label": "南城",
        "value": "南城",
        "alias": "NDG"
    },
    {
        "label": "南岔",
        "value": "南岔",
        "alias": "NCB"
    },
    {
        "label": "南丹",
        "value": "南丹",
        "alias": "NDZ"
    },
    {
        "label": "宁德",
        "value": "宁德",
        "alias": "NES"
    },
    {
        "label": "南大庙",
        "value": "南大庙",
        "alias": "NMP"
    },
    {
        "label": "宁东南",
        "value": "宁东南",
        "alias": "NDJ"
    },
    {
        "label": "宁东",
        "value": "宁东",
        "alias": "NOJ"
    },
    {
        "label": "南芬",
        "value": "南芬",
        "alias": "NFT"
    },
    {
        "label": "南丰",
        "value": "南丰",
        "alias": "NFG"
    },
    {
        "label": "宁海",
        "value": "宁海",
        "alias": "NHH"
    },
    {
        "label": "南湖东",
        "value": "南湖东",
        "alias": "NDN"
    },
    {
        "label": "讷河",
        "value": "讷河",
        "alias": "NHX"
    },
    {
        "label": "牛河梁",
        "value": "牛河梁",
        "alias": "LKT"
    },
    {
        "label": "内江北",
        "value": "内江北",
        "alias": "NKW"
    },
    {
        "label": "内江",
        "value": "内江",
        "alias": "NJW"
    },
    {
        "label": "嫩江",
        "value": "嫩江",
        "alias": "NGX"
    },
    {
        "label": "南江",
        "value": "南江",
        "alias": "FIW"
    },
    {
        "label": "牛家",
        "value": "牛家",
        "alias": "NJB"
    },
    {
        "label": "南口",
        "value": "南口",
        "alias": "NKP"
    },
    {
        "label": "牛栏山",
        "value": "牛栏山",
        "alias": "NLP"
    },
    {
        "label": "宁陵县",
        "value": "宁陵县",
        "alias": "NLF"
    },
    {
        "label": "奈曼",
        "value": "奈曼",
        "alias": "NMD"
    },
    {
        "label": "尼木",
        "value": "尼木",
        "alias": "NMO"
    },
    {
        "label": "南平市",
        "value": "南平市",
        "alias": "NOS"
    },
    {
        "label": "宁强南",
        "value": "宁强南",
        "alias": "NOY"
    },
    {
        "label": "那曲",
        "value": "那曲",
        "alias": "NQO"
    },
    {
        "label": "南通",
        "value": "南通",
        "alias": "NUH"
    },
    {
        "label": "南通西",
        "value": "南通西",
        "alias": "NXU"
    },
    {
        "label": "宁武",
        "value": "宁武",
        "alias": "NWV"
    },
    {
        "label": "南翔北",
        "value": "南翔北",
        "alias": "NEH"
    },
    {
        "label": "南雄",
        "value": "南雄",
        "alias": "NCQ"
    },
    {
        "label": "宁乡",
        "value": "宁乡",
        "alias": "NXQ"
    },
    {
        "label": "南阳",
        "value": "南阳",
        "alias": "NFF"
    },
    {
        "label": "南阳东",
        "value": "南阳东",
        "alias": "NOF"
    },
    {
        "label": "纳雍",
        "value": "纳雍",
        "alias": "NYE"
    },
    {
        "label": "南峪",
        "value": "南峪",
        "alias": "NUP"
    },
    {
        "label": "南阳寨",
        "value": "南阳寨",
        "alias": "NYF"
    },
    {
        "label": "碾子山",
        "value": "碾子山",
        "alias": "NZX"
    },
    {
        "label": "普安",
        "value": "普安",
        "alias": "PAN"
    },
    {
        "label": "蒲城东",
        "value": "蒲城东",
        "alias": "PEY"
    },
    {
        "label": "平昌",
        "value": "平昌",
        "alias": "PCE"
    },
    {
        "label": "平顶山",
        "value": "平顶山",
        "alias": "PEN"
    },
    {
        "label": "平度",
        "value": "平度",
        "alias": "PNK"
    },
    {
        "label": "平度西",
        "value": "平度西",
        "alias": "PAK"
    },
    {
        "label": "平顶山西",
        "value": "平顶山西",
        "alias": "PDF"
    },
    {
        "label": "普洱",
        "value": "普洱",
        "alias": "PEM"
    },
    {
        "label": "平房",
        "value": "平房",
        "alias": "PFB"
    },
    {
        "label": "盘锦北",
        "value": "盘锦北",
        "alias": "PBD"
    },
    {
        "label": "盘锦",
        "value": "盘锦",
        "alias": "PVD"
    },
    {
        "label": "蒲江",
        "value": "蒲江",
        "alias": "PJE"
    },
    {
        "label": "蓬莱",
        "value": "蓬莱",
        "alias": "POK"
    },
    {
        "label": "盘龙城",
        "value": "盘龙城",
        "alias": "PNN"
    },
    {
        "label": "普兰店",
        "value": "普兰店",
        "alias": "PLT"
    },
    {
        "label": "平凉",
        "value": "平凉",
        "alias": "PIJ"
    },
    {
        "label": "平凉南",
        "value": "平凉南",
        "alias": "POJ"
    },
    {
        "label": "普宁",
        "value": "普宁",
        "alias": "PEQ"
    },
    {
        "label": "平泉北",
        "value": "平泉北",
        "alias": "PBP"
    },
    {
        "label": "平泉",
        "value": "平泉",
        "alias": "PQP"
    },
    {
        "label": "皮山",
        "value": "皮山",
        "alias": "PSR"
    },
    {
        "label": "磐石",
        "value": "磐石",
        "alias": "PSL"
    },
    {
        "label": "坪石",
        "value": "坪石",
        "alias": "PSQ"
    },
    {
        "label": "平山",
        "value": "平山",
        "alias": "PSB"
    },
    {
        "label": "平潭",
        "value": "平潭",
        "alias": "PIS"
    },
    {
        "label": "莆田",
        "value": "莆田",
        "alias": "PTS"
    },
    {
        "label": "萍乡北",
        "value": "萍乡北",
        "alias": "PBG"
    },
    {
        "label": "凭祥",
        "value": "凭祥",
        "alias": "PXZ"
    },
    {
        "label": "萍乡",
        "value": "萍乡",
        "alias": "PXG"
    },
    {
        "label": "普雄",
        "value": "普雄",
        "alias": "POW"
    },
    {
        "label": "郫县",
        "value": "郫县",
        "alias": "PWW"
    },
    {
        "label": "郫县西",
        "value": "郫县西",
        "alias": "PCW"
    },
    {
        "label": "濮阳",
        "value": "濮阳",
        "alias": "PYF"
    },
    {
        "label": "平阳",
        "value": "平阳",
        "alias": "ARH"
    },
    {
        "label": "平遥古城",
        "value": "平遥古城",
        "alias": "PDV"
    },
    {
        "label": "濮阳东",
        "value": "濮阳东",
        "alias": "PUF"
    },
    {
        "label": "平原东",
        "value": "平原东",
        "alias": "PUK"
    },
    {
        "label": "彭泽",
        "value": "彭泽",
        "alias": "PZG"
    },
    {
        "label": "普者黑",
        "value": "普者黑",
        "alias": "PZM"
    },
    {
        "label": "盘州",
        "value": "盘州",
        "alias": "PAE"
    },
    {
        "label": "攀枝花",
        "value": "攀枝花",
        "alias": "PRW"
    },
    {
        "label": "彭州",
        "value": "彭州",
        "alias": "PMW"
    },
    {
        "label": "攀枝花南",
        "value": "攀枝花南",
        "alias": "PNE"
    },
    {
        "label": "彭州南",
        "value": "彭州南",
        "alias": "PKW"
    },
    {
        "label": "庆安",
        "value": "庆安",
        "alias": "QAB"
    },
    {
        "label": "青白江东",
        "value": "青白江东",
        "alias": "QFW"
    },
    {
        "label": "清城",
        "value": "清城",
        "alias": "QCA"
    },
    {
        "label": "蕲春",
        "value": "蕲春",
        "alias": "QRN"
    },
    {
        "label": "青川",
        "value": "青川",
        "alias": "QCE"
    },
    {
        "label": "青城山",
        "value": "青城山",
        "alias": "QSW"
    },
    {
        "label": "青岛",
        "value": "青岛",
        "alias": "QDK"
    },
    {
        "label": "青岛北",
        "value": "青岛北",
        "alias": "QHK"
    },
    {
        "label": "千岛湖",
        "value": "千岛湖",
        "alias": "QDU"
    },
    {
        "label": "启东",
        "value": "启东",
        "alias": "QOU"
    },
    {
        "label": "青岛西",
        "value": "青岛西",
        "alias": "QUK"
    },
    {
        "label": "曲阜东",
        "value": "曲阜东",
        "alias": "QAK"
    },
    {
        "label": "前锋",
        "value": "前锋",
        "alias": "QFB"
    },
    {
        "label": "曲阜",
        "value": "曲阜",
        "alias": "QFK"
    },
    {
        "label": "琼海",
        "value": "琼海",
        "alias": "QYQ"
    },
    {
        "label": "清河城",
        "value": "清河城",
        "alias": "QYP"
    },
    {
        "label": "秦皇岛",
        "value": "秦皇岛",
        "alias": "QTP"
    },
    {
        "label": "清河",
        "value": "清河",
        "alias": "QIP"
    },
    {
        "label": "清华园",
        "value": "清华园",
        "alias": "QHP"
    },
    {
        "label": "曲靖北",
        "value": "曲靖北",
        "alias": "QBM"
    },
    {
        "label": "綦江东",
        "value": "綦江东",
        "alias": "QDE"
    },
    {
        "label": "黔江",
        "value": "黔江",
        "alias": "QNW"
    },
    {
        "label": "曲靖",
        "value": "曲靖",
        "alias": "QJM"
    },
    {
        "label": "前进镇",
        "value": "前进镇",
        "alias": "QEB"
    },
    {
        "label": "邛崃",
        "value": "邛崃",
        "alias": "QLE"
    },
    {
        "label": "清流",
        "value": "清流",
        "alias": "QLS"
    },
    {
        "label": "齐齐哈尔",
        "value": "齐齐哈尔",
        "alias": "QHX"
    },
    {
        "label": "齐齐哈尔南",
        "value": "齐齐哈尔南",
        "alias": "QNB"
    },
    {
        "label": "潜山",
        "value": "潜山",
        "alias": "QSU"
    },
    {
        "label": "庆盛",
        "value": "庆盛",
        "alias": "QSQ"
    },
    {
        "label": "曲水县",
        "value": "曲水县",
        "alias": "QSO"
    },
    {
        "label": "七台河",
        "value": "七台河",
        "alias": "QTB"
    },
    {
        "label": "青铜峡",
        "value": "青铜峡",
        "alias": "QTJ"
    },
    {
        "label": "七台河西",
        "value": "七台河西",
        "alias": "QXB"
    },
    {
        "label": "渠县",
        "value": "渠县",
        "alias": "QRW"
    },
    {
        "label": "沁县",
        "value": "沁县",
        "alias": "QVV"
    },
    {
        "label": "清徐",
        "value": "清徐",
        "alias": "QUV"
    },
    {
        "label": "庆阳",
        "value": "庆阳",
        "alias": "QOJ"
    },
    {
        "label": "清远",
        "value": "清远",
        "alias": "QBQ"
    },
    {
        "label": "庆元",
        "value": "庆元",
        "alias": "QYU"
    },
    {
        "label": "钦州东",
        "value": "钦州东",
        "alias": "QDZ"
    },
    {
        "label": "乔庄东",
        "value": "乔庄东",
        "alias": "QEP"
    },
    {
        "label": "衢州",
        "value": "衢州",
        "alias": "QEH"
    },
    {
        "label": "泉州",
        "value": "泉州",
        "alias": "QYS"
    },
    {
        "label": "全州南",
        "value": "全州南",
        "alias": "QNZ"
    },
    {
        "label": "清镇西",
        "value": "清镇西",
        "alias": "QUE"
    },
    {
        "label": "融安",
        "value": "融安",
        "alias": "RAZ"
    },
    {
        "label": "瑞安",
        "value": "瑞安",
        "alias": "RAH"
    },
    {
        "label": "荣昌北",
        "value": "荣昌北",
        "alias": "RQW"
    },
    {
        "label": "荣成",
        "value": "荣成",
        "alias": "RCK"
    },
    {
        "label": "如东",
        "value": "如东",
        "alias": "RIH"
    },
    {
        "label": "汝箕沟",
        "value": "汝箕沟",
        "alias": "RQJ"
    },
    {
        "label": "瑞金",
        "value": "瑞金",
        "alias": "RJG"
    },
    {
        "label": "日喀则",
        "value": "日喀则",
        "alias": "RKO"
    },
    {
        "label": "饶平",
        "value": "饶平",
        "alias": "RVQ"
    },
    {
        "label": "若羌",
        "value": "若羌",
        "alias": "RQR"
    },
    {
        "label": "乳山南",
        "value": "乳山南",
        "alias": "REK"
    },
    {
        "label": "日照",
        "value": "日照",
        "alias": "RZK"
    },
    {
        "label": "日照西",
        "value": "日照西",
        "alias": "KZK"
    },
    {
        "label": "肃北",
        "value": "肃北",
        "alias": "SBJ"
    },
    {
        "label": "双城北",
        "value": "双城北",
        "alias": "SBB"
    },
    {
        "label": "舒城东",
        "value": "舒城东",
        "alias": "SDU"
    },
    {
        "label": "莎车",
        "value": "莎车",
        "alias": "SCR"
    },
    {
        "label": "沙城",
        "value": "沙城",
        "alias": "SCP"
    },
    {
        "label": "宋城路",
        "value": "宋城路",
        "alias": "SFF"
    },
    {
        "label": "双城堡",
        "value": "双城堡",
        "alias": "SCB"
    },
    {
        "label": "邵东",
        "value": "邵东",
        "alias": "FIQ"
    },
    {
        "label": "十渡",
        "value": "十渡",
        "alias": "SEP"
    },
    {
        "label": "双峰北",
        "value": "双峰北",
        "alias": "NFQ"
    },
    {
        "label": "双丰",
        "value": "双丰",
        "alias": "OFB"
    },
    {
        "label": "绥芬河",
        "value": "绥芬河",
        "alias": "SFB"
    },
    {
        "label": "韶关东",
        "value": "韶关东",
        "alias": "SGQ"
    },
    {
        "label": "韶关",
        "value": "韶关",
        "alias": "SNQ"
    },
    {
        "label": "沙河",
        "value": "沙河",
        "alias": "SHP"
    },
    {
        "label": "商河",
        "value": "商河",
        "alias": "SOK"
    },
    {
        "label": "山海关",
        "value": "山海关",
        "alias": "SHD"
    },
    {
        "label": "上海松江",
        "value": "上海松江",
        "alias": "IMH"
    },
    {
        "label": "沙河市",
        "value": "沙河市",
        "alias": "VOP"
    },
    {
        "label": "山河屯",
        "value": "山河屯",
        "alias": "SHL"
    },
    {
        "label": "绥化",
        "value": "绥化",
        "alias": "SHB"
    },
    {
        "label": "石河子",
        "value": "石河子",
        "alias": "SZR"
    },
    {
        "label": "松江北",
        "value": "松江北",
        "alias": "SAH"
    },
    {
        "label": "三家店",
        "value": "三家店",
        "alias": "ODP"
    },
    {
        "label": "三间房",
        "value": "三间房",
        "alias": "SFX"
    },
    {
        "label": "松江河",
        "value": "松江河",
        "alias": "SJL"
    },
    {
        "label": "水家湖",
        "value": "水家湖",
        "alias": "SQH"
    },
    {
        "label": "孙家",
        "value": "孙家",
        "alias": "SUB"
    },
    {
        "label": "沈家",
        "value": "沈家",
        "alias": "OJB"
    },
    {
        "label": "三江南",
        "value": "三江南",
        "alias": "SWZ"
    },
    {
        "label": "石景山南",
        "value": "石景山南",
        "alias": "SRP"
    },
    {
        "label": "苏家屯",
        "value": "苏家屯",
        "alias": "SXT"
    },
    {
        "label": "三江县",
        "value": "三江县",
        "alias": "SOZ"
    },
    {
        "label": "深井子",
        "value": "深井子",
        "alias": "SWT"
    },
    {
        "label": "四棵树",
        "value": "四棵树",
        "alias": "SIR"
    },
    {
        "label": "舒兰",
        "value": "舒兰",
        "alias": "SLL"
    },
    {
        "label": "双流机场",
        "value": "双流机场",
        "alias": "IPW"
    },
    {
        "label": "双龙湖",
        "value": "双龙湖",
        "alias": "OHB"
    },
    {
        "label": "绥棱",
        "value": "绥棱",
        "alias": "SIB"
    },
    {
        "label": "狮岭",
        "value": "狮岭",
        "alias": "SLA"
    },
    {
        "label": "石林",
        "value": "石林",
        "alias": "SLM"
    },
    {
        "label": "双龙南",
        "value": "双龙南",
        "alias": "SNE"
    },
    {
        "label": "商洛",
        "value": "商洛",
        "alias": "OLY"
    },
    {
        "label": "双流西",
        "value": "双流西",
        "alias": "IQW"
    },
    {
        "label": "石林西",
        "value": "石林西",
        "alias": "SYM"
    },
    {
        "label": "胜利镇",
        "value": "胜利镇",
        "alias": "OLB"
    },
    {
        "label": "石门县北",
        "value": "石门县北",
        "alias": "VFQ"
    },
    {
        "label": "三明北",
        "value": "三明北",
        "alias": "SHS"
    },
    {
        "label": "三明",
        "value": "三明",
        "alias": "SVS"
    },
    {
        "label": "嵩明",
        "value": "嵩明",
        "alias": "SVM"
    },
    {
        "label": "树木岭",
        "value": "树木岭",
        "alias": "FMQ"
    },
    {
        "label": "神木南",
        "value": "神木南",
        "alias": "OMY"
    },
    {
        "label": "三门峡南",
        "value": "三门峡南",
        "alias": "SCF"
    },
    {
        "label": "神木",
        "value": "神木",
        "alias": "HMY"
    },
    {
        "label": "三门县",
        "value": "三门县",
        "alias": "OQH"
    },
    {
        "label": "三门峡西",
        "value": "三门峡西",
        "alias": "SXF"
    },
    {
        "label": "三门峡",
        "value": "三门峡",
        "alias": "SMF"
    },
    {
        "label": "商南",
        "value": "商南",
        "alias": "ONY"
    },
    {
        "label": "遂宁",
        "value": "遂宁",
        "alias": "NIW"
    },
    {
        "label": "睢宁",
        "value": "睢宁",
        "alias": "SNU"
    },
    {
        "label": "宋",
        "value": "宋",
        "alias": "SOB"
    },
    {
        "label": "石牌",
        "value": "石牌",
        "alias": "SPQ"
    },
    {
        "label": "沙坪坝",
        "value": "沙坪坝",
        "alias": "CYW"
    },
    {
        "label": "四平东",
        "value": "四平东",
        "alias": "PPT"
    },
    {
        "label": "山坡东",
        "value": "山坡东",
        "alias": "SBN"
    },
    {
        "label": "四平",
        "value": "四平",
        "alias": "SPT"
    },
    {
        "label": "沈丘北",
        "value": "沈丘北",
        "alias": "SKF"
    },
    {
        "label": "宿迁",
        "value": "宿迁",
        "alias": "SQU"
    },
    {
        "label": "商丘",
        "value": "商丘",
        "alias": "SQF"
    },
    {
        "label": "石泉县",
        "value": "石泉县",
        "alias": "SXY"
    },
    {
        "label": "石桥子",
        "value": "石桥子",
        "alias": "SQT"
    },
    {
        "label": "上饶",
        "value": "上饶",
        "alias": "SRG"
    },
    {
        "label": "石人城",
        "value": "石人城",
        "alias": "SRB"
    },
    {
        "label": "鄯善北",
        "value": "鄯善北",
        "alias": "SMR"
    },
    {
        "label": "宿松东",
        "value": "宿松东",
        "alias": "SSU"
    },
    {
        "label": "蜀山东",
        "value": "蜀山东",
        "alias": "HTH"
    },
    {
        "label": "韶山",
        "value": "韶山",
        "alias": "SSQ"
    },
    {
        "label": "神树",
        "value": "神树",
        "alias": "SWB"
    },
    {
        "label": "韶山南",
        "value": "韶山南",
        "alias": "INQ"
    },
    {
        "label": "宿松",
        "value": "宿松",
        "alias": "OAH"
    },
    {
        "label": "三穗",
        "value": "三穗",
        "alias": "QHW"
    },
    {
        "label": "松桃",
        "value": "松桃",
        "alias": "MZQ"
    },
    {
        "label": "汕头南",
        "value": "汕头南",
        "alias": "SNA"
    },
    {
        "label": "汕头",
        "value": "汕头",
        "alias": "OTQ"
    },
    {
        "label": "汕尾",
        "value": "汕尾",
        "alias": "OGQ"
    },
    {
        "label": "邵武",
        "value": "邵武",
        "alias": "SWS"
    },
    {
        "label": "绍兴北",
        "value": "绍兴北",
        "alias": "SLH"
    },
    {
        "label": "绍兴东",
        "value": "绍兴东",
        "alias": "SSH"
    },
    {
        "label": "松溪",
        "value": "松溪",
        "alias": "SIS"
    },
    {
        "label": "涉县",
        "value": "涉县",
        "alias": "OEP"
    },
    {
        "label": "莘县",
        "value": "莘县",
        "alias": "SNK"
    },
    {
        "label": "绍兴",
        "value": "绍兴",
        "alias": "SOH"
    },
    {
        "label": "三亚",
        "value": "三亚",
        "alias": "SEQ"
    },
    {
        "label": "邵阳",
        "value": "邵阳",
        "alias": "SYQ"
    },
    {
        "label": "十堰",
        "value": "十堰",
        "alias": "SNN"
    },
    {
        "label": "双阳",
        "value": "双阳",
        "alias": "OYT"
    },
    {
        "label": "十堰东",
        "value": "十堰东",
        "alias": "OUN"
    },
    {
        "label": "顺义",
        "value": "顺义",
        "alias": "SOP"
    },
    {
        "label": "三元区",
        "value": "三元区",
        "alias": "SMS"
    },
    {
        "label": "双鸭山",
        "value": "双鸭山",
        "alias": "SSB"
    },
    {
        "label": "松原",
        "value": "松原",
        "alias": "VYT"
    },
    {
        "label": "双鸭山西",
        "value": "双鸭山西",
        "alias": "OXB"
    },
    {
        "label": "顺义西",
        "value": "顺义西",
        "alias": "IKP"
    },
    {
        "label": "深圳北",
        "value": "深圳北",
        "alias": "IOQ"
    },
    {
        "label": "苏州北",
        "value": "苏州北",
        "alias": "OHH"
    },
    {
        "label": "深圳机场",
        "value": "深圳机场",
        "alias": "SCA"
    },
    {
        "label": "嵊州新昌",
        "value": "嵊州新昌",
        "alias": "SKU"
    },
    {
        "label": "深圳东",
        "value": "深圳东",
        "alias": "BJQ"
    },
    {
        "label": "宿州东",
        "value": "宿州东",
        "alias": "SRH"
    },
    {
        "label": "绥中",
        "value": "绥中",
        "alias": "SZD"
    },
    {
        "label": "朔州",
        "value": "朔州",
        "alias": "SUV"
    },
    {
        "label": "深圳",
        "value": "深圳",
        "alias": "SZQ"
    },
    {
        "label": "随州",
        "value": "随州",
        "alias": "SZN"
    },
    {
        "label": "宿州",
        "value": "宿州",
        "alias": "OXH"
    },
    {
        "label": "苏州",
        "value": "苏州",
        "alias": "SZH"
    },
    {
        "label": "尚志",
        "value": "尚志",
        "alias": "SZB"
    },
    {
        "label": "随州南",
        "value": "随州南",
        "alias": "ONN"
    },
    {
        "label": "石嘴山南",
        "value": "石嘴山南",
        "alias": "QQJ"
    },
    {
        "label": "尚志南",
        "value": "尚志南",
        "alias": "OZB"
    },
    {
        "label": "深圳坪山",
        "value": "深圳坪山",
        "alias": "IFQ"
    },
    {
        "label": "石柱县",
        "value": "石柱县",
        "alias": "OSW"
    },
    {
        "label": "深圳西",
        "value": "深圳西",
        "alias": "OSQ"
    },
    {
        "label": "泰安",
        "value": "泰安",
        "alias": "TMK"
    },
    {
        "label": "通北",
        "value": "通北",
        "alias": "TBB"
    },
    {
        "label": "铜川东",
        "value": "铜川东",
        "alias": "TCY"
    },
    {
        "label": "塔城",
        "value": "塔城",
        "alias": "TZR"
    },
    {
        "label": "汤池",
        "value": "汤池",
        "alias": "TCX"
    },
    {
        "label": "通道",
        "value": "通道",
        "alias": "TRQ"
    },
    {
        "label": "土地堂东",
        "value": "土地堂东",
        "alias": "TTN"
    },
    {
        "label": "塔尔气",
        "value": "塔尔气",
        "alias": "TVX"
    },
    {
        "label": "潼关",
        "value": "潼关",
        "alias": "TGY"
    },
    {
        "label": "太谷",
        "value": "太谷",
        "alias": "TGV"
    },
    {
        "label": "塘沽",
        "value": "塘沽",
        "alias": "TGP"
    },
    {
        "label": "吐哈",
        "value": "吐哈",
        "alias": "THR"
    },
    {
        "label": "通海",
        "value": "通海",
        "alias": "TAM"
    },
    {
        "label": "塔哈",
        "value": "塔哈",
        "alias": "THX"
    },
    {
        "label": "天河机场",
        "value": "天河机场",
        "alias": "TJN"
    },
    {
        "label": "泰和",
        "value": "泰和",
        "alias": "THG"
    },
    {
        "label": "塔河",
        "value": "塔河",
        "alias": "TXX"
    },
    {
        "label": "天河街",
        "value": "天河街",
        "alias": "TEN"
    },
    {
        "label": "太湖南",
        "value": "太湖南",
        "alias": "TAU"
    },
    {
        "label": "天河潭",
        "value": "天河潭",
        "alias": "TTE"
    },
    {
        "label": "通化",
        "value": "通化",
        "alias": "THL"
    },
    {
        "label": "太湖",
        "value": "太湖",
        "alias": "TKH"
    },
    {
        "label": "同江",
        "value": "同江",
        "alias": "TJB"
    },
    {
        "label": "陶家屯",
        "value": "陶家屯",
        "alias": "TOT"
    },
    {
        "label": "托克托东",
        "value": "托克托东",
        "alias": "TVC"
    },
    {
        "label": "泰来",
        "value": "泰来",
        "alias": "TLX"
    },
    {
        "label": "吐鲁番北",
        "value": "吐鲁番北",
        "alias": "TAR"
    },
    {
        "label": "吐鲁番",
        "value": "吐鲁番",
        "alias": "TFR"
    },
    {
        "label": "通辽",
        "value": "通辽",
        "alias": "TLD"
    },
    {
        "label": "铜陵",
        "value": "铜陵",
        "alias": "TJH"
    },
    {
        "label": "铁岭",
        "value": "铁岭",
        "alias": "TLT"
    },
    {
        "label": "铁力",
        "value": "铁力",
        "alias": "TLB"
    },
    {
        "label": "桐庐",
        "value": "桐庐",
        "alias": "TLU"
    },
    {
        "label": "铁岭西",
        "value": "铁岭西",
        "alias": "PXT"
    },
    {
        "label": "陶赖昭",
        "value": "陶赖昭",
        "alias": "TPT"
    },
    {
        "label": "图们北",
        "value": "图们北",
        "alias": "QSL"
    },
    {
        "label": "图们",
        "value": "图们",
        "alias": "TML"
    },
    {
        "label": "头门港",
        "value": "头门港",
        "alias": "TMU"
    },
    {
        "label": "图木舒克",
        "value": "图木舒克",
        "alias": "TMR"
    },
    {
        "label": "天门南",
        "value": "天门南",
        "alias": "TNN"
    },
    {
        "label": "潼南",
        "value": "潼南",
        "alias": "TVW"
    },
    {
        "label": "泰宁",
        "value": "泰宁",
        "alias": "TNS"
    },
    {
        "label": "铜仁",
        "value": "铜仁",
        "alias": "RDQ"
    },
    {
        "label": "铜仁南",
        "value": "铜仁南",
        "alias": "TNW"
    },
    {
        "label": "唐山北",
        "value": "唐山北",
        "alias": "FUP"
    },
    {
        "label": "田师府",
        "value": "田师府",
        "alias": "TFT"
    },
    {
        "label": "泰山",
        "value": "泰山",
        "alias": "TAK"
    },
    {
        "label": "唐山",
        "value": "唐山",
        "alias": "TSP"
    },
    {
        "label": "天水",
        "value": "天水",
        "alias": "TSJ"
    },
    {
        "label": "天水南",
        "value": "天水南",
        "alias": "TIJ"
    },
    {
        "label": "汤旺河",
        "value": "汤旺河",
        "alias": "THB"
    },
    {
        "label": "汤逊湖",
        "value": "汤逊湖",
        "alias": "THN"
    },
    {
        "label": "土溪",
        "value": "土溪",
        "alias": "TSW"
    },
    {
        "label": "通远堡",
        "value": "通远堡",
        "alias": "TYT"
    },
    {
        "label": "太阳升",
        "value": "太阳升",
        "alias": "TQT"
    },
    {
        "label": "通榆",
        "value": "通榆",
        "alias": "KTT"
    },
    {
        "label": "桐梓北",
        "value": "桐梓北",
        "alias": "TBE"
    },
    {
        "label": "太子城",
        "value": "太子城",
        "alias": "IZP"
    },
    {
        "label": "滕州东",
        "value": "滕州东",
        "alias": "TEK"
    },
    {
        "label": "桐梓东",
        "value": "桐梓东",
        "alias": "TDE"
    },
    {
        "label": "台州",
        "value": "台州",
        "alias": "TEU"
    },
    {
        "label": "泰州",
        "value": "泰州",
        "alias": "UTH"
    },
    {
        "label": "通州",
        "value": "通州",
        "alias": "TOP"
    },
    {
        "label": "台州西",
        "value": "台州西",
        "alias": "TZH"
    },
    {
        "label": "通州西",
        "value": "通州西",
        "alias": "TAP"
    },
    {
        "label": "文昌",
        "value": "文昌",
        "alias": "WEQ"
    },
    {
        "label": "武昌",
        "value": "武昌",
        "alias": "WCN"
    },
    {
        "label": "五常",
        "value": "五常",
        "alias": "WCB"
    },
    {
        "label": "武当山",
        "value": "武当山",
        "alias": "WRN"
    },
    {
        "label": "潍坊",
        "value": "潍坊",
        "alias": "WFK"
    },
    {
        "label": "瓦房店",
        "value": "瓦房店",
        "alias": "WDT"
    },
    {
        "label": "万发屯",
        "value": "万发屯",
        "alias": "WFB"
    },
    {
        "label": "瓦房店西",
        "value": "瓦房店西",
        "alias": "WXT"
    },
    {
        "label": "王岗",
        "value": "王岗",
        "alias": "WGB"
    },
    {
        "label": "武功",
        "value": "武功",
        "alias": "WGY"
    },
    {
        "label": "威海",
        "value": "威海",
        "alias": "WKK"
    },
    {
        "label": "乌海东",
        "value": "乌海东",
        "alias": "WVC"
    },
    {
        "label": "苇河",
        "value": "苇河",
        "alias": "WHB"
    },
    {
        "label": "芜湖",
        "value": "芜湖",
        "alias": "WHH"
    },
    {
        "label": "乌海西",
        "value": "乌海西",
        "alias": "WXC"
    },
    {
        "label": "苇河西",
        "value": "苇河西",
        "alias": "WIB"
    },
    {
        "label": "温江",
        "value": "温江",
        "alias": "WJE"
    },
    {
        "label": "五家",
        "value": "五家",
        "alias": "WUB"
    },
    {
        "label": "五棵树",
        "value": "五棵树",
        "alias": "WKT"
    },
    {
        "label": "乌兰察布",
        "value": "乌兰察布",
        "alias": "WPC"
    },
    {
        "label": "万乐",
        "value": "万乐",
        "alias": "WEB"
    },
    {
        "label": "温岭",
        "value": "温岭",
        "alias": "VHH"
    },
    {
        "label": "乌龙泉南",
        "value": "乌龙泉南",
        "alias": "WFN"
    },
    {
        "label": "武隆",
        "value": "武隆",
        "alias": "WLW"
    },
    {
        "label": "乌兰浩特",
        "value": "乌兰浩特",
        "alias": "WWT"
    },
    {
        "label": "乌拉山西",
        "value": "乌拉山西",
        "alias": "WQC"
    },
    {
        "label": "渭南",
        "value": "渭南",
        "alias": "WNY"
    },
    {
        "label": "渭南北",
        "value": "渭南北",
        "alias": "WBY"
    },
    {
        "label": "五女山",
        "value": "五女山",
        "alias": "WET"
    },
    {
        "label": "渭南西",
        "value": "渭南西",
        "alias": "WXY"
    },
    {
        "label": "沃皮",
        "value": "沃皮",
        "alias": "WPT"
    },
    {
        "label": "汪清",
        "value": "汪清",
        "alias": "WQL"
    },
    {
        "label": "武清",
        "value": "武清",
        "alias": "WWP"
    },
    {
        "label": "武胜",
        "value": "武胜",
        "alias": "WSE"
    },
    {
        "label": "威舍",
        "value": "威舍",
        "alias": "WSM"
    },
    {
        "label": "乌审旗",
        "value": "乌审旗",
        "alias": "WGC"
    },
    {
        "label": "乌苏",
        "value": "乌苏",
        "alias": "WSR"
    },
    {
        "label": "武威东",
        "value": "武威东",
        "alias": "WDJ"
    },
    {
        "label": "武威",
        "value": "武威",
        "alias": "WUJ"
    },
    {
        "label": "武威南",
        "value": "武威南",
        "alias": "WWJ"
    },
    {
        "label": "无为南",
        "value": "无为南",
        "alias": "WWU"
    },
    {
        "label": "武穴北",
        "value": "武穴北",
        "alias": "WJN"
    },
    {
        "label": "无锡东",
        "value": "无锡东",
        "alias": "WGH"
    },
    {
        "label": "无锡",
        "value": "无锡",
        "alias": "WXH"
    },
    {
        "label": "乌西",
        "value": "乌西",
        "alias": "WXR"
    },
    {
        "label": "武穴",
        "value": "武穴",
        "alias": "WXN"
    },
    {
        "label": "吴圩",
        "value": "吴圩",
        "alias": "WYZ"
    },
    {
        "label": "闻喜西",
        "value": "闻喜西",
        "alias": "WOV"
    },
    {
        "label": "武夷山北",
        "value": "武夷山北",
        "alias": "WBS"
    },
    {
        "label": "五营",
        "value": "五营",
        "alias": "WWB"
    },
    {
        "label": "乌伊岭",
        "value": "乌伊岭",
        "alias": "WPB"
    },
    {
        "label": "武夷山",
        "value": "武夷山",
        "alias": "WAS"
    },
    {
        "label": "渭源",
        "value": "渭源",
        "alias": "WEJ"
    },
    {
        "label": "婺源",
        "value": "婺源",
        "alias": "WYG"
    },
    {
        "label": "万源",
        "value": "万源",
        "alias": "WYY"
    },
    {
        "label": "万州北",
        "value": "万州北",
        "alias": "WZE"
    },
    {
        "label": "梧州",
        "value": "梧州",
        "alias": "WZZ"
    },
    {
        "label": "万州",
        "value": "万州",
        "alias": "WYW"
    },
    {
        "label": "吴忠",
        "value": "吴忠",
        "alias": "WVJ"
    },
    {
        "label": "温州",
        "value": "温州",
        "alias": "RZH"
    },
    {
        "label": "梧州南",
        "value": "梧州南",
        "alias": "WBZ"
    },
    {
        "label": "温州南",
        "value": "温州南",
        "alias": "VRH"
    },
    {
        "label": "兴安北",
        "value": "兴安北",
        "alias": "XDZ"
    },
    {
        "label": "雄安",
        "value": "雄安",
        "alias": "IQP"
    },
    {
        "label": "西安西",
        "value": "西安西",
        "alias": "EGY"
    },
    {
        "label": "许昌东",
        "value": "许昌东",
        "alias": "XVF"
    },
    {
        "label": "兴城",
        "value": "兴城",
        "alias": "XCD"
    },
    {
        "label": "宣城",
        "value": "宣城",
        "alias": "ECH"
    },
    {
        "label": "西昌",
        "value": "西昌",
        "alias": "ECW"
    },
    {
        "label": "许昌",
        "value": "许昌",
        "alias": "XCF"
    },
    {
        "label": "西昌西",
        "value": "西昌西",
        "alias": "XCE"
    },
    {
        "label": "新都东",
        "value": "新都东",
        "alias": "EWW"
    },
    {
        "label": "香坊",
        "value": "香坊",
        "alias": "XFB"
    },
    {
        "label": "咸丰",
        "value": "咸丰",
        "alias": "XFA"
    },
    {
        "label": "西丰",
        "value": "西丰",
        "alias": "XFT"
    },
    {
        "label": "息烽",
        "value": "息烽",
        "alias": "XFW"
    },
    {
        "label": "先锋",
        "value": "先锋",
        "alias": "NQQ"
    },
    {
        "label": "湘府路",
        "value": "湘府路",
        "alias": "FVQ"
    },
    {
        "label": "轩岗",
        "value": "轩岗",
        "alias": "XGV"
    },
    {
        "label": "孝感北",
        "value": "孝感北",
        "alias": "XJN"
    },
    {
        "label": "孝感东",
        "value": "孝感东",
        "alias": "GDN"
    },
    {
        "label": "香港西九龙",
        "value": "香港西九龙",
        "alias": "XJA"
    },
    {
        "label": "兴国",
        "value": "兴国",
        "alias": "EUG"
    },
    {
        "label": "西固",
        "value": "西固",
        "alias": "XIJ"
    },
    {
        "label": "夏官营",
        "value": "夏官营",
        "alias": "XGJ"
    },
    {
        "label": "宣汉",
        "value": "宣汉",
        "alias": "XHY"
    },
    {
        "label": "兴和北",
        "value": "兴和北",
        "alias": "EBC"
    },
    {
        "label": "下花园北",
        "value": "下花园北",
        "alias": "OKP"
    },
    {
        "label": "新化南",
        "value": "新化南",
        "alias": "EJQ"
    },
    {
        "label": "新会",
        "value": "新会",
        "alias": "EFQ"
    },
    {
        "label": "新晃",
        "value": "新晃",
        "alias": "XLQ"
    },
    {
        "label": "兴和西",
        "value": "兴和西",
        "alias": "XEC"
    },
    {
        "label": "新晃西",
        "value": "新晃西",
        "alias": "EWQ"
    },
    {
        "label": "新津",
        "value": "新津",
        "alias": "IRW"
    },
    {
        "label": "辛集",
        "value": "辛集",
        "alias": "ENP"
    },
    {
        "label": "徐家",
        "value": "徐家",
        "alias": "XJB"
    },
    {
        "label": "小金口",
        "value": "小金口",
        "alias": "NKQ"
    },
    {
        "label": "新津南",
        "value": "新津南",
        "alias": "ITW"
    },
    {
        "label": "辛集南",
        "value": "辛集南",
        "alias": "IJP"
    },
    {
        "label": "谢家镇",
        "value": "谢家镇",
        "alias": "XMT"
    },
    {
        "label": "西来",
        "value": "西来",
        "alias": "XLE"
    },
    {
        "label": "兴隆店",
        "value": "兴隆店",
        "alias": "XDD"
    },
    {
        "label": "新乐",
        "value": "新乐",
        "alias": "ELP"
    },
    {
        "label": "仙林",
        "value": "仙林",
        "alias": "XPH"
    },
    {
        "label": "小岭",
        "value": "小岭",
        "alias": "XLB"
    },
    {
        "label": "锡林浩特",
        "value": "锡林浩特",
        "alias": "XTC"
    },
    {
        "label": "兴隆县",
        "value": "兴隆县",
        "alias": "EXP"
    },
    {
        "label": "新立镇",
        "value": "新立镇",
        "alias": "XGT"
    },
    {
        "label": "兴隆镇",
        "value": "兴隆镇",
        "alias": "XZB"
    },
    {
        "label": "厦门北",
        "value": "厦门北",
        "alias": "XKS"
    },
    {
        "label": "新民北",
        "value": "新民北",
        "alias": "XOT"
    },
    {
        "label": "厦门",
        "value": "厦门",
        "alias": "XMS"
    },
    {
        "label": "新民",
        "value": "新民",
        "alias": "XMD"
    },
    {
        "label": "厦门高崎",
        "value": "厦门高崎",
        "alias": "XBS"
    },
    {
        "label": "咸宁南",
        "value": "咸宁南",
        "alias": "UNN"
    },
    {
        "label": "犀浦东",
        "value": "犀浦东",
        "alias": "XAW"
    },
    {
        "label": "溆浦南",
        "value": "溆浦南",
        "alias": "EMQ"
    },
    {
        "label": "霞浦",
        "value": "霞浦",
        "alias": "XOS"
    },
    {
        "label": "溆浦",
        "value": "溆浦",
        "alias": "EPQ"
    },
    {
        "label": "犀浦",
        "value": "犀浦",
        "alias": "XIW"
    },
    {
        "label": "秀山",
        "value": "秀山",
        "alias": "ETW"
    },
    {
        "label": "小市",
        "value": "小市",
        "alias": "XST"
    },
    {
        "label": "兴山",
        "value": "兴山",
        "alias": "EMN"
    },
    {
        "label": "西双版纳",
        "value": "西双版纳",
        "alias": "ENM"
    },
    {
        "label": "新松浦",
        "value": "新松浦",
        "alias": "XOB"
    },
    {
        "label": "仙桃",
        "value": "仙桃",
        "alias": "VTN"
    },
    {
        "label": "湘潭",
        "value": "湘潭",
        "alias": "XTQ"
    },
    {
        "label": "向塘",
        "value": "向塘",
        "alias": "XTG"
    },
    {
        "label": "邢台东",
        "value": "邢台东",
        "alias": "EDP"
    },
    {
        "label": "新塘南",
        "value": "新塘南",
        "alias": "NUQ"
    },
    {
        "label": "兴文",
        "value": "兴文",
        "alias": "XNE"
    },
    {
        "label": "宣威",
        "value": "宣威",
        "alias": "XWM"
    },
    {
        "label": "修文县",
        "value": "修文县",
        "alias": "XWE"
    },
    {
        "label": "萧县北",
        "value": "萧县北",
        "alias": "QSH"
    },
    {
        "label": "新香坊北",
        "value": "新香坊北",
        "alias": "RHB"
    },
    {
        "label": "新乡东",
        "value": "新乡东",
        "alias": "EGF"
    },
    {
        "label": "孝西",
        "value": "孝西",
        "alias": "XOV"
    },
    {
        "label": "西乡",
        "value": "西乡",
        "alias": "XQY"
    },
    {
        "label": "西峡",
        "value": "西峡",
        "alias": "XIF"
    },
    {
        "label": "新乡",
        "value": "新乡",
        "alias": "XXF"
    },
    {
        "label": "小新街",
        "value": "小新街",
        "alias": "XXM"
    },
    {
        "label": "信阳",
        "value": "信阳",
        "alias": "XUN"
    },
    {
        "label": "旬阳",
        "value": "旬阳",
        "alias": "XUY"
    },
    {
        "label": "咸阳",
        "value": "咸阳",
        "alias": "XYY"
    },
    {
        "label": "岫岩",
        "value": "岫岩",
        "alias": "XXT"
    },
    {
        "label": "襄阳",
        "value": "襄阳",
        "alias": "XFN"
    },
    {
        "label": "叙永北",
        "value": "叙永北",
        "alias": "XEE"
    },
    {
        "label": "新余北",
        "value": "新余北",
        "alias": "XBG"
    },
    {
        "label": "熊岳城",
        "value": "熊岳城",
        "alias": "XYT"
    },
    {
        "label": "信阳东",
        "value": "信阳东",
        "alias": "OYN"
    },
    {
        "label": "襄阳东",
        "value": "襄阳东",
        "alias": "EKN"
    },
    {
        "label": "兴义",
        "value": "兴义",
        "alias": "XRZ"
    },
    {
        "label": "信宜",
        "value": "信宜",
        "alias": "EEQ"
    },
    {
        "label": "秀英",
        "value": "秀英",
        "alias": "XYA"
    },
    {
        "label": "祥云",
        "value": "祥云",
        "alias": "XQM"
    },
    {
        "label": "新余",
        "value": "新余",
        "alias": "XUG"
    },
    {
        "label": "咸阳西",
        "value": "咸阳西",
        "alias": "XOY"
    },
    {
        "label": "新郑机场",
        "value": "新郑机场",
        "alias": "EZF"
    },
    {
        "label": "徐州东",
        "value": "徐州东",
        "alias": "UUH"
    },
    {
        "label": "忻州",
        "value": "忻州",
        "alias": "XXV"
    },
    {
        "label": "新肇",
        "value": "新肇",
        "alias": "XZT"
    },
    {
        "label": "襄州",
        "value": "襄州",
        "alias": "XWN"
    },
    {
        "label": "徐州",
        "value": "徐州",
        "alias": "XCH"
    },
    {
        "label": "香樟路",
        "value": "香樟路",
        "alias": "FNQ"
    },
    {
        "label": "忻州西",
        "value": "忻州西",
        "alias": "IXV"
    },
    {
        "label": "雅安",
        "value": "雅安",
        "alias": "YAE"
    },
    {
        "label": "延安",
        "value": "延安",
        "alias": "YWY"
    },
    {
        "label": "永安南",
        "value": "永安南",
        "alias": "YQS"
    },
    {
        "label": "依安",
        "value": "依安",
        "alias": "YAX"
    },
    {
        "label": "迎宾路",
        "value": "迎宾路",
        "alias": "YFW"
    },
    {
        "label": "亚布力",
        "value": "亚布力",
        "alias": "YBB"
    },
    {
        "label": "亚布力南",
        "value": "亚布力南",
        "alias": "YWB"
    },
    {
        "label": "叶柏寿",
        "value": "叶柏寿",
        "alias": "YBD"
    },
    {
        "label": "宜宾西",
        "value": "宜宾西",
        "alias": "YXE"
    },
    {
        "label": "亚布力西",
        "value": "亚布力西",
        "alias": "YSB"
    },
    {
        "label": "运城北",
        "value": "运城北",
        "alias": "ABV"
    },
    {
        "label": "盐城北",
        "value": "盐城北",
        "alias": "AEH"
    },
    {
        "label": "永川东",
        "value": "永川东",
        "alias": "WMW"
    },
    {
        "label": "宜昌东",
        "value": "宜昌东",
        "alias": "HAN"
    },
    {
        "label": "岳池",
        "value": "岳池",
        "alias": "AWW"
    },
    {
        "label": "叶城",
        "value": "叶城",
        "alias": "YER"
    },
    {
        "label": "阳春",
        "value": "阳春",
        "alias": "YQQ"
    },
    {
        "label": "宜春",
        "value": "宜春",
        "alias": "YEG"
    },
    {
        "label": "运城",
        "value": "运城",
        "alias": "YNV"
    },
    {
        "label": "宜昌",
        "value": "宜昌",
        "alias": "YCN"
    },
    {
        "label": "盐城",
        "value": "盐城",
        "alias": "AFH"
    },
    {
        "label": "伊春",
        "value": "伊春",
        "alias": "YCB"
    },
    {
        "label": "榆次",
        "value": "榆次",
        "alias": "YCV"
    },
    {
        "label": "杨村",
        "value": "杨村",
        "alias": "YBP"
    },
    {
        "label": "永登",
        "value": "永登",
        "alias": "YDJ"
    },
    {
        "label": "雁荡山",
        "value": "雁荡山",
        "alias": "YGH"
    },
    {
        "label": "于都",
        "value": "于都",
        "alias": "YDG"
    },
    {
        "label": "姚渡",
        "value": "姚渡",
        "alias": "AOJ"
    },
    {
        "label": "英德西",
        "value": "英德西",
        "alias": "IIQ"
    },
    {
        "label": "云浮东",
        "value": "云浮东",
        "alias": "IXQ"
    },
    {
        "label": "燕岗",
        "value": "燕岗",
        "alias": "YGW"
    },
    {
        "label": "永济北",
        "value": "永济北",
        "alias": "AJV"
    },
    {
        "label": "延吉",
        "value": "延吉",
        "alias": "YJL"
    },
    {
        "label": "阳江",
        "value": "阳江",
        "alias": "WRQ"
    },
    {
        "label": "永济",
        "value": "永济",
        "alias": "YIV"
    },
    {
        "label": "燕郊",
        "value": "燕郊",
        "alias": "AJP"
    },
    {
        "label": "姚家",
        "value": "姚家",
        "alias": "YAT"
    },
    {
        "label": "英吉沙",
        "value": "英吉沙",
        "alias": "YIR"
    },
    {
        "label": "延吉西",
        "value": "延吉西",
        "alias": "YXL"
    },
    {
        "label": "营口东",
        "value": "营口东",
        "alias": "YGT"
    },
    {
        "label": "永康南",
        "value": "永康南",
        "alias": "QUH"
    },
    {
        "label": "营口",
        "value": "营口",
        "alias": "YKT"
    },
    {
        "label": "牙克石",
        "value": "牙克石",
        "alias": "YKX"
    },
    {
        "label": "依兰",
        "value": "依兰",
        "alias": "YEB"
    },
    {
        "label": "宜良北",
        "value": "宜良北",
        "alias": "YSM"
    },
    {
        "label": "永乐店",
        "value": "永乐店",
        "alias": "YDY"
    },
    {
        "label": "玉林",
        "value": "玉林",
        "alias": "YLZ"
    },
    {
        "label": "榆林",
        "value": "榆林",
        "alias": "ALY"
    },
    {
        "label": "杨陵",
        "value": "杨陵",
        "alias": "YSY"
    },
    {
        "label": "炎陵",
        "value": "炎陵",
        "alias": "YAG"
    },
    {
        "label": "阎良",
        "value": "阎良",
        "alias": "YNY"
    },
    {
        "label": "杨林",
        "value": "杨林",
        "alias": "YLM"
    },
    {
        "label": "杨陵南",
        "value": "杨陵南",
        "alias": "YEY"
    },
    {
        "label": "余粮堡",
        "value": "余粮堡",
        "alias": "YLD"
    },
    {
        "label": "杨柳青",
        "value": "杨柳青",
        "alias": "YQP"
    },
    {
        "label": "亚龙湾",
        "value": "亚龙湾",
        "alias": "TWQ"
    },
    {
        "label": "羊马",
        "value": "羊马",
        "alias": "YME"
    },
    {
        "label": "一面坡北",
        "value": "一面坡北",
        "alias": "YXB"
    },
    {
        "label": "云梦东",
        "value": "云梦东",
        "alias": "YRN"
    },
    {
        "label": "玉门",
        "value": "玉门",
        "alias": "YXJ"
    },
    {
        "label": "一面坡",
        "value": "一面坡",
        "alias": "YPB"
    },
    {
        "label": "元谋西",
        "value": "元谋西",
        "alias": "AMM"
    },
    {
        "label": "郁南",
        "value": "郁南",
        "alias": "YKQ"
    },
    {
        "label": "伊宁东",
        "value": "伊宁东",
        "alias": "YNR"
    },
    {
        "label": "伊宁",
        "value": "伊宁",
        "alias": "YMR"
    },
    {
        "label": "延平东",
        "value": "延平东",
        "alias": "ADS"
    },
    {
        "label": "阳平关",
        "value": "阳平关",
        "alias": "YAY"
    },
    {
        "label": "玉屏",
        "value": "玉屏",
        "alias": "YZW"
    },
    {
        "label": "延平",
        "value": "延平",
        "alias": "YPS"
    },
    {
        "label": "原平",
        "value": "原平",
        "alias": "YPV"
    },
    {
        "label": "延平西",
        "value": "延平西",
        "alias": "YWS"
    },
    {
        "label": "原平西",
        "value": "原平西",
        "alias": "IPV"
    },
    {
        "label": "阳泉北",
        "value": "阳泉北",
        "alias": "YPP"
    },
    {
        "label": "阳泉东",
        "value": "阳泉东",
        "alias": "AYP"
    },
    {
        "label": "永清东",
        "value": "永清东",
        "alias": "YDI"
    },
    {
        "label": "雁栖湖",
        "value": "雁栖湖",
        "alias": "FGP"
    },
    {
        "label": "焉耆",
        "value": "焉耆",
        "alias": "YSR"
    },
    {
        "label": "乐清",
        "value": "乐清",
        "alias": "UPH"
    },
    {
        "label": "延庆",
        "value": "延庆",
        "alias": "YNP"
    },
    {
        "label": "阳泉曲",
        "value": "阳泉曲",
        "alias": "YYV"
    },
    {
        "label": "姚千户屯",
        "value": "姚千户屯",
        "alias": "YQT"
    },
    {
        "label": "阳泉",
        "value": "阳泉",
        "alias": "AQP"
    },
    {
        "label": "阳曲",
        "value": "阳曲",
        "alias": "YQV"
    },
    {
        "label": "玉泉",
        "value": "玉泉",
        "alias": "YQB"
    },
    {
        "label": "阳曲西",
        "value": "阳曲西",
        "alias": "IQV"
    },
    {
        "label": "榆社",
        "value": "榆社",
        "alias": "YSV"
    },
    {
        "label": "玉山",
        "value": "玉山",
        "alias": "YNG"
    },
    {
        "label": "营山",
        "value": "营山",
        "alias": "NUW"
    },
    {
        "label": "榆树",
        "value": "榆树",
        "alias": "YRT"
    },
    {
        "label": "元氏",
        "value": "元氏",
        "alias": "YSP"
    },
    {
        "label": "燕山",
        "value": "燕山",
        "alias": "AOP"
    },
    {
        "label": "玉山南",
        "value": "玉山南",
        "alias": "YGG"
    },
    {
        "label": "榆树屯",
        "value": "榆树屯",
        "alias": "YSX"
    },
    {
        "label": "银滩",
        "value": "银滩",
        "alias": "CTQ"
    },
    {
        "label": "烟台",
        "value": "烟台",
        "alias": "YAK"
    },
    {
        "label": "鹰潭",
        "value": "鹰潭",
        "alias": "YTG"
    },
    {
        "label": "永泰",
        "value": "永泰",
        "alias": "YTS"
    },
    {
        "label": "鹰潭北",
        "value": "鹰潭北",
        "alias": "YKG"
    },
    {
        "label": "伊图里河",
        "value": "伊图里河",
        "alias": "YEX"
    },
    {
        "label": "依吞布拉克",
        "value": "依吞布拉克",
        "alias": "YVR"
    },
    {
        "label": "烟台南",
        "value": "烟台南",
        "alias": "YLK"
    },
    {
        "label": "烟筒山",
        "value": "烟筒山",
        "alias": "YSL"
    },
    {
        "label": "玉田县",
        "value": "玉田县",
        "alias": "ATP"
    },
    {
        "label": "义乌",
        "value": "义乌",
        "alias": "YWH"
    },
    {
        "label": "玉溪",
        "value": "玉溪",
        "alias": "AXM"
    },
    {
        "label": "云霄",
        "value": "云霄",
        "alias": "YBS"
    },
    {
        "label": "义县",
        "value": "义县",
        "alias": "YXD"
    },
    {
        "label": "阳新",
        "value": "阳新",
        "alias": "YON"
    },
    {
        "label": "宜兴",
        "value": "宜兴",
        "alias": "YUH"
    },
    {
        "label": "尤溪",
        "value": "尤溪",
        "alias": "YXS"
    },
    {
        "label": "益阳",
        "value": "益阳",
        "alias": "AEQ"
    },
    {
        "label": "岳阳",
        "value": "岳阳",
        "alias": "YYQ"
    },
    {
        "label": "岳阳东",
        "value": "岳阳东",
        "alias": "YIQ"
    },
    {
        "label": "益阳南",
        "value": "益阳南",
        "alias": "YAA"
    },
    {
        "label": "扬州东",
        "value": "扬州东",
        "alias": "YDU"
    },
    {
        "label": "崖州",
        "value": "崖州",
        "alias": "YUQ"
    },
    {
        "label": "永州",
        "value": "永州",
        "alias": "AOQ"
    },
    {
        "label": "兖州",
        "value": "兖州",
        "alias": "YZK"
    },
    {
        "label": "扬州",
        "value": "扬州",
        "alias": "YLH"
    },
    {
        "label": "亦庄",
        "value": "亦庄",
        "alias": "YUP"
    },
    {
        "label": "榆中",
        "value": "榆中",
        "alias": "IZJ"
    },
    {
        "label": "诏安",
        "value": "诏安",
        "alias": "ZDS"
    },
    {
        "label": "淄博北",
        "value": "淄博北",
        "alias": "ZRK"
    },
    {
        "label": "淄博",
        "value": "淄博",
        "alias": "ZBK"
    },
    {
        "label": "中川机场",
        "value": "中川机场",
        "alias": "ZJJ"
    },
    {
        "label": "镇城底",
        "value": "镇城底",
        "alias": "ZDV"
    },
    {
        "label": "正定机场",
        "value": "正定机场",
        "alias": "ZHP"
    },
    {
        "label": "正定",
        "value": "正定",
        "alias": "ZDP"
    },
    {
        "label": "准东",
        "value": "准东",
        "alias": "ZER"
    },
    {
        "label": "纸坊东",
        "value": "纸坊东",
        "alias": "ZMN"
    },
    {
        "label": "柘皋",
        "value": "柘皋",
        "alias": "ZGU"
    },
    {
        "label": "自贡北",
        "value": "自贡北",
        "alias": "ZGW"
    },
    {
        "label": "自贡",
        "value": "自贡",
        "alias": "ZGE"
    },
    {
        "label": "珠海",
        "value": "珠海",
        "alias": "ZHQ"
    },
    {
        "label": "庄河北",
        "value": "庄河北",
        "alias": "ZUT"
    },
    {
        "label": "珠海北",
        "value": "珠海北",
        "alias": "ZIQ"
    },
    {
        "label": "珠海机场",
        "value": "珠海机场",
        "alias": "ZJA"
    },
    {
        "label": "珠海长隆",
        "value": "珠海长隆",
        "alias": "ZLA"
    },
    {
        "label": "中华门",
        "value": "中华门",
        "alias": "VNH"
    },
    {
        "label": "张家川",
        "value": "张家川",
        "alias": "ZIJ"
    },
    {
        "label": "张家港",
        "value": "张家港",
        "alias": "ZAU"
    },
    {
        "label": "湛江",
        "value": "湛江",
        "alias": "ZJZ"
    },
    {
        "label": "织金",
        "value": "织金",
        "alias": "IZW"
    },
    {
        "label": "治江",
        "value": "治江",
        "alias": "ZIY"
    },
    {
        "label": "芷江",
        "value": "芷江",
        "alias": "ZPQ"
    },
    {
        "label": "诸暨",
        "value": "诸暨",
        "alias": "ZDH"
    },
    {
        "label": "镇江",
        "value": "镇江",
        "alias": "ZJH"
    },
    {
        "label": "周家",
        "value": "周家",
        "alias": "ZOB"
    },
    {
        "label": "张家界",
        "value": "张家界",
        "alias": "DIQ"
    },
    {
        "label": "张家口",
        "value": "张家口",
        "alias": "ZMP"
    },
    {
        "label": "张家口南",
        "value": "张家口南",
        "alias": "IXP"
    },
    {
        "label": "镇江南",
        "value": "镇江南",
        "alias": "ZEH"
    },
    {
        "label": "湛江西",
        "value": "湛江西",
        "alias": "ZWQ"
    },
    {
        "label": "张家界西",
        "value": "张家界西",
        "alias": "JXA"
    },
    {
        "label": "周口东",
        "value": "周口东",
        "alias": "ZKF"
    },
    {
        "label": "周口",
        "value": "周口",
        "alias": "ZKN"
    },
    {
        "label": "镇赉",
        "value": "镇赉",
        "alias": "ZLT"
    },
    {
        "label": "庄里",
        "value": "庄里",
        "alias": "ZLY"
    },
    {
        "label": "左岭",
        "value": "左岭",
        "alias": "ZSN"
    },
    {
        "label": "扎兰屯",
        "value": "扎兰屯",
        "alias": "ZTX"
    },
    {
        "label": "扎赉诺尔西",
        "value": "扎赉诺尔西",
        "alias": "ZXX"
    },
    {
        "label": "驻马店",
        "value": "驻马店",
        "alias": "ZDN"
    },
    {
        "label": "中牟",
        "value": "中牟",
        "alias": "ZGF"
    },
    {
        "label": "驻马店西",
        "value": "驻马店西",
        "alias": "ZLN"
    },
    {
        "label": "漳平",
        "value": "漳平",
        "alias": "ZPS"
    },
    {
        "label": "泽普",
        "value": "泽普",
        "alias": "ZPR"
    },
    {
        "label": "漳平西",
        "value": "漳平西",
        "alias": "ZXG"
    },
    {
        "label": "章丘北",
        "value": "章丘北",
        "alias": "ZVK"
    },
    {
        "label": "肇庆东",
        "value": "肇庆东",
        "alias": "FCQ"
    },
    {
        "label": "肇庆",
        "value": "肇庆",
        "alias": "ZVQ"
    },
    {
        "label": "章丘",
        "value": "章丘",
        "alias": "ZTK"
    },
    {
        "label": "柞水",
        "value": "柞水",
        "alias": "ZSY"
    },
    {
        "label": "珠斯花",
        "value": "珠斯花",
        "alias": "ZHD"
    },
    {
        "label": "中山",
        "value": "中山",
        "alias": "ZSQ"
    },
    {
        "label": "樟树",
        "value": "樟树",
        "alias": "ZSG"
    },
    {
        "label": "朱砂古镇",
        "value": "朱砂古镇",
        "alias": "ZSE"
    },
    {
        "label": "周水子",
        "value": "周水子",
        "alias": "ZIT"
    },
    {
        "label": "中堂",
        "value": "中堂",
        "alias": "ZTA"
    },
    {
        "label": "昭通",
        "value": "昭通",
        "alias": "ZDW"
    },
    {
        "label": "中卫",
        "value": "中卫",
        "alias": "ZWJ"
    },
    {
        "label": "中卫南",
        "value": "中卫南",
        "alias": "ZTJ"
    },
    {
        "label": "镇雄",
        "value": "镇雄",
        "alias": "ZXE"
    },
    {
        "label": "紫阳",
        "value": "紫阳",
        "alias": "ZVY"
    },
    {
        "label": "枣阳",
        "value": "枣阳",
        "alias": "ZYN"
    },
    {
        "label": "资阳北",
        "value": "资阳北",
        "alias": "FYW"
    },
    {
        "label": "张掖",
        "value": "张掖",
        "alias": "ZYJ"
    },
    {
        "label": "遵义",
        "value": "遵义",
        "alias": "ZYE"
    },
    {
        "label": "镇远",
        "value": "镇远",
        "alias": "ZUW"
    },
    {
        "label": "遵义西",
        "value": "遵义西",
        "alias": "ZIW"
    },
    {
        "label": "张掖西",
        "value": "张掖西",
        "alias": "ZEJ"
    },
    {
        "label": "资中北",
        "value": "资中北",
        "alias": "WZW"
    },
    {
        "label": "漳州东",
        "value": "漳州东",
        "alias": "GOS"
    },
    {
        "label": "涿州东",
        "value": "涿州东",
        "alias": "ZAP"
    },
    {
        "label": "枣庄",
        "value": "枣庄",
        "alias": "ZEK"
    },
    {
        "label": "漳州",
        "value": "漳州",
        "alias": "ZUS"
    },
    {
        "label": "株洲",
        "value": "株洲",
        "alias": "ZZQ"
    },
    {
        "label": "庄寨",
        "value": "庄寨",
        "alias": "VOK"
    },
    {
        "label": "株洲南",
        "value": "株洲南",
        "alias": "KVQ"
    },
    {
        "label": "枣庄西",
        "value": "枣庄西",
        "alias": "ZFK"
    },
    {
        "label": "株洲西",
        "value": "株洲西",
        "alias": "ZAQ"
    },
    {
        "label": "阿巴嘎旗",
        "value": "阿巴嘎旗",
        "alias": "AQC"
    },
    {
        "label": "安定",
        "value": "安定",
        "alias": "ADP"
    },
    {
        "label": "安多",
        "value": "安多",
        "alias": "ADO"
    },
    {
        "label": "安广",
        "value": "安广",
        "alias": "AGT"
    },
    {
        "label": "敖汉",
        "value": "敖汉",
        "alias": "YED"
    },
    {
        "label": "艾河",
        "value": "艾河",
        "alias": "AHP"
    },
    {
        "label": "安化",
        "value": "安化",
        "alias": "PKQ"
    },
    {
        "label": "艾家村",
        "value": "艾家村",
        "alias": "AJJ"
    },
    {
        "label": "安江东",
        "value": "安江东",
        "alias": "ADA"
    },
    {
        "label": "阿金",
        "value": "阿金",
        "alias": "AJD"
    },
    {
        "label": "安匠",
        "value": "安匠",
        "alias": "MJP"
    },
    {
        "label": "阿克塞",
        "value": "阿克塞",
        "alias": "AKJ"
    },
    {
        "label": "安口窑",
        "value": "安口窑",
        "alias": "AYY"
    },
    {
        "label": "敖力布告",
        "value": "敖力布告",
        "alias": "ALD"
    },
    {
        "label": "安龙",
        "value": "安龙",
        "alias": "AUZ"
    },
    {
        "label": "阿龙山",
        "value": "阿龙山",
        "alias": "ASX"
    },
    {
        "label": "阿木尔",
        "value": "阿木尔",
        "alias": "JTX"
    },
    {
        "label": "阿南庄",
        "value": "阿南庄",
        "alias": "AZM"
    },
    {
        "label": "安仁",
        "value": "安仁",
        "alias": "ARG"
    },
    {
        "label": "安塘",
        "value": "安塘",
        "alias": "ATV"
    },
    {
        "label": "阿图什",
        "value": "阿图什",
        "alias": "ATR"
    },
    {
        "label": "安图",
        "value": "安图",
        "alias": "ATL"
    },
    {
        "label": "安图西",
        "value": "安图西",
        "alias": "AXL"
    },
    {
        "label": "阿瓦提",
        "value": "阿瓦提",
        "alias": "AWR"
    },
    {
        "label": "安溪",
        "value": "安溪",
        "alias": "AXS"
    },
    {
        "label": "博鳌",
        "value": "博鳌",
        "alias": "BWQ"
    },
    {
        "label": "白壁关",
        "value": "白壁关",
        "alias": "BGV"
    },
    {
        "label": "八步",
        "value": "八步",
        "alias": "BBE"
    },
    {
        "label": "栟茶",
        "value": "栟茶",
        "alias": "FWH"
    },
    {
        "label": "板城",
        "value": "板城",
        "alias": "BUP"
    },
    {
        "label": "宝坻",
        "value": "宝坻",
        "alias": "BZI"
    },
    {
        "label": "宝坻南",
        "value": "宝坻南",
        "alias": "BOI"
    },
    {
        "label": "宝丰",
        "value": "宝丰",
        "alias": "BFF"
    },
    {
        "label": "白沟",
        "value": "白沟",
        "alias": "FEP"
    },
    {
        "label": "白河东",
        "value": "白河东",
        "alias": "BIY"
    },
    {
        "label": "滨海港",
        "value": "滨海港",
        "alias": "BGU"
    },
    {
        "label": "宝华山",
        "value": "宝华山",
        "alias": "BWH"
    },
    {
        "label": "白河县",
        "value": "白河县",
        "alias": "BEY"
    },
    {
        "label": "白芨沟",
        "value": "白芨沟",
        "alias": "BJJ"
    },
    {
        "label": "北滘",
        "value": "北滘",
        "alias": "IBQ"
    },
    {
        "label": "碧江",
        "value": "碧江",
        "alias": "BLQ"
    },
    {
        "label": "白鸡坡",
        "value": "白鸡坡",
        "alias": "BBM"
    },
    {
        "label": "笔架山",
        "value": "笔架山",
        "alias": "BSB"
    },
    {
        "label": "八角台",
        "value": "八角台",
        "alias": "BTD"
    },
    {
        "label": "北滘西",
        "value": "北滘西",
        "alias": "BJA"
    },
    {
        "label": "北井子",
        "value": "北井子",
        "alias": "BRT"
    },
    {
        "label": "保康",
        "value": "保康",
        "alias": "BKD"
    },
    {
        "label": "保康县",
        "value": "保康县",
        "alias": "BKN"
    },
    {
        "label": "白狼",
        "value": "白狼",
        "alias": "BAT"
    },
    {
        "label": "博罗北",
        "value": "博罗北",
        "alias": "BLA"
    },
    {
        "label": "博乐东",
        "value": "博乐东",
        "alias": "BOR"
    },
    {
        "label": "北流",
        "value": "北流",
        "alias": "BOZ"
    },
    {
        "label": "宝林",
        "value": "宝林",
        "alias": "BNB"
    },
    {
        "label": "布列开",
        "value": "布列开",
        "alias": "BLR"
    },
    {
        "label": "宝龙山",
        "value": "宝龙山",
        "alias": "BND"
    },
    {
        "label": "百里峡",
        "value": "百里峡",
        "alias": "AAP"
    },
    {
        "label": "八里甸子",
        "value": "八里甸子",
        "alias": "BLT"
    },
    {
        "label": "白马北",
        "value": "白马北",
        "alias": "BME"
    },
    {
        "label": "八面城",
        "value": "八面城",
        "alias": "BMD"
    },
    {
        "label": "北马圈子",
        "value": "北马圈子",
        "alias": "BRP"
    },
    {
        "label": "北票南",
        "value": "北票南",
        "alias": "RPD"
    },
    {
        "label": "白旗",
        "value": "白旗",
        "alias": "BQP"
    },
    {
        "label": "白泉",
        "value": "白泉",
        "alias": "BQL"
    },
    {
        "label": "璧山",
        "value": "璧山",
        "alias": "FZW"
    },
    {
        "label": "巴山",
        "value": "巴山",
        "alias": "BAY"
    },
    {
        "label": "白水江",
        "value": "白水江",
        "alias": "BSY"
    },
    {
        "label": "白沙铺",
        "value": "白沙铺",
        "alias": "BSN"
    },
    {
        "label": "白沙坡",
        "value": "白沙坡",
        "alias": "BPM"
    },
    {
        "label": "白石山",
        "value": "白石山",
        "alias": "BAL"
    },
    {
        "label": "白水县",
        "value": "白水县",
        "alias": "BGY"
    },
    {
        "label": "白水镇",
        "value": "白水镇",
        "alias": "BUM"
    },
    {
        "label": "板塘",
        "value": "板塘",
        "alias": "NGQ"
    },
    {
        "label": "坂田",
        "value": "坂田",
        "alias": "BTQ"
    },
    {
        "label": "泊头",
        "value": "泊头",
        "alias": "BZP"
    },
    {
        "label": "北屯",
        "value": "北屯",
        "alias": "BYP"
    },
    {
        "label": "巴图营",
        "value": "巴图营",
        "alias": "BWT"
    },
    {
        "label": "白文东",
        "value": "白文东",
        "alias": "BCV"
    },
    {
        "label": "本溪新城",
        "value": "本溪新城",
        "alias": "BVT"
    },
    {
        "label": "博兴",
        "value": "博兴",
        "alias": "BXK"
    },
    {
        "label": "八仙筒",
        "value": "八仙筒",
        "alias": "VXD"
    },
    {
        "label": "白音察干",
        "value": "白音察干",
        "alias": "BYC"
    },
    {
        "label": "宝应",
        "value": "宝应",
        "alias": "BAU"
    },
    {
        "label": "白音他拉",
        "value": "白音他拉",
        "alias": "BID"
    },
    {
        "label": "白音华南",
        "value": "白音华南",
        "alias": "BOD"
    },
    {
        "label": "白音胡硕",
        "value": "白音胡硕",
        "alias": "BCD"
    },
    {
        "label": "白银市",
        "value": "白银市",
        "alias": "BNJ"
    },
    {
        "label": "霸州北",
        "value": "霸州北",
        "alias": "VPP"
    },
    {
        "label": "彬州",
        "value": "彬州",
        "alias": "BXY"
    },
    {
        "label": "霸州",
        "value": "霸州",
        "alias": "RMP"
    },
    {
        "label": "北宅",
        "value": "北宅",
        "alias": "BVP"
    },
    {
        "label": "巴中西",
        "value": "巴中西",
        "alias": "BZE"
    },
    {
        "label": "霸州西",
        "value": "霸州西",
        "alias": "FOP"
    },
    {
        "label": "长安",
        "value": "长安",
        "alias": "CAA"
    },
    {
        "label": "长安西",
        "value": "长安西",
        "alias": "CXA"
    },
    {
        "label": "赤壁北",
        "value": "赤壁北",
        "alias": "CIN"
    },
    {
        "label": "澄城",
        "value": "澄城",
        "alias": "CUY"
    },
    {
        "label": "长城",
        "value": "长城",
        "alias": "CEJ"
    },
    {
        "label": "陈村",
        "value": "陈村",
        "alias": "CVA"
    },
    {
        "label": "承德县北",
        "value": "承德县北",
        "alias": "IYP"
    },
    {
        "label": "承德东",
        "value": "承德东",
        "alias": "CCP"
    },
    {
        "label": "城固北",
        "value": "城固北",
        "alias": "CBY"
    },
    {
        "label": "长葛",
        "value": "长葛",
        "alias": "CEF"
    },
    {
        "label": "查干湖",
        "value": "查干湖",
        "alias": "VAT"
    },
    {
        "label": "册亨",
        "value": "册亨",
        "alias": "CHZ"
    },
    {
        "label": "翠亨",
        "value": "翠亨",
        "alias": "IHQ"
    },
    {
        "label": "草河口",
        "value": "草河口",
        "alias": "CKT"
    },
    {
        "label": "崔黄口",
        "value": "崔黄口",
        "alias": "CHP"
    },
    {
        "label": "蔡家沟",
        "value": "蔡家沟",
        "alias": "CJT"
    },
    {
        "label": "成吉思汗",
        "value": "成吉思汗",
        "alias": "CJX"
    },
    {
        "label": "岔江",
        "value": "岔江",
        "alias": "CAM"
    },
    {
        "label": "陈江南",
        "value": "陈江南",
        "alias": "KKQ"
    },
    {
        "label": "蔡家坡",
        "value": "蔡家坡",
        "alias": "CJY"
    },
    {
        "label": "策勒",
        "value": "策勒",
        "alias": "CLR"
    },
    {
        "label": "昌乐",
        "value": "昌乐",
        "alias": "CLK"
    },
    {
        "label": "超梁沟",
        "value": "超梁沟",
        "alias": "CYP"
    },
    {
        "label": "茶陵南",
        "value": "茶陵南",
        "alias": "CNG"
    },
    {
        "label": "长岭子",
        "value": "长岭子",
        "alias": "CLT"
    },
    {
        "label": "潮南",
        "value": "潮南",
        "alias": "CHA"
    },
    {
        "label": "长宁",
        "value": "长宁",
        "alias": "CNE"
    },
    {
        "label": "长农",
        "value": "长农",
        "alias": "CNJ"
    },
    {
        "label": "常平",
        "value": "常平",
        "alias": "DAQ"
    },
    {
        "label": "长坡岭",
        "value": "长坡岭",
        "alias": "CPM"
    },
    {
        "label": "常平南",
        "value": "常平南",
        "alias": "FPQ"
    },
    {
        "label": "茌平南",
        "value": "茌平南",
        "alias": "CPK"
    },
    {
        "label": "长箐",
        "value": "长箐",
        "alias": "CQE"
    },
    {
        "label": "辰清",
        "value": "辰清",
        "alias": "CQB"
    },
    {
        "label": "长寿",
        "value": "长寿",
        "alias": "EFW"
    },
    {
        "label": "长寿湖",
        "value": "长寿湖",
        "alias": "CSE"
    },
    {
        "label": "蔡山",
        "value": "蔡山",
        "alias": "CON"
    },
    {
        "label": "苍石",
        "value": "苍石",
        "alias": "CST"
    },
    {
        "label": "草市",
        "value": "草市",
        "alias": "CSL"
    },
    {
        "label": "磁山",
        "value": "磁山",
        "alias": "CSP"
    },
    {
        "label": "常山",
        "value": "常山",
        "alias": "CSU"
    },
    {
        "label": "常熟",
        "value": "常熟",
        "alias": "CAU"
    },
    {
        "label": "楚山",
        "value": "楚山",
        "alias": "CSB"
    },
    {
        "label": "长山屯",
        "value": "长山屯",
        "alias": "CVT"
    },
    {
        "label": "长汀",
        "value": "长汀",
        "alias": "CES"
    },
    {
        "label": "春湾",
        "value": "春湾",
        "alias": "CQQ"
    },
    {
        "label": "岑溪",
        "value": "岑溪",
        "alias": "CNZ"
    },
    {
        "label": "长兴",
        "value": "长兴",
        "alias": "CBH"
    },
    {
        "label": "磁西",
        "value": "磁西",
        "alias": "CRP"
    },
    {
        "label": "磁窑",
        "value": "磁窑",
        "alias": "CYK"
    },
    {
        "label": "长阳",
        "value": "长阳",
        "alias": "CYN"
    },
    {
        "label": "城阳",
        "value": "城阳",
        "alias": "CEK"
    },
    {
        "label": "创业村",
        "value": "创业村",
        "alias": "CEX"
    },
    {
        "label": "朝阳地",
        "value": "朝阳地",
        "alias": "CDD"
    },
    {
        "label": "昌邑",
        "value": "昌邑",
        "alias": "CRK"
    },
    {
        "label": "朝阳南",
        "value": "朝阳南",
        "alias": "CYD"
    },
    {
        "label": "长垣",
        "value": "长垣",
        "alias": "CYF"
    },
    {
        "label": "朝阳镇",
        "value": "朝阳镇",
        "alias": "CZL"
    },
    {
        "label": "陈庄",
        "value": "陈庄",
        "alias": "CZY"
    },
    {
        "label": "潮州",
        "value": "潮州",
        "alias": "CKQ"
    },
    {
        "label": "曹子里",
        "value": "曹子里",
        "alias": "CFP"
    },
    {
        "label": "长治南",
        "value": "长治南",
        "alias": "CAF"
    },
    {
        "label": "城子坦",
        "value": "城子坦",
        "alias": "CWT"
    },
    {
        "label": "车转湾",
        "value": "车转湾",
        "alias": "CWM"
    },
    {
        "label": "都安",
        "value": "都安",
        "alias": "RUZ"
    },
    {
        "label": "大安",
        "value": "大安",
        "alias": "RAT"
    },
    {
        "label": "德安",
        "value": "德安",
        "alias": "DAG"
    },
    {
        "label": "大坝",
        "value": "大坝",
        "alias": "DBJ"
    },
    {
        "label": "德保",
        "value": "德保",
        "alias": "RBZ"
    },
    {
        "label": "到保",
        "value": "到保",
        "alias": "RBT"
    },
    {
        "label": "大巴",
        "value": "大巴",
        "alias": "DBD"
    },
    {
        "label": "电白",
        "value": "电白",
        "alias": "NWQ"
    },
    {
        "label": "大板",
        "value": "大板",
        "alias": "DBC"
    },
    {
        "label": "东边井",
        "value": "东边井",
        "alias": "DBB"
    },
    {
        "label": "德伯斯",
        "value": "德伯斯",
        "alias": "RDT"
    },
    {
        "label": "打柴沟",
        "value": "打柴沟",
        "alias": "DGJ"
    },
    {
        "label": "德昌",
        "value": "德昌",
        "alias": "DVW"
    },
    {
        "label": "大厂",
        "value": "大厂",
        "alias": "DCI"
    },
    {
        "label": "都昌",
        "value": "都昌",
        "alias": "DCG"
    },
    {
        "label": "东城南",
        "value": "东城南",
        "alias": "IYQ"
    },
    {
        "label": "德昌西",
        "value": "德昌西",
        "alias": "DXE"
    },
    {
        "label": "滴道",
        "value": "滴道",
        "alias": "DDB"
    },
    {
        "label": "大磴沟",
        "value": "大磴沟",
        "alias": "DKJ"
    },
    {
        "label": "东戴河",
        "value": "东戴河",
        "alias": "RDD"
    },
    {
        "label": "丹东西",
        "value": "丹东西",
        "alias": "RWT"
    },
    {
        "label": "刀尔登",
        "value": "刀尔登",
        "alias": "DRD"
    },
    {
        "label": "得耳布尔",
        "value": "得耳布尔",
        "alias": "DRX"
    },
    {
        "label": "东二道河",
        "value": "东二道河",
        "alias": "DRB"
    },
    {
        "label": "杜尔伯特",
        "value": "杜尔伯特",
        "alias": "TKX"
    },
    {
        "label": "大方",
        "value": "大方",
        "alias": "DFE"
    },
    {
        "label": "东丰",
        "value": "东丰",
        "alias": "DIL"
    },
    {
        "label": "都格",
        "value": "都格",
        "alias": "DMM"
    },
    {
        "label": "东莞港",
        "value": "东莞港",
        "alias": "DGA"
    },
    {
        "label": "大港南",
        "value": "大港南",
        "alias": "DNU"
    },
    {
        "label": "大官屯",
        "value": "大官屯",
        "alias": "DTT"
    },
    {
        "label": "东光",
        "value": "东光",
        "alias": "DGP"
    },
    {
        "label": "东海",
        "value": "东海",
        "alias": "DHB"
    },
    {
        "label": "东花园北",
        "value": "东花园北",
        "alias": "QBP"
    },
    {
        "label": "大灰厂",
        "value": "大灰厂",
        "alias": "DHP"
    },
    {
        "label": "鼎湖东",
        "value": "鼎湖东",
        "alias": "UWQ"
    },
    {
        "label": "鼎湖山",
        "value": "鼎湖山",
        "alias": "NVQ"
    },
    {
        "label": "大禾塘",
        "value": "大禾塘",
        "alias": "SOQ"
    },
    {
        "label": "东环",
        "value": "东环",
        "alias": "DHA"
    },
    {
        "label": "东海县",
        "value": "东海县",
        "alias": "DQH"
    },
    {
        "label": "东津",
        "value": "东津",
        "alias": "DKB"
    },
    {
        "label": "丹江口",
        "value": "丹江口",
        "alias": "DON"
    },
    {
        "label": "董家口",
        "value": "董家口",
        "alias": "DTK"
    },
    {
        "label": "大口屯",
        "value": "大口屯",
        "alias": "DKP"
    },
    {
        "label": "东来",
        "value": "东来",
        "alias": "RVD"
    },
    {
        "label": "大林",
        "value": "大林",
        "alias": "DLD"
    },
    {
        "label": "带岭",
        "value": "带岭",
        "alias": "DLB"
    },
    {
        "label": "达拉特旗",
        "value": "达拉特旗",
        "alias": "DIC"
    },
    {
        "label": "独立屯",
        "value": "独立屯",
        "alias": "DTX"
    },
    {
        "label": "豆罗",
        "value": "豆罗",
        "alias": "DLV"
    },
    {
        "label": "达拉特西",
        "value": "达拉特西",
        "alias": "DNC"
    },
    {
        "label": "大连西",
        "value": "大连西",
        "alias": "GZT"
    },
    {
        "label": "大朗镇",
        "value": "大朗镇",
        "alias": "KOQ"
    },
    {
        "label": "东明村",
        "value": "东明村",
        "alias": "DMD"
    },
    {
        "label": "洞庙河",
        "value": "洞庙河",
        "alias": "DEP"
    },
    {
        "label": "大平房",
        "value": "大平房",
        "alias": "DPD"
    },
    {
        "label": "大盘石",
        "value": "大盘石",
        "alias": "RPP"
    },
    {
        "label": "大堡",
        "value": "大堡",
        "alias": "DVT"
    },
    {
        "label": "大青沟",
        "value": "大青沟",
        "alias": "DSD"
    },
    {
        "label": "大其拉哈",
        "value": "大其拉哈",
        "alias": "DQX"
    },
    {
        "label": "德清",
        "value": "德清",
        "alias": "DRH"
    },
    {
        "label": "杜桥",
        "value": "杜桥",
        "alias": "DQU"
    },
    {
        "label": "德清西",
        "value": "德清西",
        "alias": "MOH"
    },
    {
        "label": "东胜东",
        "value": "东胜东",
        "alias": "RSC"
    },
    {
        "label": "东升",
        "value": "东升",
        "alias": "DRQ"
    },
    {
        "label": "登沙河",
        "value": "登沙河",
        "alias": "DWT"
    },
    {
        "label": "砀山",
        "value": "砀山",
        "alias": "DKH"
    },
    {
        "label": "大石头南",
        "value": "大石头南",
        "alias": "DAL"
    },
    {
        "label": "大石头",
        "value": "大石头",
        "alias": "DSL"
    },
    {
        "label": "大石寨",
        "value": "大石寨",
        "alias": "RZT"
    },
    {
        "label": "灯塔",
        "value": "灯塔",
        "alias": "DGT"
    },
    {
        "label": "定陶",
        "value": "定陶",
        "alias": "DQK"
    },
    {
        "label": "东台",
        "value": "东台",
        "alias": "DBH"
    },
    {
        "label": "大田边",
        "value": "大田边",
        "alias": "DBM"
    },
    {
        "label": "当涂东",
        "value": "当涂东",
        "alias": "OWH"
    },
    {
        "label": "东通化",
        "value": "东通化",
        "alias": "DTL"
    },
    {
        "label": "丹徒",
        "value": "丹徒",
        "alias": "RUH"
    },
    {
        "label": "东湾",
        "value": "东湾",
        "alias": "DRJ"
    },
    {
        "label": "大旺",
        "value": "大旺",
        "alias": "WWQ"
    },
    {
        "label": "低窝铺",
        "value": "低窝铺",
        "alias": "DWJ"
    },
    {
        "label": "德兴东",
        "value": "德兴东",
        "alias": "DDG"
    },
    {
        "label": "大兴沟",
        "value": "大兴沟",
        "alias": "DXL"
    },
    {
        "label": "德兴",
        "value": "德兴",
        "alias": "DWG"
    },
    {
        "label": "定襄",
        "value": "定襄",
        "alias": "DXV"
    },
    {
        "label": "代县",
        "value": "代县",
        "alias": "DKV"
    },
    {
        "label": "甸心",
        "value": "甸心",
        "alias": "DXM"
    },
    {
        "label": "丹霞山",
        "value": "丹霞山",
        "alias": "IRQ"
    },
    {
        "label": "东戌",
        "value": "东戌",
        "alias": "RXP"
    },
    {
        "label": "东辛庄",
        "value": "东辛庄",
        "alias": "DXD"
    },
    {
        "label": "大雁",
        "value": "大雁",
        "alias": "DYX"
    },
    {
        "label": "大阳",
        "value": "大阳",
        "alias": "RET"
    },
    {
        "label": "丹阳北",
        "value": "丹阳北",
        "alias": "EXH"
    },
    {
        "label": "东阳北",
        "value": "东阳北",
        "alias": "DIU"
    },
    {
        "label": "东淤地",
        "value": "东淤地",
        "alias": "DBV"
    },
    {
        "label": "大营",
        "value": "大营",
        "alias": "DYV"
    },
    {
        "label": "定远",
        "value": "定远",
        "alias": "EWH"
    },
    {
        "label": "岱岳",
        "value": "岱岳",
        "alias": "RYV"
    },
    {
        "label": "大余",
        "value": "大余",
        "alias": "DYG"
    },
    {
        "label": "大营子",
        "value": "大营子",
        "alias": "DZD"
    },
    {
        "label": "大营镇",
        "value": "大营镇",
        "alias": "DJP"
    },
    {
        "label": "大战场",
        "value": "大战场",
        "alias": "DTJ"
    },
    {
        "label": "兑镇",
        "value": "兑镇",
        "alias": "DWV"
    },
    {
        "label": "道州",
        "value": "道州",
        "alias": "DFZ"
    },
    {
        "label": "东镇",
        "value": "东镇",
        "alias": "DNV"
    },
    {
        "label": "东庄",
        "value": "东庄",
        "alias": "DZV"
    },
    {
        "label": "端州",
        "value": "端州",
        "alias": "WZQ"
    },
    {
        "label": "低庄",
        "value": "低庄",
        "alias": "DVQ"
    },
    {
        "label": "豆庄",
        "value": "豆庄",
        "alias": "ROP"
    },
    {
        "label": "大足南",
        "value": "大足南",
        "alias": "FQW"
    },
    {
        "label": "大竹园",
        "value": "大竹园",
        "alias": "DZY"
    },
    {
        "label": "大杖子",
        "value": "大杖子",
        "alias": "DAP"
    },
    {
        "label": "豆张庄",
        "value": "豆张庄",
        "alias": "RZP"
    },
    {
        "label": "二道沟门",
        "value": "二道沟门",
        "alias": "RDP"
    },
    {
        "label": "二道湾",
        "value": "二道湾",
        "alias": "RDX"
    },
    {
        "label": "二龙",
        "value": "二龙",
        "alias": "RLD"
    },
    {
        "label": "二龙山屯",
        "value": "二龙山屯",
        "alias": "ELA"
    },
    {
        "label": "二密河",
        "value": "二密河",
        "alias": "RML"
    },
    {
        "label": "额敏",
        "value": "额敏",
        "alias": "EMR"
    },
    {
        "label": "恩平",
        "value": "恩平",
        "alias": "PXQ"
    },
    {
        "label": "峨山",
        "value": "峨山",
        "alias": "EVM"
    },
    {
        "label": "二营",
        "value": "二营",
        "alias": "RYJ"
    },
    {
        "label": "鄂州东",
        "value": "鄂州东",
        "alias": "EFN"
    },
    {
        "label": "福安",
        "value": "福安",
        "alias": "FAS"
    },
    {
        "label": "丰城东",
        "value": "丰城东",
        "alias": "FIG"
    },
    {
        "label": "凤城东",
        "value": "凤城东",
        "alias": "FDT"
    },
    {
        "label": "富川",
        "value": "富川",
        "alias": "FDZ"
    },
    {
        "label": "丰城",
        "value": "丰城",
        "alias": "FCG"
    },
    {
        "label": "方城",
        "value": "方城",
        "alias": "FNF"
    },
    {
        "label": "丰城南",
        "value": "丰城南",
        "alias": "FNG"
    },
    {
        "label": "繁昌西",
        "value": "繁昌西",
        "alias": "PUH"
    },
    {
        "label": "扶沟南",
        "value": "扶沟南",
        "alias": "FGF"
    },
    {
        "label": "富海",
        "value": "富海",
        "alias": "FHX"
    },
    {
        "label": "凤凰古城",
        "value": "凤凰古城",
        "alias": "FCA"
    },
    {
        "label": "福海西",
        "value": "福海西",
        "alias": "FHA"
    },
    {
        "label": "奉节",
        "value": "奉节",
        "alias": "FJE"
    },
    {
        "label": "枫林",
        "value": "枫林",
        "alias": "FLN"
    },
    {
        "label": "福利屯",
        "value": "福利屯",
        "alias": "FTB"
    },
    {
        "label": "丰乐镇",
        "value": "丰乐镇",
        "alias": "FZB"
    },
    {
        "label": "阜南",
        "value": "阜南",
        "alias": "FNH"
    },
    {
        "label": "抚宁",
        "value": "抚宁",
        "alias": "FNP"
    },
    {
        "label": "阜宁",
        "value": "阜宁",
        "alias": "AKH"
    },
    {
        "label": "阜宁南",
        "value": "阜宁南",
        "alias": "FNU"
    },
    {
        "label": "富平",
        "value": "富平",
        "alias": "FPY"
    },
    {
        "label": "佛坪",
        "value": "佛坪",
        "alias": "FUY"
    },
    {
        "label": "法启",
        "value": "法启",
        "alias": "FQE"
    },
    {
        "label": "福清西",
        "value": "福清西",
        "alias": "FVS"
    },
    {
        "label": "芙蓉镇",
        "value": "芙蓉镇",
        "alias": "FRA"
    },
    {
        "label": "福山北",
        "value": "福山北",
        "alias": "YTK"
    },
    {
        "label": "丰顺东",
        "value": "丰顺东",
        "alias": "FDA"
    },
    {
        "label": "复盛",
        "value": "复盛",
        "alias": "FAW"
    },
    {
        "label": "丰顺",
        "value": "丰顺",
        "alias": "FUQ"
    },
    {
        "label": "繁峙",
        "value": "繁峙",
        "alias": "FSV"
    },
    {
        "label": "抚顺",
        "value": "抚顺",
        "alias": "FST"
    },
    {
        "label": "福山",
        "value": "福山",
        "alias": "FUK"
    },
    {
        "label": "福山口",
        "value": "福山口",
        "alias": "FKP"
    },
    {
        "label": "扶绥南",
        "value": "扶绥南",
        "alias": "FNZ"
    },
    {
        "label": "抚松",
        "value": "抚松",
        "alias": "FSL"
    },
    {
        "label": "福山镇",
        "value": "福山镇",
        "alias": "FZQ"
    },
    {
        "label": "凤台南",
        "value": "凤台南",
        "alias": "FTU"
    },
    {
        "label": "冯屯",
        "value": "冯屯",
        "alias": "FTX"
    },
    {
        "label": "浮图峪",
        "value": "浮图峪",
        "alias": "FYP"
    },
    {
        "label": "费县北",
        "value": "费县北",
        "alias": "FBK"
    },
    {
        "label": "富县东",
        "value": "富县东",
        "alias": "FDY"
    },
    {
        "label": "富县",
        "value": "富县",
        "alias": "FEY"
    },
    {
        "label": "费县",
        "value": "费县",
        "alias": "FXK"
    },
    {
        "label": "汾阳",
        "value": "汾阳",
        "alias": "FAV"
    },
    {
        "label": "凤阳",
        "value": "凤阳",
        "alias": "FUH"
    },
    {
        "label": "富源北",
        "value": "富源北",
        "alias": "FBM"
    },
    {
        "label": "扶余",
        "value": "扶余",
        "alias": "FYT"
    },
    {
        "label": "抚州北",
        "value": "抚州北",
        "alias": "FBG"
    },
    {
        "label": "抚州东",
        "value": "抚州东",
        "alias": "FDG"
    },
    {
        "label": "范镇",
        "value": "范镇",
        "alias": "VZK"
    },
    {
        "label": "固安东",
        "value": "固安东",
        "alias": "GQP"
    },
    {
        "label": "固安",
        "value": "固安",
        "alias": "GFP"
    },
    {
        "label": "高碑店东",
        "value": "高碑店东",
        "alias": "GMP"
    },
    {
        "label": "高碑店",
        "value": "高碑店",
        "alias": "GBP"
    },
    {
        "label": "沟帮子",
        "value": "沟帮子",
        "alias": "GBD"
    },
    {
        "label": "谷城北",
        "value": "谷城北",
        "alias": "GBN"
    },
    {
        "label": "古城东",
        "value": "古城东",
        "alias": "GUU"
    },
    {
        "label": "恭城",
        "value": "恭城",
        "alias": "GCZ"
    },
    {
        "label": "谷城",
        "value": "谷城",
        "alias": "GCN"
    },
    {
        "label": "古城镇",
        "value": "古城镇",
        "alias": "GZB"
    },
    {
        "label": "贵定北",
        "value": "贵定北",
        "alias": "FMW"
    },
    {
        "label": "广德",
        "value": "广德",
        "alias": "GRH"
    },
    {
        "label": "贵定",
        "value": "贵定",
        "alias": "GTW"
    },
    {
        "label": "广德南",
        "value": "广德南",
        "alias": "GNU"
    },
    {
        "label": "葛店南",
        "value": "葛店南",
        "alias": "GNN"
    },
    {
        "label": "贵定县",
        "value": "贵定县",
        "alias": "KIW"
    },
    {
        "label": "岗嘎",
        "value": "岗嘎",
        "alias": "GAO"
    },
    {
        "label": "贡嘎",
        "value": "贡嘎",
        "alias": "GGO"
    },
    {
        "label": "官高",
        "value": "官高",
        "alias": "GVP"
    },
    {
        "label": "葛根庙",
        "value": "葛根庙",
        "alias": "GGT"
    },
    {
        "label": "高各庄",
        "value": "高各庄",
        "alias": "GGP"
    },
    {
        "label": "广汉北",
        "value": "广汉北",
        "alias": "GVW"
    },
    {
        "label": "甘河",
        "value": "甘河",
        "alias": "GAX"
    },
    {
        "label": "郭家店",
        "value": "郭家店",
        "alias": "GDT"
    },
    {
        "label": "个旧",
        "value": "个旧",
        "alias": "JJM"
    },
    {
        "label": "古浪",
        "value": "古浪",
        "alias": "GLJ"
    },
    {
        "label": "橄榄坝",
        "value": "橄榄坝",
        "alias": "GVM"
    },
    {
        "label": "古浪北",
        "value": "古浪北",
        "alias": "GBJ"
    },
    {
        "label": "归流河",
        "value": "归流河",
        "alias": "GHT"
    },
    {
        "label": "关岭",
        "value": "关岭",
        "alias": "GLE"
    },
    {
        "label": "关林",
        "value": "关林",
        "alias": "GLF"
    },
    {
        "label": "甘洛南",
        "value": "甘洛南",
        "alias": "GNE"
    },
    {
        "label": "桂林西",
        "value": "桂林西",
        "alias": "GEZ"
    },
    {
        "label": "郭磊庄",
        "value": "郭磊庄",
        "alias": "GLP"
    },
    {
        "label": "高密北",
        "value": "高密北",
        "alias": "GVK"
    },
    {
        "label": "光明城",
        "value": "光明城",
        "alias": "IMQ"
    },
    {
        "label": "高密",
        "value": "高密",
        "alias": "GMK"
    },
    {
        "label": "灌南",
        "value": "灌南",
        "alias": "GIU"
    },
    {
        "label": "广宁",
        "value": "广宁",
        "alias": "FBQ"
    },
    {
        "label": "广宁寺南",
        "value": "广宁寺南",
        "alias": "GNT"
    },
    {
        "label": "广宁寺",
        "value": "广宁寺",
        "alias": "GQT"
    },
    {
        "label": "高平东",
        "value": "高平东",
        "alias": "GVF"
    },
    {
        "label": "高坪",
        "value": "高坪",
        "alias": "GGN"
    },
    {
        "label": "广平",
        "value": "广平",
        "alias": "GPP"
    },
    {
        "label": "高平",
        "value": "高平",
        "alias": "GPF"
    },
    {
        "label": "弓棚子",
        "value": "弓棚子",
        "alias": "GPT"
    },
    {
        "label": "甘泉北",
        "value": "甘泉北",
        "alias": "GEY"
    },
    {
        "label": "官桥北",
        "value": "官桥北",
        "alias": "GQA"
    },
    {
        "label": "甘旗卡",
        "value": "甘旗卡",
        "alias": "GQD"
    },
    {
        "label": "甘泉",
        "value": "甘泉",
        "alias": "GQY"
    },
    {
        "label": "高桥镇",
        "value": "高桥镇",
        "alias": "GZD"
    },
    {
        "label": "赶水东",
        "value": "赶水东",
        "alias": "GDE"
    },
    {
        "label": "光山",
        "value": "光山",
        "alias": "GUN"
    },
    {
        "label": "灌水",
        "value": "灌水",
        "alias": "GST"
    },
    {
        "label": "孤山口",
        "value": "孤山口",
        "alias": "GSP"
    },
    {
        "label": "果松",
        "value": "果松",
        "alias": "GSL"
    },
    {
        "label": "嘎什甸子",
        "value": "嘎什甸子",
        "alias": "GXD"
    },
    {
        "label": "高山子",
        "value": "高山子",
        "alias": "GSD"
    },
    {
        "label": "高滩",
        "value": "高滩",
        "alias": "GAY"
    },
    {
        "label": "高台",
        "value": "高台",
        "alias": "GTJ"
    },
    {
        "label": "古田北",
        "value": "古田北",
        "alias": "GBS"
    },
    {
        "label": "古田",
        "value": "古田",
        "alias": "GTS"
    },
    {
        "label": "官厅",
        "value": "官厅",
        "alias": "GTP"
    },
    {
        "label": "高台南",
        "value": "高台南",
        "alias": "GAJ"
    },
    {
        "label": "官厅西",
        "value": "官厅西",
        "alias": "KEP"
    },
    {
        "label": "赣县北",
        "value": "赣县北",
        "alias": "GIG"
    },
    {
        "label": "贵溪",
        "value": "贵溪",
        "alias": "GXG"
    },
    {
        "label": "涡阳",
        "value": "涡阳",
        "alias": "GYH"
    },
    {
        "label": "高邮北",
        "value": "高邮北",
        "alias": "GEU"
    },
    {
        "label": "观音机场",
        "value": "观音机场",
        "alias": "GCU"
    },
    {
        "label": "高邮",
        "value": "高邮",
        "alias": "GAU"
    },
    {
        "label": "灌云",
        "value": "灌云",
        "alias": "GOU"
    },
    {
        "label": "公营子",
        "value": "公营子",
        "alias": "GYD"
    },
    {
        "label": "光泽",
        "value": "光泽",
        "alias": "GZS"
    },
    {
        "label": "果珠",
        "value": "果珠",
        "alias": "GZE"
    },
    {
        "label": "古镇",
        "value": "古镇",
        "alias": "GNQ"
    },
    {
        "label": "虢镇",
        "value": "虢镇",
        "alias": "GZY"
    },
    {
        "label": "盖州",
        "value": "盖州",
        "alias": "GXT"
    },
    {
        "label": "瓜州",
        "value": "瓜州",
        "alias": "GZJ"
    },
    {
        "label": "固镇",
        "value": "固镇",
        "alias": "GEH"
    },
    {
        "label": "官字井",
        "value": "官字井",
        "alias": "GOT"
    },
    {
        "label": "广州长隆",
        "value": "广州长隆",
        "alias": "GCA"
    },
    {
        "label": "冠豸山南",
        "value": "冠豸山南",
        "alias": "GSS"
    },
    {
        "label": "广州莲花山",
        "value": "广州莲花山",
        "alias": "GLA"
    },
    {
        "label": "古丈西",
        "value": "古丈西",
        "alias": "GXA"
    },
    {
        "label": "红安",
        "value": "红安",
        "alias": "HWN"
    },
    {
        "label": "海安",
        "value": "海安",
        "alias": "HIH"
    },
    {
        "label": "淮安南",
        "value": "淮安南",
        "alias": "AMH"
    },
    {
        "label": "怀安",
        "value": "怀安",
        "alias": "QAP"
    },
    {
        "label": "惠安",
        "value": "惠安",
        "alias": "HNS"
    },
    {
        "label": "惠安堡",
        "value": "惠安堡",
        "alias": "KBJ"
    },
    {
        "label": "黄柏",
        "value": "黄柏",
        "alias": "HBL"
    },
    {
        "label": "淮北北",
        "value": "淮北北",
        "alias": "PLH"
    },
    {
        "label": "鹤壁东",
        "value": "鹤壁东",
        "alias": "HFF"
    },
    {
        "label": "海北",
        "value": "海北",
        "alias": "HEB"
    },
    {
        "label": "鹤壁",
        "value": "鹤壁",
        "alias": "HAF"
    },
    {
        "label": "灰埠",
        "value": "灰埠",
        "alias": "KBK"
    },
    {
        "label": "会昌北",
        "value": "会昌北",
        "alias": "XEG"
    },
    {
        "label": "寒葱沟",
        "value": "寒葱沟",
        "alias": "HKB"
    },
    {
        "label": "河唇",
        "value": "河唇",
        "alias": "HCZ"
    },
    {
        "label": "华城",
        "value": "华城",
        "alias": "VCQ"
    },
    {
        "label": "霍城",
        "value": "霍城",
        "alias": "SER"
    },
    {
        "label": "汉川",
        "value": "汉川",
        "alias": "HCN"
    },
    {
        "label": "黑冲滩",
        "value": "黑冲滩",
        "alias": "HCJ"
    },
    {
        "label": "红岛",
        "value": "红岛",
        "alias": "HQK"
    },
    {
        "label": "横道河子东",
        "value": "横道河子东",
        "alias": "KUX"
    },
    {
        "label": "化德",
        "value": "化德",
        "alias": "HGC"
    },
    {
        "label": "河东里",
        "value": "河东里",
        "alias": "KLJ"
    },
    {
        "label": "海东",
        "value": "海东",
        "alias": "LVO"
    },
    {
        "label": "洪洞",
        "value": "洪洞",
        "alias": "HDV"
    },
    {
        "label": "海东西",
        "value": "海东西",
        "alias": "HDO"
    },
    {
        "label": "横峰",
        "value": "横峰",
        "alias": "HFG"
    },
    {
        "label": "韩府湾",
        "value": "韩府湾",
        "alias": "HXJ"
    },
    {
        "label": "黄冈",
        "value": "黄冈",
        "alias": "KGN"
    },
    {
        "label": "横沟桥东",
        "value": "横沟桥东",
        "alias": "HNN"
    },
    {
        "label": "黄冈西",
        "value": "黄冈西",
        "alias": "KXN"
    },
    {
        "label": "洪河",
        "value": "洪河",
        "alias": "HPB"
    },
    {
        "label": "红花沟",
        "value": "红花沟",
        "alias": "VHD"
    },
    {
        "label": "黄花筒",
        "value": "黄花筒",
        "alias": "HUD"
    },
    {
        "label": "惠环",
        "value": "惠环",
        "alias": "KHQ"
    },
    {
        "label": "花湖",
        "value": "花湖",
        "alias": "KHN"
    },
    {
        "label": "贺家店",
        "value": "贺家店",
        "alias": "HJJ"
    },
    {
        "label": "厚街",
        "value": "厚街",
        "alias": "HJA"
    },
    {
        "label": "黑井",
        "value": "黑井",
        "alias": "HIM"
    },
    {
        "label": "涵江",
        "value": "涵江",
        "alias": "HJS"
    },
    {
        "label": "获嘉",
        "value": "获嘉",
        "alias": "HJF"
    },
    {
        "label": "杭锦后旗",
        "value": "杭锦后旗",
        "alias": "HDC"
    },
    {
        "label": "河间西",
        "value": "河间西",
        "alias": "HXP"
    },
    {
        "label": "花家庄",
        "value": "花家庄",
        "alias": "HJM"
    },
    {
        "label": "黄口",
        "value": "黄口",
        "alias": "KOH"
    },
    {
        "label": "湖口",
        "value": "湖口",
        "alias": "HKG"
    },
    {
        "label": "惠来",
        "value": "惠来",
        "alias": "HGA"
    },
    {
        "label": "怀来",
        "value": "怀来",
        "alias": "VQP"
    },
    {
        "label": "海林北",
        "value": "海林北",
        "alias": "KBX"
    },
    {
        "label": "和乐",
        "value": "和乐",
        "alias": "HLA"
    },
    {
        "label": "浩良河",
        "value": "浩良河",
        "alias": "HHB"
    },
    {
        "label": "黄流",
        "value": "黄流",
        "alias": "KLQ"
    },
    {
        "label": "黄陵",
        "value": "黄陵",
        "alias": "ULY"
    },
    {
        "label": "鹤立",
        "value": "鹤立",
        "alias": "HOB"
    },
    {
        "label": "桦林",
        "value": "桦林",
        "alias": "HIB"
    },
    {
        "label": "和龙",
        "value": "和龙",
        "alias": "HLL"
    },
    {
        "label": "海龙",
        "value": "海龙",
        "alias": "HIL"
    },
    {
        "label": "哈拉苏",
        "value": "哈拉苏",
        "alias": "HAX"
    },
    {
        "label": "呼鲁斯太",
        "value": "呼鲁斯太",
        "alias": "VTJ"
    },
    {
        "label": "虎门北",
        "value": "虎门北",
        "alias": "HBA"
    },
    {
        "label": "虎门东",
        "value": "虎门东",
        "alias": "HDA"
    },
    {
        "label": "黄梅",
        "value": "黄梅",
        "alias": "VEH"
    },
    {
        "label": "虎门",
        "value": "虎门",
        "alias": "IUQ"
    },
    {
        "label": "洪梅",
        "value": "洪梅",
        "alias": "HMA"
    },
    {
        "label": "韩麻营",
        "value": "韩麻营",
        "alias": "HYP"
    },
    {
        "label": "衡南",
        "value": "衡南",
        "alias": "HNG"
    },
    {
        "label": "桦南东",
        "value": "桦南东",
        "alias": "KNB"
    },
    {
        "label": "黄泥河",
        "value": "黄泥河",
        "alias": "HHL"
    },
    {
        "label": "化念",
        "value": "化念",
        "alias": "HDM"
    },
    {
        "label": "海宁",
        "value": "海宁",
        "alias": "HNH"
    },
    {
        "label": "怀宁",
        "value": "怀宁",
        "alias": "APH"
    },
    {
        "label": "惠农南",
        "value": "惠农南",
        "alias": "KNJ"
    },
    {
        "label": "惠农",
        "value": "惠农",
        "alias": "HMJ"
    },
    {
        "label": "和平北",
        "value": "和平北",
        "alias": "HPA"
    },
    {
        "label": "和平",
        "value": "和平",
        "alias": "VAQ"
    },
    {
        "label": "合浦",
        "value": "合浦",
        "alias": "HVZ"
    },
    {
        "label": "花棚子",
        "value": "花棚子",
        "alias": "HZM"
    },
    {
        "label": "横琴北",
        "value": "横琴北",
        "alias": "HOA"
    },
    {
        "label": "霍邱",
        "value": "霍邱",
        "alias": "FBH"
    },
    {
        "label": "宏庆",
        "value": "宏庆",
        "alias": "HEY"
    },
    {
        "label": "横琴",
        "value": "横琴",
        "alias": "HQA"
    },
    {
        "label": "花桥",
        "value": "花桥",
        "alias": "VQH"
    },
    {
        "label": "红旗渠",
        "value": "红旗渠",
        "alias": "HQF"
    },
    {
        "label": "华容东",
        "value": "华容东",
        "alias": "HPN"
    },
    {
        "label": "怀仁",
        "value": "怀仁",
        "alias": "HRV"
    },
    {
        "label": "华容南",
        "value": "华容南",
        "alias": "KRN"
    },
    {
        "label": "华容",
        "value": "华容",
        "alias": "HRN"
    },
    {
        "label": "红寺堡",
        "value": "红寺堡",
        "alias": "HSJ"
    },
    {
        "label": "红寺堡北",
        "value": "红寺堡北",
        "alias": "HEJ"
    },
    {
        "label": "黑山北",
        "value": "黑山北",
        "alias": "HQT"
    },
    {
        "label": "黄石北",
        "value": "黄石北",
        "alias": "KSN"
    },
    {
        "label": "贺胜桥东",
        "value": "贺胜桥东",
        "alias": "HLN"
    },
    {
        "label": "黄松甸",
        "value": "黄松甸",
        "alias": "HDL"
    },
    {
        "label": "汉寿",
        "value": "汉寿",
        "alias": "HHA"
    },
    {
        "label": "衡山",
        "value": "衡山",
        "alias": "HSQ"
    },
    {
        "label": "虎什哈",
        "value": "虎什哈",
        "alias": "HHP"
    },
    {
        "label": "惠山",
        "value": "惠山",
        "alias": "VCH"
    },
    {
        "label": "红山",
        "value": "红山",
        "alias": "VSB"
    },
    {
        "label": "汉寿南",
        "value": "汉寿南",
        "alias": "VSQ"
    },
    {
        "label": "含山南",
        "value": "含山南",
        "alias": "HSU"
    },
    {
        "label": "红砂岘",
        "value": "红砂岘",
        "alias": "VSJ"
    },
    {
        "label": "衡山西",
        "value": "衡山西",
        "alias": "HEQ"
    },
    {
        "label": "荷塘",
        "value": "荷塘",
        "alias": "KXQ"
    },
    {
        "label": "桓台",
        "value": "桓台",
        "alias": "VTK"
    },
    {
        "label": "黑台",
        "value": "黑台",
        "alias": "HQB"
    },
    {
        "label": "黄桶北",
        "value": "黄桶北",
        "alias": "HBE"
    },
    {
        "label": "黑旺",
        "value": "黑旺",
        "alias": "HWK"
    },
    {
        "label": "徽县",
        "value": "徽县",
        "alias": "HYY"
    },
    {
        "label": "红星",
        "value": "红星",
        "alias": "VXB"
    },
    {
        "label": "红兴隆",
        "value": "红兴隆",
        "alias": "VHB"
    },
    {
        "label": "红岘台",
        "value": "红岘台",
        "alias": "HTJ"
    },
    {
        "label": "换新天",
        "value": "换新天",
        "alias": "VTB"
    },
    {
        "label": "滑浚",
        "value": "滑浚",
        "alias": "HWF"
    },
    {
        "label": "合阳",
        "value": "合阳",
        "alias": "HAY"
    },
    {
        "label": "海晏",
        "value": "海晏",
        "alias": "HFO"
    },
    {
        "label": "红彦",
        "value": "红彦",
        "alias": "VIX"
    },
    {
        "label": "合阳北",
        "value": "合阳北",
        "alias": "HTY"
    },
    {
        "label": "河源北",
        "value": "河源北",
        "alias": "HYA"
    },
    {
        "label": "海阳北",
        "value": "海阳北",
        "alias": "HEK"
    },
    {
        "label": "汉阴",
        "value": "汉阴",
        "alias": "HQY"
    },
    {
        "label": "槐荫",
        "value": "槐荫",
        "alias": "IYN"
    },
    {
        "label": "花园口",
        "value": "花园口",
        "alias": "HYT"
    },
    {
        "label": "淮阳南",
        "value": "淮阳南",
        "alias": "HVF"
    },
    {
        "label": "黄羊滩",
        "value": "黄羊滩",
        "alias": "HGJ"
    },
    {
        "label": "花园",
        "value": "花园",
        "alias": "HUN"
    },
    {
        "label": "黄羊镇",
        "value": "黄羊镇",
        "alias": "HYJ"
    },
    {
        "label": "霍州东",
        "value": "霍州东",
        "alias": "HWV"
    },
    {
        "label": "黄州",
        "value": "黄州",
        "alias": "VON"
    },
    {
        "label": "壶镇",
        "value": "壶镇",
        "alias": "HUU"
    },
    {
        "label": "化州",
        "value": "化州",
        "alias": "HZZ"
    },
    {
        "label": "霍州",
        "value": "霍州",
        "alias": "HZV"
    },
    {
        "label": "惠州西",
        "value": "惠州西",
        "alias": "VXQ"
    },
    {
        "label": "靖边",
        "value": "靖边",
        "alias": "JIY"
    },
    {
        "label": "金宝屯",
        "value": "金宝屯",
        "alias": "JBD"
    },
    {
        "label": "晋城北",
        "value": "晋城北",
        "alias": "JEF"
    },
    {
        "label": "交城",
        "value": "交城",
        "alias": "JNV"
    },
    {
        "label": "建昌",
        "value": "建昌",
        "alias": "JFD"
    },
    {
        "label": "加查",
        "value": "加查",
        "alias": "JIO"
    },
    {
        "label": "泾川",
        "value": "泾川",
        "alias": "JAJ"
    },
    {
        "label": "碱厂",
        "value": "碱厂",
        "alias": "JUT"
    },
    {
        "label": "鄄城",
        "value": "鄄城",
        "alias": "JCK"
    },
    {
        "label": "旌德",
        "value": "旌德",
        "alias": "NSH"
    },
    {
        "label": "峻德",
        "value": "峻德",
        "alias": "JDB"
    },
    {
        "label": "井店",
        "value": "井店",
        "alias": "JFP"
    },
    {
        "label": "江都",
        "value": "江都",
        "alias": "UDH"
    },
    {
        "label": "尖峰",
        "value": "尖峰",
        "alias": "PFQ"
    },
    {
        "label": "金沟屯",
        "value": "金沟屯",
        "alias": "VGP"
    },
    {
        "label": "江海",
        "value": "江海",
        "alias": "JNQ"
    },
    {
        "label": "精河",
        "value": "精河",
        "alias": "JHR"
    },
    {
        "label": "金河",
        "value": "金河",
        "alias": "JHX"
    },
    {
        "label": "锦河",
        "value": "锦河",
        "alias": "JHB"
    },
    {
        "label": "九华山",
        "value": "九华山",
        "alias": "JSU"
    },
    {
        "label": "江华",
        "value": "江华",
        "alias": "JHZ"
    },
    {
        "label": "建湖",
        "value": "建湖",
        "alias": "AJH"
    },
    {
        "label": "江津北",
        "value": "江津北",
        "alias": "JAE"
    },
    {
        "label": "纪家沟",
        "value": "纪家沟",
        "alias": "VJD"
    },
    {
        "label": "夹江",
        "value": "夹江",
        "alias": "UTW"
    },
    {
        "label": "锦界",
        "value": "锦界",
        "alias": "JEY"
    },
    {
        "label": "姜家",
        "value": "姜家",
        "alias": "JJB"
    },
    {
        "label": "金口河南",
        "value": "金口河南",
        "alias": "JHE"
    },
    {
        "label": "将乐",
        "value": "将乐",
        "alias": "JLS"
    },
    {
        "label": "芨岭",
        "value": "芨岭",
        "alias": "JLJ"
    },
    {
        "label": "九郎山",
        "value": "九郎山",
        "alias": "KJQ"
    },
    {
        "label": "江门东",
        "value": "江门东",
        "alias": "JWQ"
    },
    {
        "label": "角美",
        "value": "角美",
        "alias": "JES"
    },
    {
        "label": "佳木斯西",
        "value": "佳木斯西",
        "alias": "JUB"
    },
    {
        "label": "莒南",
        "value": "莒南",
        "alias": "JOK"
    },
    {
        "label": "莒南北",
        "value": "莒南北",
        "alias": "VNK"
    },
    {
        "label": "济宁北",
        "value": "济宁北",
        "alias": "MIK"
    },
    {
        "label": "济宁东",
        "value": "济宁东",
        "alias": "MNK"
    },
    {
        "label": "建宁南",
        "value": "建宁南",
        "alias": "JQS"
    },
    {
        "label": "建瓯东",
        "value": "建瓯东",
        "alias": "JZS"
    },
    {
        "label": "建瓯",
        "value": "建瓯",
        "alias": "JVS"
    },
    {
        "label": "建瓯西",
        "value": "建瓯西",
        "alias": "JUS"
    },
    {
        "label": "金普",
        "value": "金普",
        "alias": "PWT"
    },
    {
        "label": "建桥",
        "value": "建桥",
        "alias": "JQA"
    },
    {
        "label": "江桥",
        "value": "江桥",
        "alias": "JQX"
    },
    {
        "label": "句容西",
        "value": "句容西",
        "alias": "JWH"
    },
    {
        "label": "九三",
        "value": "九三",
        "alias": "SSX"
    },
    {
        "label": "金山",
        "value": "金山",
        "alias": "JSR"
    },
    {
        "label": "建始",
        "value": "建始",
        "alias": "JRN"
    },
    {
        "label": "建水",
        "value": "建水",
        "alias": "JSM"
    },
    {
        "label": "稷山",
        "value": "稷山",
        "alias": "JVV"
    },
    {
        "label": "吉舒",
        "value": "吉舒",
        "alias": "JSL"
    },
    {
        "label": "建设",
        "value": "建设",
        "alias": "JET"
    },
    {
        "label": "甲山",
        "value": "甲山",
        "alias": "JOP"
    },
    {
        "label": "京山",
        "value": "京山",
        "alias": "JCN"
    },
    {
        "label": "嘉善",
        "value": "嘉善",
        "alias": "JSH"
    },
    {
        "label": "嘉善南",
        "value": "嘉善南",
        "alias": "EAH"
    },
    {
        "label": "界首市",
        "value": "界首市",
        "alias": "JUN"
    },
    {
        "label": "江所田",
        "value": "江所田",
        "alias": "JOM"
    },
    {
        "label": "金山屯",
        "value": "金山屯",
        "alias": "JTB"
    },
    {
        "label": "吉水西",
        "value": "吉水西",
        "alias": "JSG"
    },
    {
        "label": "景泰",
        "value": "景泰",
        "alias": "JTJ"
    },
    {
        "label": "金塔",
        "value": "金塔",
        "alias": "JIJ"
    },
    {
        "label": "井湾",
        "value": "井湾",
        "alias": "JWA"
    },
    {
        "label": "吉文",
        "value": "吉文",
        "alias": "JWX"
    },
    {
        "label": "嘉祥北",
        "value": "嘉祥北",
        "alias": "MXK"
    },
    {
        "label": "进贤北",
        "value": "进贤北",
        "alias": "JHG"
    },
    {
        "label": "泾县",
        "value": "泾县",
        "alias": "LOH"
    },
    {
        "label": "莒县",
        "value": "莒县",
        "alias": "JKK"
    },
    {
        "label": "嘉祥",
        "value": "嘉祥",
        "alias": "JUK"
    },
    {
        "label": "郏县",
        "value": "郏县",
        "alias": "JXF"
    },
    {
        "label": "夹心子",
        "value": "夹心子",
        "alias": "JXT"
    },
    {
        "label": "揭阳",
        "value": "揭阳",
        "alias": "JYA"
    },
    {
        "label": "建阳",
        "value": "建阳",
        "alias": "JYS"
    },
    {
        "label": "蛟洋",
        "value": "蛟洋",
        "alias": "JBS"
    },
    {
        "label": "姜堰",
        "value": "姜堰",
        "alias": "UEH"
    },
    {
        "label": "江油北",
        "value": "江油北",
        "alias": "JBE"
    },
    {
        "label": "巨野北",
        "value": "巨野北",
        "alias": "MYK"
    },
    {
        "label": "揭阳机场",
        "value": "揭阳机场",
        "alias": "JUA"
    },
    {
        "label": "揭阳南",
        "value": "揭阳南",
        "alias": "JRQ"
    },
    {
        "label": "江永",
        "value": "江永",
        "alias": "JYZ"
    },
    {
        "label": "江源",
        "value": "江源",
        "alias": "SZL"
    },
    {
        "label": "靖远",
        "value": "靖远",
        "alias": "JYJ"
    },
    {
        "label": "缙云",
        "value": "缙云",
        "alias": "JYH"
    },
    {
        "label": "济源",
        "value": "济源",
        "alias": "JYF"
    },
    {
        "label": "金月湾",
        "value": "金月湾",
        "alias": "PYQ"
    },
    {
        "label": "靖远西",
        "value": "靖远西",
        "alias": "JXJ"
    },
    {
        "label": "缙云西",
        "value": "缙云西",
        "alias": "PYH"
    },
    {
        "label": "胶州北",
        "value": "胶州北",
        "alias": "JZK"
    },
    {
        "label": "焦作东",
        "value": "焦作东",
        "alias": "WEF"
    },
    {
        "label": "晋中",
        "value": "晋中",
        "alias": "JZV"
    },
    {
        "label": "靖州",
        "value": "靖州",
        "alias": "JEQ"
    },
    {
        "label": "景州",
        "value": "景州",
        "alias": "JEP"
    },
    {
        "label": "胶州",
        "value": "胶州",
        "alias": "JXK"
    },
    {
        "label": "旧庄窝",
        "value": "旧庄窝",
        "alias": "JVP"
    },
    {
        "label": "金杖子",
        "value": "金杖子",
        "alias": "JYD"
    },
    {
        "label": "康城",
        "value": "康城",
        "alias": "KCP"
    },
    {
        "label": "宽甸",
        "value": "宽甸",
        "alias": "KDT"
    },
    {
        "label": "克东",
        "value": "克东",
        "alias": "KOB"
    },
    {
        "label": "昆都仑召",
        "value": "昆都仑召",
        "alias": "KDC"
    },
    {
        "label": "库尔木依",
        "value": "库尔木依",
        "alias": "VPR"
    },
    {
        "label": "开江",
        "value": "开江",
        "alias": "KAW"
    },
    {
        "label": "喀喇其",
        "value": "喀喇其",
        "alias": "KQX"
    },
    {
        "label": "开平南",
        "value": "开平南",
        "alias": "PVQ"
    },
    {
        "label": "口前",
        "value": "口前",
        "alias": "KQL"
    },
    {
        "label": "奎山",
        "value": "奎山",
        "alias": "KAB"
    },
    {
        "label": "葵潭",
        "value": "葵潭",
        "alias": "KTQ"
    },
    {
        "label": "康熙岭",
        "value": "康熙岭",
        "alias": "KXZ"
    },
    {
        "label": "克一河",
        "value": "克一河",
        "alias": "KHX"
    },
    {
        "label": "开远南",
        "value": "开远南",
        "alias": "KUM"
    },
    {
        "label": "昆玉",
        "value": "昆玉",
        "alias": "ESR"
    },
    {
        "label": "冷坝",
        "value": "冷坝",
        "alias": "LBE"
    },
    {
        "label": "琅勃拉邦",
        "value": "琅勃拉邦",
        "alias": "VJM"
    },
    {
        "label": "来宾",
        "value": "来宾",
        "alias": "UBZ"
    },
    {
        "label": "老边",
        "value": "老边",
        "alias": "LLT"
    },
    {
        "label": "灵璧",
        "value": "灵璧",
        "alias": "GMH"
    },
    {
        "label": "寮步",
        "value": "寮步",
        "alias": "LTQ"
    },
    {
        "label": "洛川东",
        "value": "洛川东",
        "alias": "LRY"
    },
    {
        "label": "罗城",
        "value": "罗城",
        "alias": "VCZ"
    },
    {
        "label": "乐昌",
        "value": "乐昌",
        "alias": "LCQ"
    },
    {
        "label": "黎城",
        "value": "黎城",
        "alias": "UCP"
    },
    {
        "label": "临城",
        "value": "临城",
        "alias": "UUP"
    },
    {
        "label": "蓝村",
        "value": "蓝村",
        "alias": "LCK"
    },
    {
        "label": "乐东",
        "value": "乐东",
        "alias": "UQQ"
    },
    {
        "label": "林东",
        "value": "林东",
        "alias": "LRC"
    },
    {
        "label": "乐都",
        "value": "乐都",
        "alias": "LDO"
    },
    {
        "label": "梁底下",
        "value": "梁底下",
        "alias": "LDP"
    },
    {
        "label": "六道河子",
        "value": "六道河子",
        "alias": "LVP"
    },
    {
        "label": "鲁番",
        "value": "鲁番",
        "alias": "LVM"
    },
    {
        "label": "落垡",
        "value": "落垡",
        "alias": "LOP"
    },
    {
        "label": "陆丰东",
        "value": "陆丰东",
        "alias": "LDA"
    },
    {
        "label": "来凤",
        "value": "来凤",
        "alias": "LFA"
    },
    {
        "label": "龙丰",
        "value": "龙丰",
        "alias": "KFQ"
    },
    {
        "label": "陆丰南",
        "value": "陆丰南",
        "alias": "LAA"
    },
    {
        "label": "禄丰南",
        "value": "禄丰南",
        "alias": "LQM"
    },
    {
        "label": "老府",
        "value": "老府",
        "alias": "UFD"
    },
    {
        "label": "兰岗",
        "value": "兰岗",
        "alias": "LNB"
    },
    {
        "label": "龙骨甸",
        "value": "龙骨甸",
        "alias": "LGM"
    },
    {
        "label": "临高南",
        "value": "临高南",
        "alias": "KGQ"
    },
    {
        "label": "芦沟",
        "value": "芦沟",
        "alias": "LOM"
    },
    {
        "label": "龙沟",
        "value": "龙沟",
        "alias": "LGJ"
    },
    {
        "label": "临海",
        "value": "临海",
        "alias": "UFH"
    },
    {
        "label": "凌海",
        "value": "凌海",
        "alias": "JID"
    },
    {
        "label": "拉哈",
        "value": "拉哈",
        "alias": "LHX"
    },
    {
        "label": "林海",
        "value": "林海",
        "alias": "LXX"
    },
    {
        "label": "滦河",
        "value": "滦河",
        "alias": "UDP"
    },
    {
        "label": "临海南",
        "value": "临海南",
        "alias": "LHU"
    },
    {
        "label": "凌海南",
        "value": "凌海南",
        "alias": "UNT"
    },
    {
        "label": "龙华",
        "value": "龙华",
        "alias": "LHP"
    },
    {
        "label": "滦河沿",
        "value": "滦河沿",
        "alias": "UNP"
    },
    {
        "label": "六合镇",
        "value": "六合镇",
        "alias": "LEX"
    },
    {
        "label": "罗江东",
        "value": "罗江东",
        "alias": "IKW"
    },
    {
        "label": "亮甲店",
        "value": "亮甲店",
        "alias": "LRT"
    },
    {
        "label": "刘家河",
        "value": "刘家河",
        "alias": "LVT"
    },
    {
        "label": "廉江",
        "value": "廉江",
        "alias": "LJZ"
    },
    {
        "label": "罗江",
        "value": "罗江",
        "alias": "LJW"
    },
    {
        "label": "柳江",
        "value": "柳江",
        "alias": "UQZ"
    },
    {
        "label": "两家",
        "value": "两家",
        "alias": "UJT"
    },
    {
        "label": "李家",
        "value": "李家",
        "alias": "LJB"
    },
    {
        "label": "龙江",
        "value": "龙江",
        "alias": "LJX"
    },
    {
        "label": "莲江口",
        "value": "莲江口",
        "alias": "LHB"
    },
    {
        "label": "利津南",
        "value": "利津南",
        "alias": "LNK"
    },
    {
        "label": "李家坪",
        "value": "李家坪",
        "alias": "LIJ"
    },
    {
        "label": "厉家寨",
        "value": "厉家寨",
        "alias": "UPK"
    },
    {
        "label": "林口南",
        "value": "林口南",
        "alias": "LRB"
    },
    {
        "label": "路口铺",
        "value": "路口铺",
        "alias": "LKQ"
    },
    {
        "label": "老莱",
        "value": "老莱",
        "alias": "LAX"
    },
    {
        "label": "龙里北",
        "value": "龙里北",
        "alias": "KFW"
    },
    {
        "label": "沥林北",
        "value": "沥林北",
        "alias": "KBQ"
    },
    {
        "label": "兰陵北",
        "value": "兰陵北",
        "alias": "COK"
    },
    {
        "label": "醴陵东",
        "value": "醴陵东",
        "alias": "UKQ"
    },
    {
        "label": "临澧",
        "value": "临澧",
        "alias": "LWQ"
    },
    {
        "label": "零陵",
        "value": "零陵",
        "alias": "UWZ"
    },
    {
        "label": "陆良",
        "value": "陆良",
        "alias": "LRM"
    },
    {
        "label": "卢龙",
        "value": "卢龙",
        "alias": "UAP"
    },
    {
        "label": "喇嘛甸",
        "value": "喇嘛甸",
        "alias": "LMX"
    },
    {
        "label": "里木店",
        "value": "里木店",
        "alias": "LMB"
    },
    {
        "label": "洛门",
        "value": "洛门",
        "alias": "LMJ"
    },
    {
        "label": "芦庙",
        "value": "芦庙",
        "alias": "LMU"
    },
    {
        "label": "龙南",
        "value": "龙南",
        "alias": "UNG"
    },
    {
        "label": "龙南东",
        "value": "龙南东",
        "alias": "LBG"
    },
    {
        "label": "乐平北",
        "value": "乐平北",
        "alias": "LKG"
    },
    {
        "label": "六盘水东",
        "value": "六盘水东",
        "alias": "LDE"
    },
    {
        "label": "落坡岭",
        "value": "落坡岭",
        "alias": "LPP"
    },
    {
        "label": "六盘山",
        "value": "六盘山",
        "alias": "UPJ"
    },
    {
        "label": "乐平市",
        "value": "乐平市",
        "alias": "LPG"
    },
    {
        "label": "洛浦",
        "value": "洛浦",
        "alias": "LVR"
    },
    {
        "label": "临清",
        "value": "临清",
        "alias": "UQK"
    },
    {
        "label": "礼泉南",
        "value": "礼泉南",
        "alias": "UNY"
    },
    {
        "label": "龙泉市",
        "value": "龙泉市",
        "alias": "LVU"
    },
    {
        "label": "礼泉",
        "value": "礼泉",
        "alias": "LGY"
    },
    {
        "label": "临泉",
        "value": "临泉",
        "alias": "LOU"
    },
    {
        "label": "冷水江东",
        "value": "冷水江东",
        "alias": "UDQ"
    },
    {
        "label": "连山关",
        "value": "连山关",
        "alias": "LGT"
    },
    {
        "label": "流水沟",
        "value": "流水沟",
        "alias": "USP"
    },
    {
        "label": "灵石",
        "value": "灵石",
        "alias": "LSV"
    },
    {
        "label": "露水河",
        "value": "露水河",
        "alias": "LUL"
    },
    {
        "label": "罗山",
        "value": "罗山",
        "alias": "LRN"
    },
    {
        "label": "涟水",
        "value": "涟水",
        "alias": "LIU"
    },
    {
        "label": "龙市",
        "value": "龙市",
        "alias": "LAG"
    },
    {
        "label": "梁山",
        "value": "梁山",
        "alias": "LMK"
    },
    {
        "label": "鲁山",
        "value": "鲁山",
        "alias": "LAF"
    },
    {
        "label": "娄山关南",
        "value": "娄山关南",
        "alias": "LSE"
    },
    {
        "label": "柳树屯",
        "value": "柳树屯",
        "alias": "LSD"
    },
    {
        "label": "龙山镇",
        "value": "龙山镇",
        "alias": "LAS"
    },
    {
        "label": "李石寨",
        "value": "李石寨",
        "alias": "LET"
    },
    {
        "label": "梨树镇",
        "value": "梨树镇",
        "alias": "LSB"
    },
    {
        "label": "轮台",
        "value": "轮台",
        "alias": "LAR"
    },
    {
        "label": "龙塘坝",
        "value": "龙塘坝",
        "alias": "LBM"
    },
    {
        "label": "濑湍",
        "value": "濑湍",
        "alias": "LVZ"
    },
    {
        "label": "龙塘镇",
        "value": "龙塘镇",
        "alias": "LVB"
    },
    {
        "label": "李旺",
        "value": "李旺",
        "alias": "VLJ"
    },
    {
        "label": "狼尾山",
        "value": "狼尾山",
        "alias": "LRJ"
    },
    {
        "label": "灵武",
        "value": "灵武",
        "alias": "LNJ"
    },
    {
        "label": "莱芜西",
        "value": "莱芜西",
        "alias": "UXK"
    },
    {
        "label": "岚县",
        "value": "岚县",
        "alias": "UXV"
    },
    {
        "label": "朗县",
        "value": "朗县",
        "alias": "LIO"
    },
    {
        "label": "芦溪",
        "value": "芦溪",
        "alias": "LUG"
    },
    {
        "label": "临湘",
        "value": "临湘",
        "alias": "LXQ"
    },
    {
        "label": "滦县",
        "value": "滦县",
        "alias": "UXP"
    },
    {
        "label": "林西",
        "value": "林西",
        "alias": "LXC"
    },
    {
        "label": "朗乡",
        "value": "朗乡",
        "alias": "LXB"
    },
    {
        "label": "郎溪南",
        "value": "郎溪南",
        "alias": "LXU"
    },
    {
        "label": "莱西南",
        "value": "莱西南",
        "alias": "LXK"
    },
    {
        "label": "利辛西",
        "value": "利辛西",
        "alias": "XBH"
    },
    {
        "label": "莱阳",
        "value": "莱阳",
        "alias": "LYK"
    },
    {
        "label": "凌源东",
        "value": "凌源东",
        "alias": "LDD"
    },
    {
        "label": "临沂东",
        "value": "临沂东",
        "alias": "UYK"
    },
    {
        "label": "临邑",
        "value": "临邑",
        "alias": "LUK"
    },
    {
        "label": "临颍",
        "value": "临颍",
        "alias": "LNF"
    },
    {
        "label": "莱阳南",
        "value": "莱阳南",
        "alias": "VEK"
    },
    {
        "label": "龙游南",
        "value": "龙游南",
        "alias": "LYU"
    },
    {
        "label": "龙游",
        "value": "龙游",
        "alias": "LMH"
    },
    {
        "label": "礼乐",
        "value": "礼乐",
        "alias": "UEQ"
    },
    {
        "label": "林源",
        "value": "林源",
        "alias": "LYX"
    },
    {
        "label": "鹿寨北",
        "value": "鹿寨北",
        "alias": "LSZ"
    },
    {
        "label": "临淄北",
        "value": "临淄北",
        "alias": "UEK"
    },
    {
        "label": "泸州东",
        "value": "泸州东",
        "alias": "UDE"
    },
    {
        "label": "临泽",
        "value": "临泽",
        "alias": "LEJ"
    },
    {
        "label": "雷州",
        "value": "雷州",
        "alias": "UAQ"
    },
    {
        "label": "来舟",
        "value": "来舟",
        "alias": "LZS"
    },
    {
        "label": "刘召",
        "value": "刘召",
        "alias": "WYC"
    },
    {
        "label": "鹿寨",
        "value": "鹿寨",
        "alias": "LIZ"
    },
    {
        "label": "拉鲊",
        "value": "拉鲊",
        "alias": "LEM"
    },
    {
        "label": "莱州",
        "value": "莱州",
        "alias": "VPK"
    },
    {
        "label": "六枝南",
        "value": "六枝南",
        "alias": "LOE"
    },
    {
        "label": "临泽南",
        "value": "临泽南",
        "alias": "LDJ"
    },
    {
        "label": "马鞍",
        "value": "马鞍",
        "alias": "MAE"
    },
    {
        "label": "马鞍山",
        "value": "马鞍山",
        "alias": "MAH"
    },
    {
        "label": "毛坝",
        "value": "毛坝",
        "alias": "MBY"
    },
    {
        "label": "毛坝关",
        "value": "毛坝关",
        "alias": "MGY"
    },
    {
        "label": "麻涌",
        "value": "麻涌",
        "alias": "MIA"
    },
    {
        "label": "明城",
        "value": "明城",
        "alias": "MCL"
    },
    {
        "label": "毛陈",
        "value": "毛陈",
        "alias": "MHN"
    },
    {
        "label": "渑池",
        "value": "渑池",
        "alias": "MCF"
    },
    {
        "label": "庙城",
        "value": "庙城",
        "alias": "MAP"
    },
    {
        "label": "茅草坪",
        "value": "茅草坪",
        "alias": "KPM"
    },
    {
        "label": "猛洞河",
        "value": "猛洞河",
        "alias": "MUQ"
    },
    {
        "label": "磨刀石",
        "value": "磨刀石",
        "alias": "MOB"
    },
    {
        "label": "民丰",
        "value": "民丰",
        "alias": "MFR"
    },
    {
        "label": "明港",
        "value": "明港",
        "alias": "MGN"
    },
    {
        "label": "明港东",
        "value": "明港东",
        "alias": "MDN"
    },
    {
        "label": "马皇",
        "value": "马皇",
        "alias": "MHZ"
    },
    {
        "label": "墨江",
        "value": "墨江",
        "alias": "MJM"
    },
    {
        "label": "闵集",
        "value": "闵集",
        "alias": "MJN"
    },
    {
        "label": "马兰",
        "value": "马兰",
        "alias": "MLR"
    },
    {
        "label": "汨罗东",
        "value": "汨罗东",
        "alias": "MQQ"
    },
    {
        "label": "民乐",
        "value": "民乐",
        "alias": "MBJ"
    },
    {
        "label": "马莲河",
        "value": "马莲河",
        "alias": "MHB"
    },
    {
        "label": "茅岭",
        "value": "茅岭",
        "alias": "MLZ"
    },
    {
        "label": "庙岭",
        "value": "庙岭",
        "alias": "MLL"
    },
    {
        "label": "米林",
        "value": "米林",
        "alias": "MIO"
    },
    {
        "label": "麻柳",
        "value": "麻柳",
        "alias": "MLY"
    },
    {
        "label": "茂林",
        "value": "茂林",
        "alias": "MLD"
    },
    {
        "label": "马龙",
        "value": "马龙",
        "alias": "MGM"
    },
    {
        "label": "木里图",
        "value": "木里图",
        "alias": "MUD"
    },
    {
        "label": "汨罗",
        "value": "汨罗",
        "alias": "MLQ"
    },
    {
        "label": "玛纳斯湖",
        "value": "玛纳斯湖",
        "alias": "MNR"
    },
    {
        "label": "牟平",
        "value": "牟平",
        "alias": "MBK"
    },
    {
        "label": "民权北",
        "value": "民权北",
        "alias": "MIF"
    },
    {
        "label": "马桥河",
        "value": "马桥河",
        "alias": "MQB"
    },
    {
        "label": "闽清",
        "value": "闽清",
        "alias": "MQS"
    },
    {
        "label": "孟赛",
        "value": "孟赛",
        "alias": "VFM"
    },
    {
        "label": "眉山",
        "value": "眉山",
        "alias": "MSW"
    },
    {
        "label": "明水河",
        "value": "明水河",
        "alias": "MUT"
    },
    {
        "label": "蒙山",
        "value": "蒙山",
        "alias": "MOK"
    },
    {
        "label": "麻山",
        "value": "麻山",
        "alias": "MAB"
    },
    {
        "label": "马山县",
        "value": "马山县",
        "alias": "MAZ"
    },
    {
        "label": "马踏",
        "value": "马踏",
        "alias": "PWQ"
    },
    {
        "label": "眉县东",
        "value": "眉县东",
        "alias": "CXY"
    },
    {
        "label": "美溪",
        "value": "美溪",
        "alias": "MEB"
    },
    {
        "label": "麻阳",
        "value": "麻阳",
        "alias": "MVQ"
    },
    {
        "label": "米易东",
        "value": "米易东",
        "alias": "MDE"
    },
    {
        "label": "麦园",
        "value": "麦园",
        "alias": "MYS"
    },
    {
        "label": "麻阳西",
        "value": "麻阳西",
        "alias": "MYA"
    },
    {
        "label": "庙庄",
        "value": "庙庄",
        "alias": "MZJ"
    },
    {
        "label": "米脂",
        "value": "米脂",
        "alias": "MEY"
    },
    {
        "label": "明珠",
        "value": "明珠",
        "alias": "MFQ"
    },
    {
        "label": "南博山",
        "value": "南博山",
        "alias": "NBK"
    },
    {
        "label": "牛车河",
        "value": "牛车河",
        "alias": "NHA"
    },
    {
        "label": "宁城",
        "value": "宁城",
        "alias": "NCD"
    },
    {
        "label": "南仇",
        "value": "南仇",
        "alias": "NCK"
    },
    {
        "label": "南城司",
        "value": "南城司",
        "alias": "NSP"
    },
    {
        "label": "宁都",
        "value": "宁都",
        "alias": "NIG"
    },
    {
        "label": "宁洱",
        "value": "宁洱",
        "alias": "NEM"
    },
    {
        "label": "南芬北",
        "value": "南芬北",
        "alias": "NUT"
    },
    {
        "label": "南观村",
        "value": "南观村",
        "alias": "NGP"
    },
    {
        "label": "南宫东",
        "value": "南宫东",
        "alias": "NFP"
    },
    {
        "label": "宁国南",
        "value": "宁国南",
        "alias": "NIU"
    },
    {
        "label": "宁国",
        "value": "宁国",
        "alias": "NNH"
    },
    {
        "label": "南河川",
        "value": "南河川",
        "alias": "NHJ"
    },
    {
        "label": "南华",
        "value": "南华",
        "alias": "NAM"
    },
    {
        "label": "宁化",
        "value": "宁化",
        "alias": "NHS"
    },
    {
        "label": "内黄",
        "value": "内黄",
        "alias": "NUF"
    },
    {
        "label": "泥河子",
        "value": "泥河子",
        "alias": "NHD"
    },
    {
        "label": "内江东",
        "value": "内江东",
        "alias": "NDE"
    },
    {
        "label": "宁家",
        "value": "宁家",
        "alias": "NVT"
    },
    {
        "label": "能家",
        "value": "能家",
        "alias": "NJD"
    },
    {
        "label": "南靖",
        "value": "南靖",
        "alias": "NJS"
    },
    {
        "label": "南江口",
        "value": "南江口",
        "alias": "NDQ"
    },
    {
        "label": "南口前",
        "value": "南口前",
        "alias": "NKT"
    },
    {
        "label": "南朗",
        "value": "南朗",
        "alias": "NNQ"
    },
    {
        "label": "南乐",
        "value": "南乐",
        "alias": "NWF"
    },
    {
        "label": "奈林皋",
        "value": "奈林皋",
        "alias": "NGT"
    },
    {
        "label": "乃林",
        "value": "乃林",
        "alias": "NLD"
    },
    {
        "label": "南陵",
        "value": "南陵",
        "alias": "LLH"
    },
    {
        "label": "尼勒克",
        "value": "尼勒克",
        "alias": "NIR"
    },
    {
        "label": "宁明",
        "value": "宁明",
        "alias": "NMZ"
    },
    {
        "label": "南木",
        "value": "南木",
        "alias": "NMX"
    },
    {
        "label": "南堡北",
        "value": "南堡北",
        "alias": "TLP"
    },
    {
        "label": "南桥",
        "value": "南桥",
        "alias": "NQD"
    },
    {
        "label": "南山北",
        "value": "南山北",
        "alias": "NEQ"
    },
    {
        "label": "南头",
        "value": "南头",
        "alias": "NOQ"
    },
    {
        "label": "南屯",
        "value": "南屯",
        "alias": "NTR"
    },
    {
        "label": "南湾子",
        "value": "南湾子",
        "alias": "NWP"
    },
    {
        "label": "泥溪",
        "value": "泥溪",
        "alias": "NIE"
    },
    {
        "label": "南溪",
        "value": "南溪",
        "alias": "NEE"
    },
    {
        "label": "宁县",
        "value": "宁县",
        "alias": "AXJ"
    },
    {
        "label": "内乡",
        "value": "内乡",
        "alias": "NXF"
    },
    {
        "label": "楠溪江",
        "value": "楠溪江",
        "alias": "NJU"
    },
    {
        "label": "宁乡西",
        "value": "宁乡西",
        "alias": "NXA"
    },
    {
        "label": "娘子关",
        "value": "娘子关",
        "alias": "NIP"
    },
    {
        "label": "南漳",
        "value": "南漳",
        "alias": "NZN"
    },
    {
        "label": "南召",
        "value": "南召",
        "alias": "NAF"
    },
    {
        "label": "南杂木",
        "value": "南杂木",
        "alias": "NZT"
    },
    {
        "label": "蓬安",
        "value": "蓬安",
        "alias": "PAW"
    },
    {
        "label": "平安",
        "value": "平安",
        "alias": "PAL"
    },
    {
        "label": "磐安",
        "value": "磐安",
        "alias": "PAU"
    },
    {
        "label": "磐安南",
        "value": "磐安南",
        "alias": "PNU"
    },
    {
        "label": "普安县",
        "value": "普安县",
        "alias": "PUE"
    },
    {
        "label": "蓬安西",
        "value": "蓬安西",
        "alias": "PXE"
    },
    {
        "label": "平安驿",
        "value": "平安驿",
        "alias": "PNO"
    },
    {
        "label": "平安镇",
        "value": "平安镇",
        "alias": "PZT"
    },
    {
        "label": "磐安镇",
        "value": "磐安镇",
        "alias": "PAJ"
    },
    {
        "label": "屏边",
        "value": "屏边",
        "alias": "PBM"
    },
    {
        "label": "平坝南",
        "value": "平坝南",
        "alias": "PBE"
    },
    {
        "label": "蒲城",
        "value": "蒲城",
        "alias": "PCY"
    },
    {
        "label": "裴德",
        "value": "裴德",
        "alias": "PDB"
    },
    {
        "label": "普定",
        "value": "普定",
        "alias": "PGW"
    },
    {
        "label": "偏店",
        "value": "偏店",
        "alias": "PRP"
    },
    {
        "label": "平岗",
        "value": "平岗",
        "alias": "PGL"
    },
    {
        "label": "平果",
        "value": "平果",
        "alias": "PGZ"
    },
    {
        "label": "平关",
        "value": "平关",
        "alias": "PGM"
    },
    {
        "label": "盘关",
        "value": "盘关",
        "alias": "PAM"
    },
    {
        "label": "徘徊北",
        "value": "徘徊北",
        "alias": "PHP"
    },
    {
        "label": "平河口",
        "value": "平河口",
        "alias": "PHM"
    },
    {
        "label": "平湖",
        "value": "平湖",
        "alias": "PHQ"
    },
    {
        "label": "潘家店",
        "value": "潘家店",
        "alias": "PDP"
    },
    {
        "label": "浦江",
        "value": "浦江",
        "alias": "PJU"
    },
    {
        "label": "皮口南",
        "value": "皮口南",
        "alias": "PKT"
    },
    {
        "label": "皮口",
        "value": "皮口",
        "alias": "PUT"
    },
    {
        "label": "屏南",
        "value": "屏南",
        "alias": "PNS"
    },
    {
        "label": "平南南",
        "value": "平南南",
        "alias": "PAZ"
    },
    {
        "label": "朋普",
        "value": "朋普",
        "alias": "PRM"
    },
    {
        "label": "彭山北",
        "value": "彭山北",
        "alias": "PPW"
    },
    {
        "label": "蒲石",
        "value": "蒲石",
        "alias": "PSY"
    },
    {
        "label": "彭山",
        "value": "彭山",
        "alias": "PSW"
    },
    {
        "label": "彭水",
        "value": "彭水",
        "alias": "PHW"
    },
    {
        "label": "屏山",
        "value": "屏山",
        "alias": "PSE"
    },
    {
        "label": "平社",
        "value": "平社",
        "alias": "PSV"
    },
    {
        "label": "盘山",
        "value": "盘山",
        "alias": "PUD"
    },
    {
        "label": "坪上",
        "value": "坪上",
        "alias": "PSK"
    },
    {
        "label": "平台",
        "value": "平台",
        "alias": "PVT"
    },
    {
        "label": "平田",
        "value": "平田",
        "alias": "PTM"
    },
    {
        "label": "葡萄菁",
        "value": "葡萄菁",
        "alias": "PTW"
    },
    {
        "label": "平旺",
        "value": "平旺",
        "alias": "PWV"
    },
    {
        "label": "平型关",
        "value": "平型关",
        "alias": "PGV"
    },
    {
        "label": "蓬溪",
        "value": "蓬溪",
        "alias": "KZW"
    },
    {
        "label": "平遥",
        "value": "平遥",
        "alias": "PYV"
    },
    {
        "label": "彭阳",
        "value": "彭阳",
        "alias": "PYJ"
    },
    {
        "label": "鄱阳",
        "value": "鄱阳",
        "alias": "POG"
    },
    {
        "label": "平洋",
        "value": "平洋",
        "alias": "PYX"
    },
    {
        "label": "鄱阳北",
        "value": "鄱阳北",
        "alias": "PYG"
    },
    {
        "label": "平邑",
        "value": "平邑",
        "alias": "PIK"
    },
    {
        "label": "平原堡",
        "value": "平原堡",
        "alias": "PPJ"
    },
    {
        "label": "平原",
        "value": "平原",
        "alias": "PYK"
    },
    {
        "label": "番禺",
        "value": "番禺",
        "alias": "PYA"
    },
    {
        "label": "平峪",
        "value": "平峪",
        "alias": "PYP"
    },
    {
        "label": "平庄北",
        "value": "平庄北",
        "alias": "PZD"
    },
    {
        "label": "邳州东",
        "value": "邳州东",
        "alias": "PIU"
    },
    {
        "label": "平庄",
        "value": "平庄",
        "alias": "PAD"
    },
    {
        "label": "邳州",
        "value": "邳州",
        "alias": "PJH"
    },
    {
        "label": "泡子",
        "value": "泡子",
        "alias": "POD"
    },
    {
        "label": "平庄南",
        "value": "平庄南",
        "alias": "PND"
    },
    {
        "label": "乾安",
        "value": "乾安",
        "alias": "QOT"
    },
    {
        "label": "迁安",
        "value": "迁安",
        "alias": "QQP"
    },
    {
        "label": "秦安",
        "value": "秦安",
        "alias": "QGJ"
    },
    {
        "label": "庆城",
        "value": "庆城",
        "alias": "QHJ"
    },
    {
        "label": "蕲春南",
        "value": "蕲春南",
        "alias": "QCN"
    },
    {
        "label": "祁东北",
        "value": "祁东北",
        "alias": "QRQ"
    },
    {
        "label": "青岛机场",
        "value": "青岛机场",
        "alias": "QJK"
    },
    {
        "label": "祁东",
        "value": "祁东",
        "alias": "QMQ"
    },
    {
        "label": "青堆",
        "value": "青堆",
        "alias": "QET"
    },
    {
        "label": "曲阜南",
        "value": "曲阜南",
        "alias": "QQK"
    },
    {
        "label": "奇峰塔",
        "value": "奇峰塔",
        "alias": "QVP"
    },
    {
        "label": "泉港",
        "value": "泉港",
        "alias": "QGS"
    },
    {
        "label": "清河门北",
        "value": "清河门北",
        "alias": "QBD"
    },
    {
        "label": "千河",
        "value": "千河",
        "alias": "QUY"
    },
    {
        "label": "齐河",
        "value": "齐河",
        "alias": "QIK"
    },
    {
        "label": "清河门",
        "value": "清河门",
        "alias": "QHD"
    },
    {
        "label": "渠旧",
        "value": "渠旧",
        "alias": "QJZ"
    },
    {
        "label": "潜江",
        "value": "潜江",
        "alias": "QJN"
    },
    {
        "label": "曲江",
        "value": "曲江",
        "alias": "QIM"
    },
    {
        "label": "全椒",
        "value": "全椒",
        "alias": "INH"
    },
    {
        "label": "秦家",
        "value": "秦家",
        "alias": "QJB"
    },
    {
        "label": "祁家堡",
        "value": "祁家堡",
        "alias": "QBT"
    },
    {
        "label": "清涧县",
        "value": "清涧县",
        "alias": "QNY"
    },
    {
        "label": "秦家庄",
        "value": "秦家庄",
        "alias": "QZV"
    },
    {
        "label": "七里河",
        "value": "七里河",
        "alias": "QLD"
    },
    {
        "label": "渠黎",
        "value": "渠黎",
        "alias": "QLZ"
    },
    {
        "label": "秦岭",
        "value": "秦岭",
        "alias": "QLY"
    },
    {
        "label": "青莲",
        "value": "青莲",
        "alias": "QEW"
    },
    {
        "label": "青龙",
        "value": "青龙",
        "alias": "QIB"
    },
    {
        "label": "青龙山",
        "value": "青龙山",
        "alias": "QGH"
    },
    {
        "label": "祁门",
        "value": "祁门",
        "alias": "QIH"
    },
    {
        "label": "祁门南",
        "value": "祁门南",
        "alias": "QNU"
    },
    {
        "label": "且末",
        "value": "且末",
        "alias": "QMR"
    },
    {
        "label": "前磨头",
        "value": "前磨头",
        "alias": "QMP"
    },
    {
        "label": "清水北",
        "value": "清水北",
        "alias": "QEJ"
    },
    {
        "label": "青神",
        "value": "青神",
        "alias": "QVW"
    },
    {
        "label": "岐山",
        "value": "岐山",
        "alias": "QAY"
    },
    {
        "label": "前山",
        "value": "前山",
        "alias": "QXQ"
    },
    {
        "label": "确山",
        "value": "确山",
        "alias": "QSN"
    },
    {
        "label": "清水",
        "value": "清水",
        "alias": "QUJ"
    },
    {
        "label": "青山",
        "value": "青山",
        "alias": "QSB"
    },
    {
        "label": "清水县",
        "value": "清水县",
        "alias": "QIJ"
    },
    {
        "label": "戚墅堰",
        "value": "戚墅堰",
        "alias": "QYH"
    },
    {
        "label": "青田",
        "value": "青田",
        "alias": "QVH"
    },
    {
        "label": "桥头",
        "value": "桥头",
        "alias": "QAT"
    },
    {
        "label": "犍为",
        "value": "犍为",
        "alias": "JWE"
    },
    {
        "label": "前卫",
        "value": "前卫",
        "alias": "QWD"
    },
    {
        "label": "前苇塘",
        "value": "前苇塘",
        "alias": "QWP"
    },
    {
        "label": "祁县东",
        "value": "祁县东",
        "alias": "QGV"
    },
    {
        "label": "黔西",
        "value": "黔西",
        "alias": "QXE"
    },
    {
        "label": "祁县",
        "value": "祁县",
        "alias": "QXV"
    },
    {
        "label": "乾县",
        "value": "乾县",
        "alias": "QBY"
    },
    {
        "label": "青县",
        "value": "青县",
        "alias": "QXP"
    },
    {
        "label": "桥西",
        "value": "桥西",
        "alias": "QXJ"
    },
    {
        "label": "旗下营南",
        "value": "旗下营南",
        "alias": "QNC"
    },
    {
        "label": "旗下营",
        "value": "旗下营",
        "alias": "QXC"
    },
    {
        "label": "泉阳",
        "value": "泉阳",
        "alias": "QYL"
    },
    {
        "label": "千阳",
        "value": "千阳",
        "alias": "QOY"
    },
    {
        "label": "祁阳",
        "value": "祁阳",
        "alias": "QWQ"
    },
    {
        "label": "沁阳",
        "value": "沁阳",
        "alias": "QYF"
    },
    {
        "label": "祁阳北",
        "value": "祁阳北",
        "alias": "QVQ"
    },
    {
        "label": "七营",
        "value": "七营",
        "alias": "QYJ"
    },
    {
        "label": "庆阳山",
        "value": "庆阳山",
        "alias": "QSJ"
    },
    {
        "label": "清原",
        "value": "清原",
        "alias": "QYT"
    },
    {
        "label": "青州市北",
        "value": "青州市北",
        "alias": "QOK"
    },
    {
        "label": "泉州东",
        "value": "泉州东",
        "alias": "QRS"
    },
    {
        "label": "钦州",
        "value": "钦州",
        "alias": "QRZ"
    },
    {
        "label": "曲子",
        "value": "曲子",
        "alias": "QJJ"
    },
    {
        "label": "泉州南",
        "value": "泉州南",
        "alias": "QNS"
    },
    {
        "label": "青州市",
        "value": "青州市",
        "alias": "QZK"
    },
    {
        "label": "棋子湾",
        "value": "棋子湾",
        "alias": "QZQ"
    },
    {
        "label": "仁布",
        "value": "仁布",
        "alias": "RUO"
    },
    {
        "label": "瑞昌",
        "value": "瑞昌",
        "alias": "RCG"
    },
    {
        "label": "瑞昌西",
        "value": "瑞昌西",
        "alias": "RXG"
    },
    {
        "label": "如皋",
        "value": "如皋",
        "alias": "RBH"
    },
    {
        "label": "如皋南",
        "value": "如皋南",
        "alias": "RNU"
    },
    {
        "label": "容桂",
        "value": "容桂",
        "alias": "RUQ"
    },
    {
        "label": "榕江",
        "value": "榕江",
        "alias": "RVW"
    },
    {
        "label": "任丘",
        "value": "任丘",
        "alias": "RQP"
    },
    {
        "label": "融水",
        "value": "融水",
        "alias": "RSZ"
    },
    {
        "label": "乳山",
        "value": "乳山",
        "alias": "ROK"
    },
    {
        "label": "容县",
        "value": "容县",
        "alias": "RXZ"
    },
    {
        "label": "饶阳",
        "value": "饶阳",
        "alias": "RVP"
    },
    {
        "label": "汝阳",
        "value": "汝阳",
        "alias": "RYF"
    },
    {
        "label": "绕阳河",
        "value": "绕阳河",
        "alias": "RHD"
    },
    {
        "label": "汝州",
        "value": "汝州",
        "alias": "ROF"
    },
    {
        "label": "石坝",
        "value": "石坝",
        "alias": "OBJ"
    },
    {
        "label": "上板城",
        "value": "上板城",
        "alias": "SBP"
    },
    {
        "label": "施秉",
        "value": "施秉",
        "alias": "AQW"
    },
    {
        "label": "上板城南",
        "value": "上板城南",
        "alias": "OBP"
    },
    {
        "label": "石城东",
        "value": "石城东",
        "alias": "SDG"
    },
    {
        "label": "商城",
        "value": "商城",
        "alias": "SWN"
    },
    {
        "label": "舒城",
        "value": "舒城",
        "alias": "OCH"
    },
    {
        "label": "遂昌",
        "value": "遂昌",
        "alias": "SCU"
    },
    {
        "label": "顺昌",
        "value": "顺昌",
        "alias": "SCS"
    },
    {
        "label": "神池",
        "value": "神池",
        "alias": "SMV"
    },
    {
        "label": "石城",
        "value": "石城",
        "alias": "SCT"
    },
    {
        "label": "山城镇",
        "value": "山城镇",
        "alias": "SCL"
    },
    {
        "label": "山丹",
        "value": "山丹",
        "alias": "SDJ"
    },
    {
        "label": "顺德北",
        "value": "顺德北",
        "alias": "SVA"
    },
    {
        "label": "山丹马场",
        "value": "山丹马场",
        "alias": "JEJ"
    },
    {
        "label": "绥德",
        "value": "绥德",
        "alias": "ODY"
    },
    {
        "label": "顺德",
        "value": "顺德",
        "alias": "ORQ"
    },
    {
        "label": "商都",
        "value": "商都",
        "alias": "SXC"
    },
    {
        "label": "四道湾",
        "value": "四道湾",
        "alias": "OUD"
    },
    {
        "label": "三都县",
        "value": "三都县",
        "alias": "KKW"
    },
    {
        "label": "顺德学院",
        "value": "顺德学院",
        "alias": "OJQ"
    },
    {
        "label": "胜芳",
        "value": "胜芳",
        "alias": "SUP"
    },
    {
        "label": "四方台",
        "value": "四方台",
        "alias": "STB"
    },
    {
        "label": "水富",
        "value": "水富",
        "alias": "OTW"
    },
    {
        "label": "三关口",
        "value": "三关口",
        "alias": "OKJ"
    },
    {
        "label": "桑根达来",
        "value": "桑根达来",
        "alias": "OGC"
    },
    {
        "label": "上高镇",
        "value": "上高镇",
        "alias": "SVK"
    },
    {
        "label": "上杭",
        "value": "上杭",
        "alias": "SNS"
    },
    {
        "label": "蜀河",
        "value": "蜀河",
        "alias": "SHY"
    },
    {
        "label": "松河",
        "value": "松河",
        "alias": "SBM"
    },
    {
        "label": "沙河口",
        "value": "沙河口",
        "alias": "SKT"
    },
    {
        "label": "赛汗塔拉",
        "value": "赛汗塔拉",
        "alias": "SHC"
    },
    {
        "label": "泗洪",
        "value": "泗洪",
        "alias": "GQH"
    },
    {
        "label": "双河市",
        "value": "双河市",
        "alias": "OHR"
    },
    {
        "label": "四会",
        "value": "四会",
        "alias": "AHQ"
    },
    {
        "label": "沙湖",
        "value": "沙湖",
        "alias": "OHJ"
    },
    {
        "label": "三河县",
        "value": "三河县",
        "alias": "OXP"
    },
    {
        "label": "四合永",
        "value": "四合永",
        "alias": "OHD"
    },
    {
        "label": "双河镇",
        "value": "双河镇",
        "alias": "SEL"
    },
    {
        "label": "三合庄",
        "value": "三合庄",
        "alias": "SVP"
    },
    {
        "label": "畲江北",
        "value": "畲江北",
        "alias": "SOA"
    },
    {
        "label": "沈家河",
        "value": "沈家河",
        "alias": "OJJ"
    },
    {
        "label": "双吉",
        "value": "双吉",
        "alias": "SML"
    },
    {
        "label": "尚家",
        "value": "尚家",
        "alias": "SJB"
    },
    {
        "label": "三江口",
        "value": "三江口",
        "alias": "SKD"
    },
    {
        "label": "司家岭",
        "value": "司家岭",
        "alias": "OLK"
    },
    {
        "label": "沙井西",
        "value": "沙井西",
        "alias": "SJA"
    },
    {
        "label": "松江镇",
        "value": "松江镇",
        "alias": "OZL"
    },
    {
        "label": "三井子",
        "value": "三井子",
        "alias": "OJT"
    },
    {
        "label": "十家子",
        "value": "十家子",
        "alias": "SJD"
    },
    {
        "label": "三家寨",
        "value": "三家寨",
        "alias": "SMM"
    },
    {
        "label": "什里店",
        "value": "什里店",
        "alias": "OMP"
    },
    {
        "label": "疏勒",
        "value": "疏勒",
        "alias": "SUR"
    },
    {
        "label": "舍力虎",
        "value": "舍力虎",
        "alias": "VLD"
    },
    {
        "label": "疏勒河",
        "value": "疏勒河",
        "alias": "SHJ"
    },
    {
        "label": "双辽",
        "value": "双辽",
        "alias": "ZJD"
    },
    {
        "label": "石岭",
        "value": "石岭",
        "alias": "SOL"
    },
    {
        "label": "石磷",
        "value": "石磷",
        "alias": "SPB"
    },
    {
        "label": "石龙",
        "value": "石龙",
        "alias": "SLQ"
    },
    {
        "label": "萨拉齐",
        "value": "萨拉齐",
        "alias": "SLC"
    },
    {
        "label": "索伦",
        "value": "索伦",
        "alias": "SNT"
    },
    {
        "label": "沙岭子",
        "value": "沙岭子",
        "alias": "SLP"
    },
    {
        "label": "石门县",
        "value": "石门县",
        "alias": "OMQ"
    },
    {
        "label": "神木西",
        "value": "神木西",
        "alias": "OUY"
    },
    {
        "label": "山南",
        "value": "山南",
        "alias": "SAO"
    },
    {
        "label": "肃宁",
        "value": "肃宁",
        "alias": "SYP"
    },
    {
        "label": "神农架",
        "value": "神农架",
        "alias": "SMN"
    },
    {
        "label": "苏尼特左旗",
        "value": "苏尼特左旗",
        "alias": "ONC"
    },
    {
        "label": "双牌",
        "value": "双牌",
        "alias": "SBZ"
    },
    {
        "label": "遂平",
        "value": "遂平",
        "alias": "SON"
    },
    {
        "label": "沙坡头",
        "value": "沙坡头",
        "alias": "SFJ"
    },
    {
        "label": "商丘东",
        "value": "商丘东",
        "alias": "SIF"
    },
    {
        "label": "石桥",
        "value": "石桥",
        "alias": "SQE"
    },
    {
        "label": "沈丘",
        "value": "沈丘",
        "alias": "SQN"
    },
    {
        "label": "商丘南",
        "value": "商丘南",
        "alias": "SPF"
    },
    {
        "label": "水泉",
        "value": "水泉",
        "alias": "SID"
    },
    {
        "label": "桑日",
        "value": "桑日",
        "alias": "SRO"
    },
    {
        "label": "狮山北",
        "value": "狮山北",
        "alias": "NSQ"
    },
    {
        "label": "三水北",
        "value": "三水北",
        "alias": "ARQ"
    },
    {
        "label": "松山湖北",
        "value": "松山湖北",
        "alias": "KUQ"
    },
    {
        "label": "鄯善",
        "value": "鄯善",
        "alias": "SSR"
    },
    {
        "label": "狮山",
        "value": "狮山",
        "alias": "KSQ"
    },
    {
        "label": "松树",
        "value": "松树",
        "alias": "SFT"
    },
    {
        "label": "三水",
        "value": "三水",
        "alias": "SJQ"
    },
    {
        "label": "泗水",
        "value": "泗水",
        "alias": "OSK"
    },
    {
        "label": "山市",
        "value": "山市",
        "alias": "SQB"
    },
    {
        "label": "三十家",
        "value": "三十家",
        "alias": "SRD"
    },
    {
        "label": "三水南",
        "value": "三水南",
        "alias": "RNQ"
    },
    {
        "label": "泗水南",
        "value": "泗水南",
        "alias": "ONK"
    },
    {
        "label": "松树镇",
        "value": "松树镇",
        "alias": "SSL"
    },
    {
        "label": "双水镇",
        "value": "双水镇",
        "alias": "PQQ"
    },
    {
        "label": "索图罕",
        "value": "索图罕",
        "alias": "SHX"
    },
    {
        "label": "石梯",
        "value": "石梯",
        "alias": "STE"
    },
    {
        "label": "三堂集",
        "value": "三堂集",
        "alias": "SDH"
    },
    {
        "label": "神头",
        "value": "神头",
        "alias": "SEV"
    },
    {
        "label": "石头",
        "value": "石头",
        "alias": "OTB"
    },
    {
        "label": "沙沱",
        "value": "沙沱",
        "alias": "SFM"
    },
    {
        "label": "上万",
        "value": "上万",
        "alias": "SWP"
    },
    {
        "label": "沙湾南",
        "value": "沙湾南",
        "alias": "SWE"
    },
    {
        "label": "沙湾市",
        "value": "沙湾市",
        "alias": "SXR"
    },
    {
        "label": "孙吴",
        "value": "孙吴",
        "alias": "SKB"
    },
    {
        "label": "歙县北",
        "value": "歙县北",
        "alias": "NPH"
    },
    {
        "label": "遂溪",
        "value": "遂溪",
        "alias": "SXZ"
    },
    {
        "label": "石岘",
        "value": "石岘",
        "alias": "SXL"
    },
    {
        "label": "寿县",
        "value": "寿县",
        "alias": "SOU"
    },
    {
        "label": "沙县",
        "value": "沙县",
        "alias": "SAS"
    },
    {
        "label": "始兴",
        "value": "始兴",
        "alias": "IPQ"
    },
    {
        "label": "随县",
        "value": "随县",
        "alias": "OVN"
    },
    {
        "label": "歙县",
        "value": "歙县",
        "alias": "OVH"
    },
    {
        "label": "泗县",
        "value": "泗县",
        "alias": "GPH"
    },
    {
        "label": "水茜",
        "value": "水茜",
        "alias": "SSS"
    },
    {
        "label": "上西铺",
        "value": "上西铺",
        "alias": "SXM"
    },
    {
        "label": "石峡子",
        "value": "石峡子",
        "alias": "SXJ"
    },
    {
        "label": "寿阳",
        "value": "寿阳",
        "alias": "SYV"
    },
    {
        "label": "泗阳",
        "value": "泗阳",
        "alias": "MPH"
    },
    {
        "label": "沭阳",
        "value": "沭阳",
        "alias": "FMH"
    },
    {
        "label": "松阳",
        "value": "松阳",
        "alias": "SUU"
    },
    {
        "label": "水洋",
        "value": "水洋",
        "alias": "OYP"
    },
    {
        "label": "三阳",
        "value": "三阳",
        "alias": "SYU"
    },
    {
        "label": "射阳",
        "value": "射阳",
        "alias": "SAU"
    },
    {
        "label": "双洋",
        "value": "双洋",
        "alias": "SQS"
    },
    {
        "label": "绥阳",
        "value": "绥阳",
        "alias": "SYB"
    },
    {
        "label": "松原北",
        "value": "松原北",
        "alias": "OCT"
    },
    {
        "label": "邵阳北",
        "value": "邵阳北",
        "alias": "OVQ"
    },
    {
        "label": "三阳川",
        "value": "三阳川",
        "alias": "SYJ"
    },
    {
        "label": "上腰墩",
        "value": "上腰墩",
        "alias": "SPJ"
    },
    {
        "label": "三营",
        "value": "三营",
        "alias": "OEJ"
    },
    {
        "label": "山阴",
        "value": "山阴",
        "alias": "SNV"
    },
    {
        "label": "上虞南",
        "value": "上虞南",
        "alias": "SVU"
    },
    {
        "label": "三源浦",
        "value": "三源浦",
        "alias": "SYL"
    },
    {
        "label": "上园",
        "value": "上园",
        "alias": "SUD"
    },
    {
        "label": "三原",
        "value": "三原",
        "alias": "SAY"
    },
    {
        "label": "上虞",
        "value": "上虞",
        "alias": "BDH"
    },
    {
        "label": "邵阳西",
        "value": "邵阳西",
        "alias": "SXA"
    },
    {
        "label": "沙洋西",
        "value": "沙洋西",
        "alias": "OJN"
    },
    {
        "label": "绥中北",
        "value": "绥中北",
        "alias": "SND"
    },
    {
        "label": "深圳机场北",
        "value": "深圳机场北",
        "alias": "SBA"
    },
    {
        "label": "嵊州北",
        "value": "嵊州北",
        "alias": "SEU"
    },
    {
        "label": "三灶东",
        "value": "三灶东",
        "alias": "SAA"
    },
    {
        "label": "孙镇",
        "value": "孙镇",
        "alias": "OZY"
    },
    {
        "label": "神州",
        "value": "神州",
        "alias": "SRQ"
    },
    {
        "label": "桑植",
        "value": "桑植",
        "alias": "SZA"
    },
    {
        "label": "深州",
        "value": "深州",
        "alias": "OZP"
    },
    {
        "label": "肃州",
        "value": "肃州",
        "alias": "SRJ"
    },
    {
        "label": "松滋",
        "value": "松滋",
        "alias": "SIN"
    },
    {
        "label": "十字门",
        "value": "十字门",
        "alias": "SIA"
    },
    {
        "label": "师宗",
        "value": "师宗",
        "alias": "SEM"
    },
    {
        "label": "苏州园区",
        "value": "苏州园区",
        "alias": "KAH"
    },
    {
        "label": "苏州新区",
        "value": "苏州新区",
        "alias": "ITH"
    },
    {
        "label": "石嘴山",
        "value": "石嘴山",
        "alias": "OZJ"
    },
    {
        "label": "台安",
        "value": "台安",
        "alias": "TID"
    },
    {
        "label": "台安南",
        "value": "台安南",
        "alias": "TAD"
    },
    {
        "label": "通安驿",
        "value": "通安驿",
        "alias": "TAJ"
    },
    {
        "label": "桐柏",
        "value": "桐柏",
        "alias": "TBF"
    },
    {
        "label": "太仓",
        "value": "太仓",
        "alias": "TCU"
    },
    {
        "label": "桃村北",
        "value": "桃村北",
        "alias": "TOK"
    },
    {
        "label": "桐城东",
        "value": "桐城东",
        "alias": "TOU"
    },
    {
        "label": "铁厂沟",
        "value": "铁厂沟",
        "alias": "TJR"
    },
    {
        "label": "铁厂",
        "value": "铁厂",
        "alias": "TCL"
    },
    {
        "label": "郯城",
        "value": "郯城",
        "alias": "TZK"
    },
    {
        "label": "桐城",
        "value": "桐城",
        "alias": "TTH"
    },
    {
        "label": "桐城南",
        "value": "桐城南",
        "alias": "TUU"
    },
    {
        "label": "太仓南",
        "value": "太仓南",
        "alias": "TNU"
    },
    {
        "label": "铁刹山",
        "value": "铁刹山",
        "alias": "PST"
    },
    {
        "label": "桃村",
        "value": "桃村",
        "alias": "TCK"
    },
    {
        "label": "田东北",
        "value": "田东北",
        "alias": "TBZ"
    },
    {
        "label": "田东",
        "value": "田东",
        "alias": "TDZ"
    },
    {
        "label": "天岗",
        "value": "天岗",
        "alias": "TGL"
    },
    {
        "label": "太谷东",
        "value": "太谷东",
        "alias": "TEV"
    },
    {
        "label": "铁干里克",
        "value": "铁干里克",
        "alias": "VAR"
    },
    {
        "label": "土贵乌拉",
        "value": "土贵乌拉",
        "alias": "TGC"
    },
    {
        "label": "太谷西",
        "value": "太谷西",
        "alias": "TIV"
    },
    {
        "label": "太和北",
        "value": "太和北",
        "alias": "JYN"
    },
    {
        "label": "太和东",
        "value": "太和东",
        "alias": "TDU"
    },
    {
        "label": "唐河",
        "value": "唐河",
        "alias": "THF"
    },
    {
        "label": "唐海南",
        "value": "唐海南",
        "alias": "IEP"
    },
    {
        "label": "通化县",
        "value": "通化县",
        "alias": "TXL"
    },
    {
        "label": "团结",
        "value": "团结",
        "alias": "TIX"
    },
    {
        "label": "谭家井",
        "value": "谭家井",
        "alias": "TNJ"
    },
    {
        "label": "唐家湾",
        "value": "唐家湾",
        "alias": "PDQ"
    },
    {
        "label": "统军庄",
        "value": "统军庄",
        "alias": "TZP"
    },
    {
        "label": "铜陵北",
        "value": "铜陵北",
        "alias": "KXH"
    },
    {
        "label": "吐列毛杜",
        "value": "吐列毛杜",
        "alias": "TMD"
    },
    {
        "label": "图里河",
        "value": "图里河",
        "alias": "TEX"
    },
    {
        "label": "亭亮",
        "value": "亭亮",
        "alias": "TIZ"
    },
    {
        "label": "田林",
        "value": "田林",
        "alias": "TFZ"
    },
    {
        "label": "天门北",
        "value": "天门北",
        "alias": "TMN"
    },
    {
        "label": "太姥山",
        "value": "太姥山",
        "alias": "TLS"
    },
    {
        "label": "土牧尔台",
        "value": "土牧尔台",
        "alias": "TRC"
    },
    {
        "label": "土门子",
        "value": "土门子",
        "alias": "TCJ"
    },
    {
        "label": "洮南",
        "value": "洮南",
        "alias": "TVT"
    },
    {
        "label": "太平川",
        "value": "太平川",
        "alias": "TIT"
    },
    {
        "label": "太平镇",
        "value": "太平镇",
        "alias": "TEB"
    },
    {
        "label": "台前",
        "value": "台前",
        "alias": "TTK"
    },
    {
        "label": "图强",
        "value": "图强",
        "alias": "TQX"
    },
    {
        "label": "天桥岭",
        "value": "天桥岭",
        "alias": "TQL"
    },
    {
        "label": "土桥子",
        "value": "土桥子",
        "alias": "TQJ"
    },
    {
        "label": "甜水堡",
        "value": "甜水堡",
        "alias": "TUJ"
    },
    {
        "label": "汤山城",
        "value": "汤山城",
        "alias": "TCT"
    },
    {
        "label": "台山",
        "value": "台山",
        "alias": "PUQ"
    },
    {
        "label": "桃山",
        "value": "桃山",
        "alias": "TAB"
    },
    {
        "label": "唐山西",
        "value": "唐山西",
        "alias": "TSI"
    },
    {
        "label": "天台山",
        "value": "天台山",
        "alias": "TIU"
    },
    {
        "label": "通途",
        "value": "通途",
        "alias": "TUT"
    },
    {
        "label": "通渭",
        "value": "通渭",
        "alias": "TWJ"
    },
    {
        "label": "田心东",
        "value": "田心东",
        "alias": "KQQ"
    },
    {
        "label": "藤县",
        "value": "藤县",
        "alias": "TAZ"
    },
    {
        "label": "同心",
        "value": "同心",
        "alias": "TXJ"
    },
    {
        "label": "桐乡",
        "value": "桐乡",
        "alias": "TCH"
    },
    {
        "label": "田阳",
        "value": "田阳",
        "alias": "TRZ"
    },
    {
        "label": "天义",
        "value": "天义",
        "alias": "TND"
    },
    {
        "label": "汤阴",
        "value": "汤阴",
        "alias": "TYF"
    },
    {
        "label": "天涯海角",
        "value": "天涯海角",
        "alias": "THA"
    },
    {
        "label": "驼腰岭",
        "value": "驼腰岭",
        "alias": "TIL"
    },
    {
        "label": "太阳山",
        "value": "太阳山",
        "alias": "TYJ"
    },
    {
        "label": "桃源",
        "value": "桃源",
        "alias": "TYA"
    },
    {
        "label": "汤原",
        "value": "汤原",
        "alias": "TYB"
    },
    {
        "label": "通远堡西",
        "value": "通远堡西",
        "alias": "TST"
    },
    {
        "label": "塔崖驿",
        "value": "塔崖驿",
        "alias": "TYP"
    },
    {
        "label": "滕州",
        "value": "滕州",
        "alias": "TXK"
    },
    {
        "label": "天镇",
        "value": "天镇",
        "alias": "TZV"
    },
    {
        "label": "天祝",
        "value": "天祝",
        "alias": "TZJ"
    },
    {
        "label": "天柱山",
        "value": "天柱山",
        "alias": "QWH"
    },
    {
        "label": "天祝西",
        "value": "天祝西",
        "alias": "TRJ"
    },
    {
        "label": "武安",
        "value": "武安",
        "alias": "WAP"
    },
    {
        "label": "文安",
        "value": "文安",
        "alias": "WBP"
    },
    {
        "label": "万安县",
        "value": "万安县",
        "alias": "WAG"
    },
    {
        "label": "王安镇",
        "value": "王安镇",
        "alias": "WVP"
    },
    {
        "label": "吴堡",
        "value": "吴堡",
        "alias": "WUY"
    },
    {
        "label": "五叉沟",
        "value": "五叉沟",
        "alias": "WCT"
    },
    {
        "label": "吴川",
        "value": "吴川",
        "alias": "WAQ"
    },
    {
        "label": "温春",
        "value": "温春",
        "alias": "WDB"
    },
    {
        "label": "五大连池",
        "value": "五大连池",
        "alias": "WRB"
    },
    {
        "label": "文登东",
        "value": "文登东",
        "alias": "WGK"
    },
    {
        "label": "文登",
        "value": "文登",
        "alias": "WBK"
    },
    {
        "label": "五道沟",
        "value": "五道沟",
        "alias": "WDL"
    },
    {
        "label": "五道河",
        "value": "五道河",
        "alias": "WHP"
    },
    {
        "label": "文地",
        "value": "文地",
        "alias": "WNZ"
    },
    {
        "label": "文登南",
        "value": "文登南",
        "alias": "WWK"
    },
    {
        "label": "卫东",
        "value": "卫东",
        "alias": "WVT"
    },
    {
        "label": "望都",
        "value": "望都",
        "alias": "WDP"
    },
    {
        "label": "武当山西",
        "value": "武当山西",
        "alias": "WWN"
    },
    {
        "label": "乌尔旗汗",
        "value": "乌尔旗汗",
        "alias": "WHX"
    },
    {
        "label": "潍坊北",
        "value": "潍坊北",
        "alias": "WJK"
    },
    {
        "label": "五府山",
        "value": "五府山",
        "alias": "WFG"
    },
    {
        "label": "王府",
        "value": "王府",
        "alias": "WUT"
    },
    {
        "label": "湾沟",
        "value": "湾沟",
        "alias": "WGL"
    },
    {
        "label": "吴官田",
        "value": "吴官田",
        "alias": "WGM"
    },
    {
        "label": "威虎岭北",
        "value": "威虎岭北",
        "alias": "WBL"
    },
    {
        "label": "威海北",
        "value": "威海北",
        "alias": "WHK"
    },
    {
        "label": "芜湖北",
        "value": "芜湖北",
        "alias": "WBU"
    },
    {
        "label": "威海南海",
        "value": "威海南海",
        "alias": "WRK"
    },
    {
        "label": "芜湖南",
        "value": "芜湖南",
        "alias": "RVH"
    },
    {
        "label": "卫辉南",
        "value": "卫辉南",
        "alias": "WVF"
    },
    {
        "label": "五华",
        "value": "五华",
        "alias": "WHA"
    },
    {
        "label": "卫辉",
        "value": "卫辉",
        "alias": "WHF"
    },
    {
        "label": "吴家川",
        "value": "吴家川",
        "alias": "WCJ"
    },
    {
        "label": "渭津",
        "value": "渭津",
        "alias": "WJL"
    },
    {
        "label": "午汲",
        "value": "午汲",
        "alias": "WJP"
    },
    {
        "label": "威箐",
        "value": "威箐",
        "alias": "WAM"
    },
    {
        "label": "魏家泉",
        "value": "魏家泉",
        "alias": "WJR"
    },
    {
        "label": "倭肯",
        "value": "倭肯",
        "alias": "WQB"
    },
    {
        "label": "乌兰",
        "value": "乌兰",
        "alias": "WIO"
    },
    {
        "label": "五龙背",
        "value": "五龙背",
        "alias": "WBT"
    },
    {
        "label": "五龙背东",
        "value": "五龙背东",
        "alias": "WMT"
    },
    {
        "label": "瓦拉干",
        "value": "瓦拉干",
        "alias": "WVX"
    },
    {
        "label": "五莲",
        "value": "五莲",
        "alias": "WLK"
    },
    {
        "label": "卧龙寺",
        "value": "卧龙寺",
        "alias": "WLY"
    },
    {
        "label": "乌兰木图",
        "value": "乌兰木图",
        "alias": "VLT"
    },
    {
        "label": "卧里屯",
        "value": "卧里屯",
        "alias": "WLX"
    },
    {
        "label": "望牛墩",
        "value": "望牛墩",
        "alias": "WNA"
    },
    {
        "label": "乌奴耳",
        "value": "乌奴耳",
        "alias": "WRX"
    },
    {
        "label": "万宁",
        "value": "万宁",
        "alias": "WNQ"
    },
    {
        "label": "万年",
        "value": "万年",
        "alias": "WWG"
    },
    {
        "label": "渭南南",
        "value": "渭南南",
        "alias": "WVY"
    },
    {
        "label": "渭南镇",
        "value": "渭南镇",
        "alias": "WNJ"
    },
    {
        "label": "武平",
        "value": "武平",
        "alias": "WPS"
    },
    {
        "label": "吴桥",
        "value": "吴桥",
        "alias": "WUP"
    },
    {
        "label": "万荣",
        "value": "万荣",
        "alias": "VOM"
    },
    {
        "label": "巫山",
        "value": "巫山",
        "alias": "WOE"
    },
    {
        "label": "文水",
        "value": "文水",
        "alias": "WEV"
    },
    {
        "label": "巍山",
        "value": "巍山",
        "alias": "WOM"
    },
    {
        "label": "武山",
        "value": "武山",
        "alias": "WSJ"
    },
    {
        "label": "瓦石峡",
        "value": "瓦石峡",
        "alias": "WHR"
    },
    {
        "label": "魏善庄",
        "value": "魏善庄",
        "alias": "WSP"
    },
    {
        "label": "五通",
        "value": "五通",
        "alias": "WTZ"
    },
    {
        "label": "王瞳",
        "value": "王瞳",
        "alias": "WTP"
    },
    {
        "label": "五台山",
        "value": "五台山",
        "alias": "WSV"
    },
    {
        "label": "王团庄",
        "value": "王团庄",
        "alias": "WZJ"
    },
    {
        "label": "无为",
        "value": "无为",
        "alias": "IIH"
    },
    {
        "label": "瓦屋山",
        "value": "瓦屋山",
        "alias": "WAH"
    },
    {
        "label": "五五",
        "value": "五五",
        "alias": "WVR"
    },
    {
        "label": "武乡东",
        "value": "武乡东",
        "alias": "WVV"
    },
    {
        "label": "威信",
        "value": "威信",
        "alias": "WXE"
    },
    {
        "label": "武乡",
        "value": "武乡",
        "alias": "WUV"
    },
    {
        "label": "闻喜",
        "value": "闻喜",
        "alias": "WXV"
    },
    {
        "label": "卫星",
        "value": "卫星",
        "alias": "WVB"
    },
    {
        "label": "无锡新区",
        "value": "无锡新区",
        "alias": "IFH"
    },
    {
        "label": "王杨",
        "value": "王杨",
        "alias": "WYB"
    },
    {
        "label": "武义北",
        "value": "武义北",
        "alias": "WDH"
    },
    {
        "label": "武义",
        "value": "武义",
        "alias": "RYH"
    },
    {
        "label": "瓦窑田",
        "value": "瓦窑田",
        "alias": "WIM"
    },
    {
        "label": "湾仔",
        "value": "湾仔",
        "alias": "WZA"
    },
    {
        "label": "湾仔北",
        "value": "湾仔北",
        "alias": "WBA"
    },
    {
        "label": "温州北",
        "value": "温州北",
        "alias": "URH"
    },
    {
        "label": "苇子沟",
        "value": "苇子沟",
        "alias": "WZL"
    },
    {
        "label": "韦庄",
        "value": "韦庄",
        "alias": "WZY"
    },
    {
        "label": "五寨",
        "value": "五寨",
        "alias": "WZV"
    },
    {
        "label": "武陟",
        "value": "武陟",
        "alias": "WIF"
    },
    {
        "label": "湾沚南",
        "value": "湾沚南",
        "alias": "WNU"
    },
    {
        "label": "魏杖子",
        "value": "魏杖子",
        "alias": "WKD"
    },
    {
        "label": "微子镇",
        "value": "微子镇",
        "alias": "WQP"
    },
    {
        "label": "兴安",
        "value": "兴安",
        "alias": "XAZ"
    },
    {
        "label": "新安",
        "value": "新安",
        "alias": "EAM"
    },
    {
        "label": "新安县",
        "value": "新安县",
        "alias": "XAF"
    },
    {
        "label": "新保安",
        "value": "新保安",
        "alias": "XAP"
    },
    {
        "label": "下板城",
        "value": "下板城",
        "alias": "EBP"
    },
    {
        "label": "西八里",
        "value": "西八里",
        "alias": "XLP"
    },
    {
        "label": "新昌北",
        "value": "新昌北",
        "alias": "XBU"
    },
    {
        "label": "许昌北",
        "value": "许昌北",
        "alias": "EBF"
    },
    {
        "label": "项城",
        "value": "项城",
        "alias": "ERN"
    },
    {
        "label": "小村",
        "value": "小村",
        "alias": "XEM"
    },
    {
        "label": "兴城西",
        "value": "兴城西",
        "alias": "XXD"
    },
    {
        "label": "新绰源",
        "value": "新绰源",
        "alias": "XRX"
    },
    {
        "label": "下城子",
        "value": "下城子",
        "alias": "XCB"
    },
    {
        "label": "喜德",
        "value": "喜德",
        "alias": "EDW"
    },
    {
        "label": "小得江",
        "value": "小得江",
        "alias": "EJM"
    },
    {
        "label": "西大庙",
        "value": "西大庙",
        "alias": "XMP"
    },
    {
        "label": "小董",
        "value": "小董",
        "alias": "XEZ"
    },
    {
        "label": "小东",
        "value": "小东",
        "alias": "XOD"
    },
    {
        "label": "西渡",
        "value": "西渡",
        "alias": "XDA"
    },
    {
        "label": "喜德西",
        "value": "喜德西",
        "alias": "XXE"
    },
    {
        "label": "襄汾",
        "value": "襄汾",
        "alias": "XFV"
    },
    {
        "label": "信丰",
        "value": "信丰",
        "alias": "EFG"
    },
    {
        "label": "襄汾西",
        "value": "襄汾西",
        "alias": "XTV"
    },
    {
        "label": "信丰西",
        "value": "信丰西",
        "alias": "XFG"
    },
    {
        "label": "新干",
        "value": "新干",
        "alias": "EGG"
    },
    {
        "label": "孝感",
        "value": "孝感",
        "alias": "XGN"
    },
    {
        "label": "新干东",
        "value": "新干东",
        "alias": "XGG"
    },
    {
        "label": "兴国西",
        "value": "兴国西",
        "alias": "XIG"
    },
    {
        "label": "夏格庄",
        "value": "夏格庄",
        "alias": "XZK"
    },
    {
        "label": "西岗子",
        "value": "西岗子",
        "alias": "NBB"
    },
    {
        "label": "宣化北",
        "value": "宣化北",
        "alias": "VJP"
    },
    {
        "label": "西湖东",
        "value": "西湖东",
        "alias": "WDQ"
    },
    {
        "label": "新和",
        "value": "新和",
        "alias": "XIR"
    },
    {
        "label": "宣和",
        "value": "宣和",
        "alias": "XWJ"
    },
    {
        "label": "香河",
        "value": "香河",
        "alias": "XHI"
    },
    {
        "label": "襄河",
        "value": "襄河",
        "alias": "XXB"
    },
    {
        "label": "斜河涧",
        "value": "斜河涧",
        "alias": "EEP"
    },
    {
        "label": "新华屯",
        "value": "新华屯",
        "alias": "XAX"
    },
    {
        "label": "新华",
        "value": "新华",
        "alias": "XHB"
    },
    {
        "label": "新化",
        "value": "新化",
        "alias": "EHQ"
    },
    {
        "label": "宣化",
        "value": "宣化",
        "alias": "XHP"
    },
    {
        "label": "西华",
        "value": "西华",
        "alias": "EHF"
    },
    {
        "label": "下花园",
        "value": "下花园",
        "alias": "XYP"
    },
    {
        "label": "小河镇",
        "value": "小河镇",
        "alias": "EKY"
    },
    {
        "label": "徐家店",
        "value": "徐家店",
        "alias": "HYK"
    },
    {
        "label": "峡江",
        "value": "峡江",
        "alias": "EJG"
    },
    {
        "label": "新绛",
        "value": "新绛",
        "alias": "XJV"
    },
    {
        "label": "仙居南",
        "value": "仙居南",
        "alias": "XNU"
    },
    {
        "label": "许家屯",
        "value": "许家屯",
        "alias": "XJT"
    },
    {
        "label": "仙居",
        "value": "仙居",
        "alias": "XJU"
    },
    {
        "label": "兴凯",
        "value": "兴凯",
        "alias": "EKB"
    },
    {
        "label": "溪口",
        "value": "溪口",
        "alias": "XKU"
    },
    {
        "label": "小榄",
        "value": "小榄",
        "alias": "EAQ"
    },
    {
        "label": "香兰",
        "value": "香兰",
        "alias": "XNB"
    },
    {
        "label": "新李",
        "value": "新李",
        "alias": "XLJ"
    },
    {
        "label": "西柳",
        "value": "西柳",
        "alias": "GCT"
    },
    {
        "label": "西林",
        "value": "西林",
        "alias": "XYB"
    },
    {
        "label": "新林",
        "value": "新林",
        "alias": "XPX"
    },
    {
        "label": "新立屯",
        "value": "新立屯",
        "alias": "XLD"
    },
    {
        "label": "兴隆县西",
        "value": "兴隆县西",
        "alias": "IRP"
    },
    {
        "label": "西麻山",
        "value": "西麻山",
        "alias": "XMB"
    },
    {
        "label": "下马塘",
        "value": "下马塘",
        "alias": "XAT"
    },
    {
        "label": "孝南",
        "value": "孝南",
        "alias": "XNV"
    },
    {
        "label": "咸宁北",
        "value": "咸宁北",
        "alias": "XRN"
    },
    {
        "label": "咸宁东",
        "value": "咸宁东",
        "alias": "XKN"
    },
    {
        "label": "兴宁",
        "value": "兴宁",
        "alias": "ENQ"
    },
    {
        "label": "咸宁",
        "value": "咸宁",
        "alias": "XNN"
    },
    {
        "label": "兴宁南",
        "value": "兴宁南",
        "alias": "XNA"
    },
    {
        "label": "兴平",
        "value": "兴平",
        "alias": "XPY"
    },
    {
        "label": "西平",
        "value": "西平",
        "alias": "XPN"
    },
    {
        "label": "新坪田",
        "value": "新坪田",
        "alias": "XPM"
    },
    {
        "label": "西平西",
        "value": "西平西",
        "alias": "EGQ"
    },
    {
        "label": "新邱",
        "value": "新邱",
        "alias": "XQD"
    },
    {
        "label": "新青",
        "value": "新青",
        "alias": "XQB"
    },
    {
        "label": "兴泉堡",
        "value": "兴泉堡",
        "alias": "XQJ"
    },
    {
        "label": "仙人桥",
        "value": "仙人桥",
        "alias": "XRL"
    },
    {
        "label": "小寺沟",
        "value": "小寺沟",
        "alias": "ESP"
    },
    {
        "label": "夏石",
        "value": "夏石",
        "alias": "XIZ"
    },
    {
        "label": "浠水",
        "value": "浠水",
        "alias": "XZN"
    },
    {
        "label": "杏树",
        "value": "杏树",
        "alias": "XSB"
    },
    {
        "label": "下社",
        "value": "下社",
        "alias": "XSV"
    },
    {
        "label": "徐水",
        "value": "徐水",
        "alias": "XSP"
    },
    {
        "label": "浠水南",
        "value": "浠水南",
        "alias": "VNN"
    },
    {
        "label": "杏树屯",
        "value": "杏树屯",
        "alias": "XDT"
    },
    {
        "label": "许三湾",
        "value": "许三湾",
        "alias": "XSJ"
    },
    {
        "label": "响水县",
        "value": "响水县",
        "alias": "XSU"
    },
    {
        "label": "邢台",
        "value": "邢台",
        "alias": "XTP"
    },
    {
        "label": "湘潭北",
        "value": "湘潭北",
        "alias": "EDQ"
    },
    {
        "label": "仙桃西",
        "value": "仙桃西",
        "alias": "XAN"
    },
    {
        "label": "下台子",
        "value": "下台子",
        "alias": "EIP"
    },
    {
        "label": "小湾东",
        "value": "小湾东",
        "alias": "XNM"
    },
    {
        "label": "徐闻",
        "value": "徐闻",
        "alias": "XJQ"
    },
    {
        "label": "兴文南",
        "value": "兴文南",
        "alias": "XAE"
    },
    {
        "label": "新窝铺",
        "value": "新窝铺",
        "alias": "EPD"
    },
    {
        "label": "西乌旗",
        "value": "西乌旗",
        "alias": "XWD"
    },
    {
        "label": "修武",
        "value": "修武",
        "alias": "XWF"
    },
    {
        "label": "修武西",
        "value": "修武西",
        "alias": "EXF"
    },
    {
        "label": "新县",
        "value": "新县",
        "alias": "XSN"
    },
    {
        "label": "息县",
        "value": "息县",
        "alias": "ENN"
    },
    {
        "label": "湘乡",
        "value": "湘乡",
        "alias": "XXQ"
    },
    {
        "label": "萧县",
        "value": "萧县",
        "alias": "EOH"
    },
    {
        "label": "新乡南",
        "value": "新乡南",
        "alias": "ENF"
    },
    {
        "label": "新兴县",
        "value": "新兴县",
        "alias": "XGQ"
    },
    {
        "label": "西小召",
        "value": "西小召",
        "alias": "XZC"
    },
    {
        "label": "小西庄",
        "value": "小西庄",
        "alias": "XXP"
    },
    {
        "label": "向阳",
        "value": "向阳",
        "alias": "XDB"
    },
    {
        "label": "旬阳北",
        "value": "旬阳北",
        "alias": "XBY"
    },
    {
        "label": "咸阳北",
        "value": "咸阳北",
        "alias": "EBY"
    },
    {
        "label": "襄垣东",
        "value": "襄垣东",
        "alias": "EAF"
    },
    {
        "label": "兴业",
        "value": "兴业",
        "alias": "SNZ"
    },
    {
        "label": "小雨谷",
        "value": "小雨谷",
        "alias": "XHM"
    },
    {
        "label": "新沂",
        "value": "新沂",
        "alias": "VIH"
    },
    {
        "label": "小月旧",
        "value": "小月旧",
        "alias": "XFM"
    },
    {
        "label": "新沂南",
        "value": "新沂南",
        "alias": "XYU"
    },
    {
        "label": "仙游",
        "value": "仙游",
        "alias": "XWS"
    },
    {
        "label": "小扬气",
        "value": "小扬气",
        "alias": "XYX"
    },
    {
        "label": "襄垣",
        "value": "襄垣",
        "alias": "EIF"
    },
    {
        "label": "夏邑县",
        "value": "夏邑县",
        "alias": "EJH"
    },
    {
        "label": "新友谊",
        "value": "新友谊",
        "alias": "EYB"
    },
    {
        "label": "新阳镇",
        "value": "新阳镇",
        "alias": "XZJ"
    },
    {
        "label": "新帐房",
        "value": "新帐房",
        "alias": "XZX"
    },
    {
        "label": "悬钟",
        "value": "悬钟",
        "alias": "XRP"
    },
    {
        "label": "汐子",
        "value": "汐子",
        "alias": "XZD"
    },
    {
        "label": "西哲里木",
        "value": "西哲里木",
        "alias": "XRD"
    },
    {
        "label": "新杖子",
        "value": "新杖子",
        "alias": "ERP"
    },
    {
        "label": "永安",
        "value": "永安",
        "alias": "YAS"
    },
    {
        "label": "永安乡",
        "value": "永安乡",
        "alias": "YNB"
    },
    {
        "label": "永安镇",
        "value": "永安镇",
        "alias": "YQZ"
    },
    {
        "label": "盐边",
        "value": "盐边",
        "alias": "YBE"
    },
    {
        "label": "羊草",
        "value": "羊草",
        "alias": "YAB"
    },
    {
        "label": "永城北",
        "value": "永城北",
        "alias": "RGH"
    },
    {
        "label": "秧草地",
        "value": "秧草地",
        "alias": "YKM"
    },
    {
        "label": "禹城东",
        "value": "禹城东",
        "alias": "YSK"
    },
    {
        "label": "盐城大丰",
        "value": "盐城大丰",
        "alias": "YFU"
    },
    {
        "label": "砚川",
        "value": "砚川",
        "alias": "YYY"
    },
    {
        "label": "盐池",
        "value": "盐池",
        "alias": "YKJ"
    },
    {
        "label": "阳岔",
        "value": "阳岔",
        "alias": "YAL"
    },
    {
        "label": "应城",
        "value": "应城",
        "alias": "YHN"
    },
    {
        "label": "宜城",
        "value": "宜城",
        "alias": "YIN"
    },
    {
        "label": "郓城",
        "value": "郓城",
        "alias": "YPK"
    },
    {
        "label": "晏城",
        "value": "晏城",
        "alias": "YEK"
    },
    {
        "label": "禹城",
        "value": "禹城",
        "alias": "YCK"
    },
    {
        "label": "阳澄湖",
        "value": "阳澄湖",
        "alias": "AIH"
    },
    {
        "label": "阳城",
        "value": "阳城",
        "alias": "YNF"
    },
    {
        "label": "迎春",
        "value": "迎春",
        "alias": "YYB"
    },
    {
        "label": "雁翅",
        "value": "雁翅",
        "alias": "YAP"
    },
    {
        "label": "云彩岭",
        "value": "云彩岭",
        "alias": "ACP"
    },
    {
        "label": "永川南",
        "value": "永川南",
        "alias": "YNE"
    },
    {
        "label": "虞城县",
        "value": "虞城县",
        "alias": "IXH"
    },
    {
        "label": "营城子",
        "value": "营城子",
        "alias": "YCT"
    },
    {
        "label": "于都北",
        "value": "于都北",
        "alias": "YYG"
    },
    {
        "label": "永登北",
        "value": "永登北",
        "alias": "ABJ"
    },
    {
        "label": "英德",
        "value": "英德",
        "alias": "YDQ"
    },
    {
        "label": "云东海",
        "value": "云东海",
        "alias": "NAQ"
    },
    {
        "label": "尹地",
        "value": "尹地",
        "alias": "YDM"
    },
    {
        "label": "永定",
        "value": "永定",
        "alias": "YGS"
    },
    {
        "label": "阳东",
        "value": "阳东",
        "alias": "WLQ"
    },
    {
        "label": "园墩",
        "value": "园墩",
        "alias": "YAJ"
    },
    {
        "label": "永福南",
        "value": "永福南",
        "alias": "YBZ"
    },
    {
        "label": "余干",
        "value": "余干",
        "alias": "YFG"
    },
    {
        "label": "阳高",
        "value": "阳高",
        "alias": "YOV"
    },
    {
        "label": "杨岗",
        "value": "杨岗",
        "alias": "YRB"
    },
    {
        "label": "雨格",
        "value": "雨格",
        "alias": "VTM"
    },
    {
        "label": "阳高南",
        "value": "阳高南",
        "alias": "AGV"
    },
    {
        "label": "阳谷",
        "value": "阳谷",
        "alias": "YIK"
    },
    {
        "label": "友好",
        "value": "友好",
        "alias": "YOB"
    },
    {
        "label": "沿河城",
        "value": "沿河城",
        "alias": "YHP"
    },
    {
        "label": "洋河",
        "value": "洋河",
        "alias": "GTH"
    },
    {
        "label": "岩会",
        "value": "岩会",
        "alias": "AEP"
    },
    {
        "label": "羊臼河",
        "value": "羊臼河",
        "alias": "YHM"
    },
    {
        "label": "元江",
        "value": "元江",
        "alias": "AJM"
    },
    {
        "label": "叶集",
        "value": "叶集",
        "alias": "YCH"
    },
    {
        "label": "营街",
        "value": "营街",
        "alias": "YAM"
    },
    {
        "label": "余江",
        "value": "余江",
        "alias": "YHG"
    },
    {
        "label": "岳家井",
        "value": "岳家井",
        "alias": "YGJ"
    },
    {
        "label": "云居寺",
        "value": "云居寺",
        "alias": "AFP"
    },
    {
        "label": "燕家庄",
        "value": "燕家庄",
        "alias": "AZK"
    },
    {
        "label": "永康",
        "value": "永康",
        "alias": "RFH"
    },
    {
        "label": "英库勒",
        "value": "英库勒",
        "alias": "YLR"
    },
    {
        "label": "银浪",
        "value": "银浪",
        "alias": "YJX"
    },
    {
        "label": "以勒",
        "value": "以勒",
        "alias": "YPE"
    },
    {
        "label": "运粮河",
        "value": "运粮河",
        "alias": "YEF"
    },
    {
        "label": "伊拉哈",
        "value": "伊拉哈",
        "alias": "YLX"
    },
    {
        "label": "尉犁",
        "value": "尉犁",
        "alias": "WRR"
    },
    {
        "label": "鄢陵",
        "value": "鄢陵",
        "alias": "YIF"
    },
    {
        "label": "伊林",
        "value": "伊林",
        "alias": "YLB"
    },
    {
        "label": "仪陇",
        "value": "仪陇",
        "alias": "YCE"
    },
    {
        "label": "月亮田",
        "value": "月亮田",
        "alias": "YUM"
    },
    {
        "label": "义马",
        "value": "义马",
        "alias": "YMF"
    },
    {
        "label": "阳明堡",
        "value": "阳明堡",
        "alias": "YVV"
    },
    {
        "label": "云梦",
        "value": "云梦",
        "alias": "YMN"
    },
    {
        "label": "伊敏",
        "value": "伊敏",
        "alias": "YMX"
    },
    {
        "label": "一面山",
        "value": "一面山",
        "alias": "YST"
    },
    {
        "label": "沂南",
        "value": "沂南",
        "alias": "YNK"
    },
    {
        "label": "云南驿",
        "value": "云南驿",
        "alias": "ANM"
    },
    {
        "label": "银瓶",
        "value": "银瓶",
        "alias": "KPQ"
    },
    {
        "label": "营盘水",
        "value": "营盘水",
        "alias": "YZJ"
    },
    {
        "label": "乐清东",
        "value": "乐清东",
        "alias": "OLH"
    },
    {
        "label": "永庆",
        "value": "永庆",
        "alias": "YQL"
    },
    {
        "label": "杨桥",
        "value": "杨桥",
        "alias": "YQA"
    },
    {
        "label": "源迁",
        "value": "源迁",
        "alias": "AQK"
    },
    {
        "label": "玉泉镇",
        "value": "玉泉镇",
        "alias": "YFR"
    },
    {
        "label": "永仁",
        "value": "永仁",
        "alias": "ARM"
    },
    {
        "label": "颍上北",
        "value": "颍上北",
        "alias": "YBU"
    },
    {
        "label": "野三关",
        "value": "野三关",
        "alias": "BNN"
    },
    {
        "label": "榆树沟",
        "value": "榆树沟",
        "alias": "YGP"
    },
    {
        "label": "玉石",
        "value": "玉石",
        "alias": "YSJ"
    },
    {
        "label": "阳朔",
        "value": "阳朔",
        "alias": "YCZ"
    },
    {
        "label": "永寿",
        "value": "永寿",
        "alias": "ASY"
    },
    {
        "label": "云山",
        "value": "云山",
        "alias": "KZQ"
    },
    {
        "label": "窑上",
        "value": "窑上",
        "alias": "ASP"
    },
    {
        "label": "玉舍",
        "value": "玉舍",
        "alias": "AUM"
    },
    {
        "label": "沂水",
        "value": "沂水",
        "alias": "YUK"
    },
    {
        "label": "颍上",
        "value": "颍上",
        "alias": "YVH"
    },
    {
        "label": "偃师",
        "value": "偃师",
        "alias": "YSF"
    },
    {
        "label": "月山",
        "value": "月山",
        "alias": "YBF"
    },
    {
        "label": "杨树岭",
        "value": "杨树岭",
        "alias": "YAD"
    },
    {
        "label": "雁石南",
        "value": "雁石南",
        "alias": "YMS"
    },
    {
        "label": "野三坡",
        "value": "野三坡",
        "alias": "AIP"
    },
    {
        "label": "榆社西",
        "value": "榆社西",
        "alias": "AXV"
    },
    {
        "label": "永寿西",
        "value": "永寿西",
        "alias": "AUY"
    },
    {
        "label": "鹰手营子",
        "value": "鹰手营子",
        "alias": "YIP"
    },
    {
        "label": "源潭",
        "value": "源潭",
        "alias": "YTQ"
    },
    {
        "label": "于田",
        "value": "于田",
        "alias": "YWR"
    },
    {
        "label": "玉田南",
        "value": "玉田南",
        "alias": "YTI"
    },
    {
        "label": "伊通",
        "value": "伊通",
        "alias": "YTL"
    },
    {
        "label": "牙屯堡",
        "value": "牙屯堡",
        "alias": "YTZ"
    },
    {
        "label": "烟筒屯",
        "value": "烟筒屯",
        "alias": "YUX"
    },
    {
        "label": "烟台西",
        "value": "烟台西",
        "alias": "DCK"
    },
    {
        "label": "羊尾哨",
        "value": "羊尾哨",
        "alias": "YWM"
    },
    {
        "label": "黟县东",
        "value": "黟县东",
        "alias": "YIU"
    },
    {
        "label": "野象谷",
        "value": "野象谷",
        "alias": "AGM"
    },
    {
        "label": "阳西",
        "value": "阳西",
        "alias": "WMQ"
    },
    {
        "label": "云县",
        "value": "云县",
        "alias": "AIM"
    },
    {
        "label": "阳信",
        "value": "阳信",
        "alias": "YVK"
    },
    {
        "label": "应县",
        "value": "应县",
        "alias": "YZV"
    },
    {
        "label": "攸县",
        "value": "攸县",
        "alias": "YOG"
    },
    {
        "label": "永修",
        "value": "永修",
        "alias": "ACG"
    },
    {
        "label": "攸县南",
        "value": "攸县南",
        "alias": "YXG"
    },
    {
        "label": "洋县西",
        "value": "洋县西",
        "alias": "YXY"
    },
    {
        "label": "义县西",
        "value": "义县西",
        "alias": "YSD"
    },
    {
        "label": "云阳",
        "value": "云阳",
        "alias": "YUE"
    },
    {
        "label": "酉阳",
        "value": "酉阳",
        "alias": "AFW"
    },
    {
        "label": "弋阳",
        "value": "弋阳",
        "alias": "YIG"
    },
    {
        "label": "余姚",
        "value": "余姚",
        "alias": "YYH"
    },
    {
        "label": "余姚北",
        "value": "余姚北",
        "alias": "CTH"
    },
    {
        "label": "阳邑",
        "value": "阳邑",
        "alias": "ARP"
    },
    {
        "label": "岳阳南",
        "value": "岳阳南",
        "alias": "RWQ"
    },
    {
        "label": "杨源",
        "value": "杨源",
        "alias": "AYS"
    },
    {
        "label": "鸳鸯镇",
        "value": "鸳鸯镇",
        "alias": "YYJ"
    },
    {
        "label": "燕子砭",
        "value": "燕子砭",
        "alias": "YZY"
    },
    {
        "label": "宜州",
        "value": "宜州",
        "alias": "YSZ"
    },
    {
        "label": "银盏",
        "value": "银盏",
        "alias": "YZA"
    },
    {
        "label": "仪征",
        "value": "仪征",
        "alias": "UZH"
    },
    {
        "label": "耀州",
        "value": "耀州",
        "alias": "YOY"
    },
    {
        "label": "禹州",
        "value": "禹州",
        "alias": "YZF"
    },
    {
        "label": "迤资",
        "value": "迤资",
        "alias": "YQM"
    },
    {
        "label": "崖州湾",
        "value": "崖州湾",
        "alias": "YWA"
    },
    {
        "label": "羊者窝",
        "value": "羊者窝",
        "alias": "AEM"
    },
    {
        "label": "杨杖子",
        "value": "杨杖子",
        "alias": "YZD"
    },
    {
        "label": "镇安",
        "value": "镇安",
        "alias": "ZEY"
    },
    {
        "label": "治安",
        "value": "治安",
        "alias": "ZAD"
    },
    {
        "label": "招柏",
        "value": "招柏",
        "alias": "ZBP"
    },
    {
        "label": "张百湾",
        "value": "张百湾",
        "alias": "ZUP"
    },
    {
        "label": "子长",
        "value": "子长",
        "alias": "ZHY"
    },
    {
        "label": "赵城",
        "value": "赵城",
        "alias": "ZCV"
    },
    {
        "label": "张槎",
        "value": "张槎",
        "alias": "ZAA"
    },
    {
        "label": "枝城",
        "value": "枝城",
        "alias": "ZCN"
    },
    {
        "label": "邹城",
        "value": "邹城",
        "alias": "ZIK"
    },
    {
        "label": "诸城",
        "value": "诸城",
        "alias": "ZQK"
    },
    {
        "label": "章党",
        "value": "章党",
        "alias": "ZHT"
    },
    {
        "label": "肇东",
        "value": "肇东",
        "alias": "ZDB"
    },
    {
        "label": "照福铺",
        "value": "照福铺",
        "alias": "ZFM"
    },
    {
        "label": "芝罘",
        "value": "芝罘",
        "alias": "GZK"
    },
    {
        "label": "准格尔",
        "value": "准格尔",
        "alias": "ZEC"
    },
    {
        "label": "章古台",
        "value": "章古台",
        "alias": "ZGD"
    },
    {
        "label": "赵光",
        "value": "赵光",
        "alias": "ZGB"
    },
    {
        "label": "政和",
        "value": "政和",
        "alias": "ZES"
    },
    {
        "label": "中和",
        "value": "中和",
        "alias": "ZHX"
    },
    {
        "label": "织金北",
        "value": "织金北",
        "alias": "ZJE"
    },
    {
        "label": "枝江北",
        "value": "枝江北",
        "alias": "ZIN"
    },
    {
        "label": "钟家村",
        "value": "钟家村",
        "alias": "ZJY"
    },
    {
        "label": "紫荆关",
        "value": "紫荆关",
        "alias": "ZYP"
    },
    {
        "label": "朱家沟",
        "value": "朱家沟",
        "alias": "ZUB"
    },
    {
        "label": "周家屯",
        "value": "周家屯",
        "alias": "ZOD"
    },
    {
        "label": "褚家湾",
        "value": "褚家湾",
        "alias": "CWJ"
    },
    {
        "label": "仲恺",
        "value": "仲恺",
        "alias": "ZKA"
    },
    {
        "label": "曾口",
        "value": "曾口",
        "alias": "ZKE"
    },
    {
        "label": "张兰",
        "value": "张兰",
        "alias": "ZLV"
    },
    {
        "label": "珠琳",
        "value": "珠琳",
        "alias": "ZOM"
    },
    {
        "label": "枣林",
        "value": "枣林",
        "alias": "ZIV"
    },
    {
        "label": "扎鲁特",
        "value": "扎鲁特",
        "alias": "ZLD"
    },
    {
        "label": "樟木头东",
        "value": "樟木头东",
        "alias": "ZRQ"
    },
    {
        "label": "樟木头",
        "value": "樟木头",
        "alias": "ZOQ"
    },
    {
        "label": "扎囊",
        "value": "扎囊",
        "alias": "ZNO"
    },
    {
        "label": "中宁东",
        "value": "中宁东",
        "alias": "ZDJ"
    },
    {
        "label": "中宁",
        "value": "中宁",
        "alias": "VNJ"
    },
    {
        "label": "周宁",
        "value": "周宁",
        "alias": "ZNS"
    },
    {
        "label": "中宁南",
        "value": "中宁南",
        "alias": "ZNJ"
    },
    {
        "label": "邹平",
        "value": "邹平",
        "alias": "ZLK"
    },
    {
        "label": "镇平",
        "value": "镇平",
        "alias": "ZPF"
    },
    {
        "label": "漳浦",
        "value": "漳浦",
        "alias": "ZCS"
    },
    {
        "label": "张桥",
        "value": "张桥",
        "alias": "ZQY"
    },
    {
        "label": "枣强",
        "value": "枣强",
        "alias": "ZVP"
    },
    {
        "label": "庄桥",
        "value": "庄桥",
        "alias": "ZQH"
    },
    {
        "label": "朱日和",
        "value": "朱日和",
        "alias": "ZRC"
    },
    {
        "label": "中山北",
        "value": "中山北",
        "alias": "ZGQ"
    },
    {
        "label": "樟树东",
        "value": "樟树东",
        "alias": "ZOG"
    },
    {
        "label": "钟山",
        "value": "钟山",
        "alias": "ZSZ"
    },
    {
        "label": "昭山",
        "value": "昭山",
        "alias": "KWQ"
    },
    {
        "label": "钟山西",
        "value": "钟山西",
        "alias": "ZAZ"
    },
    {
        "label": "支提山",
        "value": "支提山",
        "alias": "ZIS"
    },
    {
        "label": "珠窝",
        "value": "珠窝",
        "alias": "ZOP"
    },
    {
        "label": "张维屯",
        "value": "张维屯",
        "alias": "ZWB"
    },
    {
        "label": "彰武",
        "value": "彰武",
        "alias": "ZWD"
    },
    {
        "label": "漳县",
        "value": "漳县",
        "alias": "ZXJ"
    },
    {
        "label": "资溪",
        "value": "资溪",
        "alias": "ZXS"
    },
    {
        "label": "棕溪",
        "value": "棕溪",
        "alias": "ZOY"
    },
    {
        "label": "镇西",
        "value": "镇西",
        "alias": "ZVT"
    },
    {
        "label": "钟祥",
        "value": "钟祥",
        "alias": "ZTN"
    },
    {
        "label": "张辛",
        "value": "张辛",
        "alias": "ZIP"
    },
    {
        "label": "正镶白旗",
        "value": "正镶白旗",
        "alias": "ZXC"
    },
    {
        "label": "遵义南",
        "value": "遵义南",
        "alias": "ZNE"
    },
    {
        "label": "竹园",
        "value": "竹园",
        "alias": "ZUM"
    },
    {
        "label": "招远",
        "value": "招远",
        "alias": "VDK"
    },
    {
        "label": "枣庄东",
        "value": "枣庄东",
        "alias": "ZNK"
    },
    {
        "label": "卓资东",
        "value": "卓资东",
        "alias": "ZDC"
    },
    {
        "label": "子洲",
        "value": "子洲",
        "alias": "ZZY"
    },
    {
        "label": "涿州",
        "value": "涿州",
        "alias": "ZXP"
    },
    {
        "label": "中寨",
        "value": "中寨",
        "alias": "ZZM"
    },
    {
        "label": "壮志",
        "value": "壮志",
        "alias": "ZUX"
    },
    {
        "label": "咋子",
        "value": "咋子",
        "alias": "ZAL"
    },
    {
        "label": "卓资山",
        "value": "卓资山",
        "alias": "ZZC"
    },
    {
        "label": "安溪东",
        "value": "安溪东",
        "alias": "ANS"
    },
    {
        "label": "安泽",
        "value": "安泽",
        "alias": "AEV"
    },
    {
        "label": "安州",
        "value": "安州",
        "alias": "AZE"
    },
    {
        "label": "博罗",
        "value": "博罗",
        "alias": "BOA"
    },
    {
        "label": "保山",
        "value": "保山",
        "alias": "BAM"
    },
    {
        "label": "北滩",
        "value": "北滩",
        "alias": "BEJ"
    },
    {
        "label": "白银南",
        "value": "白银南",
        "alias": "BVJ"
    },
    {
        "label": "茶卡",
        "value": "茶卡",
        "alias": "CVO"
    },
    {
        "label": "茌平",
        "value": "茌平",
        "alias": "CHK"
    },
    {
        "label": "德化",
        "value": "德化",
        "alias": "DKS"
    },
    {
        "label": "独山东",
        "value": "独山东",
        "alias": "DDE"
    },
    {
        "label": "大田北",
        "value": "大田北",
        "alias": "DTS"
    },
    {
        "label": "浮山",
        "value": "浮山",
        "alias": "FOV"
    },
    {
        "label": "富阳西",
        "value": "富阳西",
        "alias": "FUU"
    },
    {
        "label": "高川",
        "value": "高川",
        "alias": "GCE"
    },
    {
        "label": "革居",
        "value": "革居",
        "alias": "GEM"
    },
    {
        "label": "古路",
        "value": "古路",
        "alias": "GOE"
    },
    {
        "label": "花博山",
        "value": "花博山",
        "alias": "KBT"
    },
    {
        "label": "洪洞北",
        "value": "洪洞北",
        "alias": "HLV"
    },
    {
        "label": "惠东",
        "value": "惠东",
        "alias": "KDA"
    },
    {
        "label": "黄龙九寨",
        "value": "黄龙九寨",
        "alias": "HIE"
    },
    {
        "label": "黄胜关",
        "value": "黄胜关",
        "alias": "HGE"
    },
    {
        "label": "黄水",
        "value": "黄水",
        "alias": "SZE"
    },
    {
        "label": "海头",
        "value": "海头",
        "alias": "FTQ"
    },
    {
        "label": "惠州南",
        "value": "惠州南",
        "alias": "KNA"
    },
    {
        "label": "杭州西",
        "value": "杭州西",
        "alias": "HVU"
    },
    {
        "label": "江北机场",
        "value": "江北机场",
        "alias": "JCE"
    },
    {
        "label": "句容",
        "value": "句容",
        "alias": "JRU"
    },
    {
        "label": "金坛",
        "value": "金坛",
        "alias": "JTU"
    },
    {
        "label": "靖远北",
        "value": "靖远北",
        "alias": "JOJ"
    },
    {
        "label": "江阴",
        "value": "江阴",
        "alias": "KYH"
    },
    {
        "label": "绛帐",
        "value": "绛帐",
        "alias": "JZY"
    },
    {
        "label": "荔波",
        "value": "荔波",
        "alias": "UBE"
    },
    {
        "label": "罗浮山",
        "value": "罗浮山",
        "alias": "LVA"
    },
    {
        "label": "珞璜东",
        "value": "珞璜东",
        "alias": "LHE"
    },
    {
        "label": "临县",
        "value": "临县",
        "alias": "LUV"
    },
    {
        "label": "龙兴",
        "value": "龙兴",
        "alias": "LIE"
    },
    {
        "label": "茂县",
        "value": "茂县",
        "alias": "MXE"
    },
    {
        "label": "明溪",
        "value": "明溪",
        "alias": "MOS"
    },
    {
        "label": "绵竹南",
        "value": "绵竹南",
        "alias": "MNE"
    },
    {
        "label": "南安北",
        "value": "南安北",
        "alias": "NUS"
    },
    {
        "label": "南彭",
        "value": "南彭",
        "alias": "NAE"
    },
    {
        "label": "宁强",
        "value": "宁强",
        "alias": "NQY"
    },
    {
        "label": "南溪北",
        "value": "南溪北",
        "alias": "NOE"
    },
    {
        "label": "平川西",
        "value": "平川西",
        "alias": "PCJ"
    },
    {
        "label": "蒲县",
        "value": "蒲县",
        "alias": "PXV"
    },
    {
        "label": "秦王川",
        "value": "秦王川",
        "alias": "QWJ"
    },
    {
        "label": "三岔湖",
        "value": "三岔湖",
        "alias": "SCE"
    },
    {
        "label": "什邡西",
        "value": "什邡西",
        "alias": "SFE"
    },
    {
        "label": "商洛北",
        "value": "商洛北",
        "alias": "SBY"
    },
    {
        "label": "石楼县",
        "value": "石楼县",
        "alias": "STV"
    },
    {
        "label": "松潘",
        "value": "松潘",
        "alias": "SOE"
    },
    {
        "label": "水土",
        "value": "水土",
        "alias": "SUE"
    },
    {
        "label": "三星堆",
        "value": "三星堆",
        "alias": "SDE"
    },
    {
        "label": "三元西",
        "value": "三元西",
        "alias": "SRS"
    },
    {
        "label": "天府机场",
        "value": "天府机场",
        "alias": "TIE"
    },
    {
        "label": "统景",
        "value": "统景",
        "alias": "TOE"
    },
    {
        "label": "桐庐东",
        "value": "桐庐东",
        "alias": "TBU"
    },
    {
        "label": "铁门关",
        "value": "铁门关",
        "alias": "XAR"
    },
    {
        "label": "武进",
        "value": "武进",
        "alias": "WJU"
    },
    {
        "label": "威远",
        "value": "威远",
        "alias": "WYE"
    },
    {
        "label": "香格里拉",
        "value": "香格里拉",
        "alias": "EUM"
    },
    {
        "label": "隰县",
        "value": "隰县",
        "alias": "EAV"
    },
    {
        "label": "西阳村",
        "value": "西阳村",
        "alias": "XQF"
    },
    {
        "label": "小中甸",
        "value": "小中甸",
        "alias": "EDM"
    },
    {
        "label": "宜宾东",
        "value": "宜宾东",
        "alias": "EDE"
    },
    {
        "label": "宜宾",
        "value": "宜宾",
        "alias": "YKE"
    },
    {
        "label": "漾濞",
        "value": "漾濞",
        "alias": "AVM"
    },
    {
        "label": "永春",
        "value": "永春",
        "alias": "ACS"
    },
    {
        "label": "银花",
        "value": "银花",
        "alias": "YWE"
    },
    {
        "label": "迎龙",
        "value": "迎龙",
        "alias": "YVE"
    },
    {
        "label": "永平县",
        "value": "永平县",
        "alias": "APM"
    },
    {
        "label": "沿滩",
        "value": "沿滩",
        "alias": "YTE"
    },
    {
        "label": "越西",
        "value": "越西",
        "alias": "YIE"
    },
    {
        "label": "增城",
        "value": "增城",
        "alias": "ZCA"
    },
    {
        "label": "镇江关",
        "value": "镇江关",
        "alias": "ZEE"
    },
    {
        "label": "资阳西",
        "value": "资阳西",
        "alias": "ZIE"
    },
    {
        "label": "资中西",
        "value": "资中西",
        "alias": "ZZE"
    }
]

export default stationList;