// 设备数据 - 直接内嵌在JS文件中
const devicesData = {
    devices: [
    {
        id: 'r36s_v12_2023_08_18_1',
        title: 'R36S V12克隆',
        model: 'R36S V12克隆',
        category: '克隆机',
        description: '该设备有声音功放，使用eMCP(BGA221封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '8G内置存储',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/R36S_V12_2023_08_18_PANEL1/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/R36S_V12_2023_08_18_PANEL1/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/R36S_V12_2023_08_18_PANEL1/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/R36S_V12_2023_08_18_PANEL1/front.jpg'
        }
        ],
        dtbNames: ['r36s_v12_2023_08_18_1',"K36 Panel 1","K36 Panel 2"],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS K36', 'Rocknix WIP', 'Rocknix每夜构建', 'UnofficialOS'],
        systemDetails: {
            'Rocknix MOD': {
                status: '完全支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择R36S Pro\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择Clone->K36 Panel 1\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS K36': {
                status: '完全支持',
                description: 'ArkOS K36系统在此设备上运行稳定',
                tutorial: 'ArkOS K36使用教程：\n1. 下载ArkOS K36系统镜像\n2. 使用烧录工具写入TF卡\n3. 无需更改dtb插入设备即可启动',
                notes: ['右摇杆识别颠倒'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix WIP': {
                status: '测试支持',
                description: 'Rocknix WIP系统在此设备上运行稳定',
                tutorial: 'Rocknix WIP使用教程：\n1. 下载Rocknix WIP系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个stock文件夹\n4. 把该设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['该项目为WIP构建，如果需要设备摇杆 声音问题，请打开Rocknix dtbo网页生成工具重新生成dtbo放到rocknix分区的overlays文件夹内'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '测试支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix B系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. Rocknix dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '测试支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开unofficialos分区创建一个overlays文件夹\n4. UnofficialOS dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 打开boot.ini文件找到  load mmc 1:1 ${dtb_loadaddr} rk3326-batlexp-g350.dtb\n6. 请在这一行前面加上#，然后把下面一行#  load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb的#删掉\n7. 插入设备并启动',
                notes: ['遇到声音问题请修改load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb','为load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone-v2.dtb', '目前ota更新后需要重新修改boot.ini后续UnofficialOS更新可以在ES的菜单中调整'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'g80c_v1.0_2025_02_22',
        title: 'R36S G80C V1.0',
        model: 'R36S G80C V1.0',
        category: '克隆机',
        description: '该设备无声音功放，使用lpddr3(使用BGA178封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '无内置存储',
            '无声音功放',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/G80C_V1.0_2025_02_02/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/G80C_V1.0_2025_02_02/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/G80C_V1.0_2025_02_02/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/G80C_V1.0_2025_02_02/front.jpg'
        }
        ],
        dtbNames: ['K36 Panel 8', 'g80c_v1.0_2025_02_22'],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS K36', 'Rocknix WIP', 'Rocknix每夜构建', 'UnofficialOS'],

        systemDetails: {
            'Rocknix MOD': {
                status: '完全支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择R36S克隆 G80C\n4. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择Clone->K36 Panel 8\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS K36': {
                status: '完全支持',
                description: 'ArkOS K36系统在此设备上运行稳定',
                tutorial: 'ArkOS K36使用教程：\n1. 下载ArkOS K36系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel8复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['右摇杆识别颠倒'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix WIP': {
                status: '测试支持',
                description: 'Rocknix WIP系统在此设备上运行稳定',
                tutorial: 'Rocknix WIP使用教程：\n1. 下载Rocknix WIP系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个stock文件夹\n4. 把该设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['该项目为WIP构建，如果需要设备摇杆 声音问题，请打开Rocknix dtbo网页生成工具重新生成dtbo放到rocknix分区的overlays文件夹内'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '测试支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix B系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. Rocknix dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '测试支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开unofficialos分区创建一个overlays文件夹\n4. UnofficialOS dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 打开boot.ini文件找到  load mmc 1:1 ${dtb_loadaddr} rk3326-batlexp-g350.dtb\n6. 请在这一行前面加上#，然后把下面一行#  load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb的#删掉\n7. 插入设备并启动',
                notes: ['遇到声音问题请修改load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb','为load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone-v2.dtb', '目前ota更新后需要重新修改boot.ini后续UnofficialOS更新可以在ES的菜单中调整'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'r36s_v20_2025_05_18_970',
        title: 'R36S V20克隆',
        model: 'R36S V20克隆',
        category: '克隆机',
        description: '该设备无声音功放，使用lpddr3(使用BGA178封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '无内置存储',
            '无声音功放',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/R36S_V20_2025_05_18_970/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/R36S_V20_2025_05_18_970/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/R36S_V20_2025_05_18_970/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/R36S_V20_2025_05_18_970/front.jpg'
        }
        ],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS K36', 'Rocknix WIP', 'Rocknix每夜构建', 'UnofficialOS'],
        dtbNames: ['K36 Panel 4', 'r36s_v20_2025_05_18_970'],
        systemDetails: {
            'Rocknix MOD': {
                status: '完全支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择R36S克隆 V20主板\n4. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择Clone->K36 Panel 4\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS K36': {
                status: '完全支持',
                description: 'ArkOS K36系统在此设备上运行稳定',
                tutorial: 'ArkOS K36使用教程：\n1. 下载ArkOS K36系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel4复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['右摇杆识别颠倒'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix WIP': {
                status: '测试支持',
                description: 'Rocknix WIP系统在此设备上运行稳定',
                tutorial: 'Rocknix WIP使用教程：\n1. 下载Rocknix WIP系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个stock文件夹\n4. 把该设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['该项目为WIP构建，如果需要设备摇杆 声音问题，请打开Rocknix dtbo网页生成工具重新生成dtbo放到rocknix分区的overlays文件夹内'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '测试支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix B系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. Rocknix dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '测试支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开unofficialos分区创建一个overlays文件夹\n4. UnofficialOS dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 打开boot.ini文件找到  load mmc 1:1 ${dtb_loadaddr} rk3326-batlexp-g350.dtb\n6. 请在这一行前面加上#，然后把下面一行#  load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb的#删掉\n7. 插入设备并启动',
                notes: ['遇到声音问题请修改load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb','为load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone-v2.dtb', '目前ota更新后需要重新修改boot.ini后续UnofficialOS更新可以在ES的菜单中调整'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'y3506_v03_20241210',
        title: 'R36S 酱油机v03',
        model: 'R36S 酱油机v03',
        category: '酱油机',
        description: '该设备有声音功放，使用两个lpddr3(使用BGA96封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '无内置存储',
            '有声音功放',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/Y3506_V03_20241210/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/Y3506_V03_20241210/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/Y3506_V03_20241210/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/Y3506_V03_20241210/front.jpg'
        }
        ],
        systemInfos: ['Arkos4Clone', 'ArkOS R3XS'],
        dtbNames: ['y3506_v03_20241210'],
        systemDetails: {
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择GameConsole->GameConsole R36s Panel 5\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS R3XS': {
                status: '完全支持',
                description: 'ArkOS R3XS系统在此设备上运行稳定',
                tutorial: 'ArkOS R3XS使用教程：\n1. 下载ArkOS R3XS系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel5复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'r36s_v12_2023_08_18',
        title: 'R36S 原版机 P4屏幕',
        model: 'R36S 原版机 P4屏幕',
        category: '原版机',
        description: '该设备有声音功放，使用两个lpddr3(使用BGA96封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '无内置存储',
            '有声音功放',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/R36S_V12_2023_08_18/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/R36S_V12_2023_08_18/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/R36S_V12_2023_08_18/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/R36S_V12_2023_08_18/front.jpg'
        }
        ],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS R3XS', 'Rocknix', 'Rocknix每夜构建', 'UnofficialOS', 'Amberelec', "PAN4elec"],
        dtbNames: ['origin panel 4'],
        systemDetails: {
            'Rocknix MOD': {
                status: '完全支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择GameConsole R36s P4屏幕\n4. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择GameConsole->GameConsole R36s Panel 4\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS R3XS': {
                status: '完全支持',
                description: 'ArkOS R3XS系统在此设备上运行稳定',
                tutorial: 'ArkOS R3XS使用教程：\n1. 下载ArkOS R3XS系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel4复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix': {
                status: '完全支持',
                description: 'Rocknix系统在此设备上运行稳定',
                tutorial: 'Rocknix使用教程：\n1. 下载Rocknix 3326b系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. 把工具中panel4设备dtbo放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '完全支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix 3326b系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. 把工具中panel4设备dtbo放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '完全支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开UnofficialOS分区创建一个overlays文件夹\n4. 把工具中panel4设备dtbo放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Amberelec': {
                status: '完全支持',
                description: 'Amberelec系统在此设备上运行稳定',
                tutorial: 'Amberelec使用教程：\n1. 下载Amberelec 351MP系统镜像\n2. 使用烧录工具写入TF卡\n3. 下载AmberelecR36s的dtb\n4. 把工具中panel4设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'PAN4elec': {
                status: '完全支持',
                description: 'PAN4elec系统在此设备上运行稳定',
                tutorial: 'PAN4elec使用教程：\n1. 下载PAN4elec系统镜像\n2. 使用烧录工具写入TF卡\n3. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'r36s_v12_2023_08_18',
        title: 'R36S 原版机 P0屏幕',
        model: 'R36S 原版机 P0屏幕',
        category: '原版机',
        description: '该设备有声音功放，使用两个lpddr3(使用BGA96封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '无内置存储',
            '有声音功放',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/R36S_V12_2023_08_18/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/R36S_V12_2023_08_18/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/R36S_V12_2023_08_18/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/R36S_V12_2023_08_18/front.jpg'
        }
        ],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS R3XS', 'Rocknix', 'Rocknix每夜构建', 'UnofficialOS', 'Amberelec'],
        dtbNames: ['origin panel 0'],
        systemDetails: {
            'Rocknix MOD': {
                status: '完全支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择GameConsole R36s P1屏幕\n4. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择GameConsole->GameConsole R36s Panel 0\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS R3XS': {
                status: '完全支持',
                description: 'ArkOS R3XS系统在此设备上运行稳定',
                tutorial: 'ArkOS R3XS使用教程：\n1. 下载ArkOS R3XS系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel0复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix': {
                status: '完全支持',
                description: 'Rocknix系统在此设备上运行稳定',
                tutorial: 'Rocknix使用教程：\n1. 下载Rocknix 3326b系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. 把工具中panel0设备dtbo放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '完全支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix 3326b系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. 把工具中panel0设备dtbo放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '完全支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开UnofficialOS分区创建一个overlays文件夹\n4. 把工具中panel0设备dtbo放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Amberelec': {
                status: '完全支持',
                description: 'Amberelec系统在此设备上运行稳定',
                tutorial: 'Amberelec使用教程：\n1. 下载Amberelec 351MP系统镜像\n2. 使用烧录工具写入TF卡\n3. 下载AmberelecR36s的dtb\n4. 把工具中panel0设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
        }
    },
    {
        id: 'r36s_v12_2023_08_18_5',
        title: 'R36S V12克隆',
        model: 'R36S V12克隆',
        category: '克隆机',
        description: '该设备有声音功放，使用eMCP(BGA221封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '8G内置存储',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/R36S_V12_2023_08_18_PANEL5/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/R36S_V12_2023_08_18_PANEL5/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/R36S_V12_2023_08_18_PANEL5/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/R36S_V12_2023_08_18_PANEL5/front.jpg'
        }
        ],
        dtbNames: ['r36s_v12_2023_08_18_5','K36 Panel 5'],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS K36', 'Rocknix WIP', 'Rocknix每夜构建', 'UnofficialOS'],
        systemDetails: {
            'Rocknix MOD': {
                status: '完全支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择G80XF\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择Clone->K36 Panel 8\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS K36': {
                status: '完全支持',
                description: 'ArkOS K36系统在此设备上运行稳定',
                tutorial: 'ArkOS K36使用教程：\n1. 下载ArkOS K36系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel5复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['右摇杆识别颠倒'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix WIP': {
                status: '测试支持',
                description: 'Rocknix WIP系统在此设备上运行稳定',
                tutorial: 'Rocknix WIP使用教程：\n1. 下载Rocknix WIP系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个stock文件夹\n4. 把该设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['该项目为WIP构建，如果需要设备摇杆 声音问题，请打开Rocknix dtbo网页生成工具重新生成dtbo放到rocknix分区的overlays文件夹内'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '测试支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix B系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. Rocknix dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '测试支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开unofficialos分区创建一个overlays文件夹\n4. UnofficialOS dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 打开boot.ini文件找到  load mmc 1:1 ${dtb_loadaddr} rk3326-batlexp-g350.dtb\n6. 请在这一行前面加上#，然后把下面一行#  load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb的#删掉\n7. 插入设备并启动',
                notes: ['遇到声音问题请修改load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb','为load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone-v2.dtb', '目前ota更新后需要重新修改boot.ini后续UnofficialOS更新可以在ES的菜单中调整'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'g80ca_mb_v1.2_2025_04_22',
        title: 'R36S G80CAMB V1.2 20250422',
        model: 'R36S G80CAMB V1.2 20250422',
        category: '克隆机',
        description: '该设备无声音功放，使用lpddr3(使用BGA178封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '无内置存储',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/G80CA_MB_V1.2_2025_04_22/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/G80CA_MB_V1.2_2025_04_22/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/G80CA_MB_V1.2_2025_04_22/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/G80CA_MB_V1.2_2025_04_22/front.jpg'
        }
        ],
        dtbNames: ['g80ca_mb_v1.2_2025_04_22', 'K36 Panel 8', 'K36 Panel 9'],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS K36', 'Rocknix WIP', 'Rocknix每夜构建', 'UnofficialOS'],
        systemDetails: {
            'Rocknix MOD': {
                status: '测试支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择G80C\n5. 插入设备并启动',
                notes: ['请自行测试，我没有测试过'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择Clone->K36 Panel 8\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS K36': {
                status: '完全支持',
                description: 'ArkOS K36系统在此设备上运行稳定',
                tutorial: 'ArkOS K36使用教程：\n1. 下载ArkOS K36系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel8或者Panel9复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['右摇杆识别颠倒'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix WIP': {
                status: '测试支持',
                description: 'Rocknix WIP系统在此设备上运行稳定',
                tutorial: 'Rocknix WIP使用教程：\n1. 下载Rocknix WIP系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个stock文件夹\n4. 把该设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['该项目为WIP构建，如果需要设备摇杆 声音问题，请打开Rocknix dtbo网页生成工具重新生成dtbo放到rocknix分区的overlays文件夹内'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '测试支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix B系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. Rocknix dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '测试支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开unofficialos分区创建一个overlays文件夹\n4. UnofficialOS dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 打开boot.ini文件找到  load mmc 1:1 ${dtb_loadaddr} rk3326-batlexp-g350.dtb\n6. 请在这一行前面加上#，然后把下面一行#  load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb的#删掉\n7. 插入设备并启动',
                notes: ['遇到声音问题请修改load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb','为load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone-v2.dtb', '目前ota更新后需要重新修改boot.ini后续UnofficialOS更新可以在ES的菜单中调整'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'g80ca_mb_v1.2_2025_04_23',
        title: 'R36S G80CAMB V1.2 20250423',
        model: 'R36S G80CAMB V1.2 20250423',
        category: '克隆机',
        description: '该设备无声音功放，使用lpddr3(使用BGA178封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '无内置存储',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/G80CA_MB_V1.2_2025_04_23/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/G80CA_MB_V1.2_2025_04_23/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/G80CA_MB_V1.2_2025_04_23/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/G80CA_MB_V1.2_2025_04_23/front.jpg'
        }
        ],
        dtbNames: ['g80ca_mb_v1.2_2025_04_23', 'K36 Panel 8', 'K36 Panel 9'],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS K36', 'Rocknix WIP', 'Rocknix每夜构建', 'UnofficialOS'],
        systemDetails: {
            'Rocknix MOD': {
                status: '测试支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择G80C\n5. 插入设备并启动',
                notes: ['请自行测试，我没有测试过'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择Clone->K36 Panel 8\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS K36': {
                status: '完全支持',
                description: 'ArkOS K36系统在此设备上运行稳定',
                tutorial: 'ArkOS K36使用教程：\n1. 下载ArkOS K36系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot分区的的ScreenFiles->Panel8或者Panel9复制全部文件\n4. 粘贴到boot的根目录\n5. 插入设备即可启动',
                notes: ['右摇杆识别颠倒'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix WIP': {
                status: '测试支持',
                description: 'Rocknix WIP系统在此设备上运行稳定',
                tutorial: 'Rocknix WIP使用教程：\n1. 下载Rocknix WIP系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个stock文件夹\n4. 把该设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['该项目为WIP构建，如果需要设备摇杆 声音问题，请打开Rocknix dtbo网页生成工具重新生成dtbo放到rocknix分区的overlays文件夹内'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '测试支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix B系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. Rocknix dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '测试支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开unofficialos分区创建一个overlays文件夹\n4. UnofficialOS dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 打开boot.ini文件找到  load mmc 1:1 ${dtb_loadaddr} rk3326-batlexp-g350.dtb\n6. 请在这一行前面加上#，然后把下面一行#  load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb的#删掉\n7. 插入设备并启动',
                notes: ['遇到声音问题请修改load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb','为load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone-v2.dtb', '目前ota更新后需要重新修改boot.ini后续UnofficialOS更新可以在ES的菜单中调整'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    {
        id: 'r36s_v12_2023_08_18_1_2',
        title: 'R36S V12克隆',
        model: 'R36S V12克隆',
        category: '克隆机',
        description: '该设备有声音功放，使用eMCP(BGA221封装)',
        features: [
            'RK3326芯片',
            '1G运行内存',
            '8G内置存储',
        ],
        gallery: [{
            title: '主板丝印照片',
            path: '../images/R36S_V12_2023_08_18_PANEL1_2/mainboard.jpg'
        },
        {
            title: '主板照片',
            path: '../images/R36S_V12_2023_08_18_PANEL1_2/mainboard.jpg'
        },
        {
            title: '背部贴纸',
            path: '../images/R36S_V12_2023_08_18_PANEL1_2/back.jpg'
        },
        {
            title: '整体外观',
            path: '../images/R36S_V12_2023_08_18_PANEL1_2/front.jpg'
        }
        ],
        dtbNames: ['r36s_v12_2023_08_18_1_2', , 'K36 Panel 1', 'K36 Panel 2'],
        systemInfos: ['Rocknix MOD', 'Arkos4Clone', 'ArkOS K36', 'Rocknix WIP', 'Rocknix每夜构建', 'UnofficialOS'],
        systemDetails: {
            'Rocknix MOD': {
                status: '完全支持',
                description: 'Rocknix KK魔改版完美支持',
                tutorial: 'Rocknix KK魔改版建使用教程：\n1. 下载Rocknix 3326系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区运行dtb_selector.exe选择R36S Pro\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'Arkos4Clone': {
                status: '完全支持',
                description: 'Arkos4Clone基于该设备开发',
                tutorial: '使用教程：\n1. 下载Arkos4Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开boot运行dtb_selector.exe选择Clone->K36 Panel 1\n4. 插入设备并启动',
                notes: ['请仔细阅读下载注意事项'],
                pageLink: '../pages/downloads.html'
            },
            'ArkOS K36': {
                status: '完全支持',
                description: 'ArkOS K36系统在此设备上运行稳定',
                tutorial: 'ArkOS K36使用教程：\n1. 下载ArkOS K36系统镜像\n2. 使用烧录工具写入TF卡\n3. 无需更改dtb插入设备即可启动',
                notes: ['右摇杆识别颠倒'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix WIP': {
                status: '测试支持',
                description: 'Rocknix WIP系统在此设备上运行稳定',
                tutorial: 'Rocknix WIP使用教程：\n1. 下载Rocknix WIP系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个stock文件夹\n4. 把该设备dtb放到该文件夹内\n5. 插入设备并启动',
                notes: ['该项目为WIP构建，如果需要设备摇杆 声音问题，请打开Rocknix dtbo网页生成工具重新生成dtbo放到rocknix分区的overlays文件夹内'],
                pageLink: '../pages/downloads.html'
            },
            'Rocknix每夜构建': {
                status: '测试支持',
                description: 'Rocknix每夜构建系统在此设备上运行稳定',
                tutorial: 'Rocknix每夜构建使用教程：\n1. 下载Rocknix B系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开rocknix分区创建一个overlays文件夹\n4. Rocknix dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 插入设备并启动',
                notes: ['请自行测试'],
                pageLink: '../pages/downloads.html'
            },
            'UnofficialOS': {
                status: '测试支持',
                description: 'UnofficialOS系统在此设备上运行稳定',
                tutorial: 'UnofficialOS使用教程：\n1. 下载UnofficialOS Clone系统镜像\n2. 使用烧录工具写入TF卡\n3. 打开unofficialos分区创建一个overlays文件夹\n4. UnofficialOS dtbo网页生成工具重新生成dtbo并放到文件夹内\n5. 打开boot.ini文件找到  load mmc 1:1 ${dtb_loadaddr} rk3326-batlexp-g350.dtb\n6. 请在这一行前面加上#，然后把下面一行#  load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb的#删掉\n7. 插入设备并启动',
                notes: ['遇到声音问题请修改load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone.dtb','为load mmc 1:1 ${dtb_loadaddr} rk3326-k36-clone-v2.dtb', '目前ota更新后需要重新修改boot.ini后续UnofficialOS更新可以在ES的菜单中调整'],
                pageLink: '../pages/downloads.html'
            }
        }
    },
    ]
};
// DTB识别数据库 - 只使用ArkOSK36
const DTB_DATABASE = [{
    name: "r36s_v12_2023_08_18_1",
    md5: "cf7b8a3b7c3d5949213f2f5d6b4831b5"
},
{
    name: "r36s_v12_2023_08_18_1_2",
    md5: "6de588c4eda969c2487402a4823ca60a"
},
{
    name: "g80c_v1.0_2025_02_22",
    md5: "6289cd8bd9641b89a2d78f736bd4b612"
},
{
    name: "r36s_v20_2025_05_18_970",
    md5: "059c64824dbf92ed528880dec22a72ac"
},
{
    name: "r36s_v12_2023_08_18_5",
    md5: "bd1a9f3182d6d681e4e83eb3a85b91eb"
},
{
    name: "g80ca_mb_v1.2_2025_04_22",
    md5: "bd2e29ab7c1fdf9a40066821b6f61549"
},
{
    name: "g80ca_mb_v1.2_2025_04_23",
    md5: "eaa316c532c147354ec5cb69dd4409b5"
},
{
    name: "y3506_v03_20241210",
    md5: "8467c8e69a8b49806c7e32d4b1e7b851",
    panelInitSequence: "39 00 04 b9 f1 12 83 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 91 0a 00 00 02 4f d1 00 00 37 15 00 02 b8 25 39 00 04 bf 02 11 00 39 00 0b b3 0c 10 0a 50 03 ff 00 00 00 00 39 00 0a c0 73 73 50 50 00 00 08 70 00 15 00 02 bc 46 15 00 02 cc 0b 15 00 02 b4 80 39 00 04 b2 00 13 f0 39 00 0f e3 07 07 0b 0b 03 0b 00 00 00 00 ff 00 c0 10 39 00 0d c1 53 00 1e 1e 77 e1 cc dd 67 77 33 33 39 00 03 b5 10 10 39 00 03 b6 6c 7c 39 00 40 e9 08 00 0e 00 00 b0 b1 11 31 23 28 10 b0 b1 27 08 00 04 02 00 00 00 00 04 02 00 00 00 88 88 ba 60 24 08 88 88 88 88 88 88 88 ba 71 35 18 88 88 88 88 88 00 00 00 01 00 00 00 00 00 00 00 00 00 39 00 3e ea 97 0a 82 02 13 07 00 00 00 00 00 00 80 88 ba 17 53 88 88 88 88 88 88 81 88 ba 06 42 88 88 88 88 88 88 23 10 00 02 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 23 e0 00 07 0b 27 2d 3f 3b 37 05 0a 0b 0f 11 0f 12 12 18 00 07 0b 27 2d 3f 3b 37 05 0a 0b 0f 11 0f 12 12 18 05 96 01 11 05 32 01 29",
    resetGpios: "&gpio3 RK_PC0 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio1 RK_PC2 GPIO_ACTIVE_LOW",
    useExtAmplifier: true
},
{
    name: "origin panel 4",
    md5: ["42a3021377abadd36375e62a7d5a2e40", "9f41df45acac67bff88ec52306efc225", "4863e7544738df62eaae4a1bec031fd9"],
    panelInitSequence: "15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 01 15 00 02 e3 00 15 00 02 25 10 15 00 02 28 6f 15 00 02 29 01 15 00 02 2a df 15 00 02 2c 22 15 00 02 c3 0f 15 00 02 37 9c 15 00 02 38 a7 15 00 02 39 41 15 00 02 80 20 15 00 02 91 67 15 00 02 92 67 15 00 02 a0 55 15 00 02 a1 50 15 00 02 a3 58 15 00 02 a4 9c 15 00 02 a7 02 15 00 02 a8 01 15 00 02 a9 21 15 00 02 aa fc 15 00 02 ab 28 15 00 02 ac 06 15 00 02 ad 06 15 00 02 ae 06 15 00 02 af 03 15 00 02 b0 08 15 00 02 b1 26 15 00 02 b2 28 15 00 02 b3 28 15 00 02 b4 03 15 00 02 b5 08 15 00 02 b6 26 15 00 02 b7 08 15 00 02 b8 26 15 00 02 2c 22 15 00 02 5c 40 15 00 02 c0 00 15 00 02 c1 00 15 00 02 c2 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 b0 02 15 00 02 d0 02 15 00 02 b1 0f 15 00 02 d1 10 15 00 02 b2 11 15 00 02 d2 12 15 00 02 b3 32 15 00 02 d3 33 15 00 02 b4 36 15 00 02 d4 36 15 00 02 b5 3c 15 00 02 d5 3c 15 00 02 b6 20 15 00 02 d6 20 15 00 02 b7 3e 15 00 02 d7 3e 15 00 02 b8 0e 15 00 02 d8 0d 15 00 02 b9 05 15 00 02 d9 05 15 00 02 ba 11 15 00 02 da 12 15 00 02 bb 11 15 00 02 db 11 15 00 02 bc 13 15 00 02 dc 14 15 00 02 bd 14 15 00 02 dd 14 15 00 02 be 16 15 00 02 de 18 15 00 02 bf 0e 15 00 02 df 0f 15 00 02 c0 17 15 00 02 e0 17 15 00 02 c1 07 15 00 02 e1 08 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 03 15 00 02 08 8a 15 00 02 09 8b 15 00 02 30 00 15 00 02 31 00 15 00 02 32 00 15 00 02 33 00 15 00 02 34 61 15 00 02 35 d4 15 00 02 36 24 15 00 02 37 03 15 00 02 40 86 15 00 02 41 87 15 00 02 42 84 15 00 02 43 85 15 00 02 44 11 15 00 02 45 de 15 00 02 46 dd 15 00 02 47 11 15 00 02 48 e0 15 00 02 49 df 15 00 02 50 82 15 00 02 51 83 15 00 02 52 80 15 00 02 53 81 15 00 02 54 11 15 00 02 55 e2 15 00 02 56 e1 15 00 02 57 11 15 00 02 58 e4 15 00 02 59 e3 15 00 02 82 0f 15 00 02 83 0f 15 00 02 84 00 15 00 02 85 0f 15 00 02 86 0f 15 00 02 87 0e 15 00 02 88 0e 15 00 02 89 06 15 00 02 8a 06 15 00 02 8b 07 15 00 02 8c 07 15 00 02 8d 04 15 00 02 8e 04 15 00 02 8f 05 15 00 02 90 05 15 00 02 98 0f 15 00 02 99 0f 15 00 02 9a 00 15 00 02 9b 0f 15 00 02 9c 0f 15 00 02 9d 0e 15 00 02 9e 0e 15 00 02 9f 06 15 00 02 a0 06 15 00 02 a1 07 15 00 02 a2 07 15 00 02 a3 04 15 00 02 a4 04 15 00 02 a5 05 15 00 02 a6 05 15 00 02 e0 02 15 00 02 e1 52 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 00 15 00 02 36 02 15 00 02 11 00 15 00 02 29 00 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PC0 GPIO_ACTIVE_LOW",
    enableGpios: null,
    useExtAmplifier: false
},
{
    name: "origin panel 3",
    md5: "b3bf18765a4453b8eaeaf60362b79b3d",
    panelInitSequence: "15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 01 15 00 02 e3 00 15 00 02 04 00 15 00 02 05 03 15 00 02 24 12 15 00 02 25 1e 15 00 02 26 6f 15 00 02 27 52 15 00 02 28 67 15 00 02 29 01 15 00 02 2a df 15 00 02 37 9c 15 00 02 38 a7 15 00 02 39 53 15 00 02 44 00 15 00 02 49 3c 15 00 02 59 fe 15 00 02 5c 00 15 00 02 80 20 15 00 02 91 77 15 00 02 92 77 15 00 02 a0 55 15 00 02 a1 50 15 00 02 a4 9c 15 00 02 a7 02 15 00 02 a8 01 15 00 02 a9 21 15 00 02 aa fc 15 00 02 ab 28 15 00 02 ac 06 15 00 02 ad 06 15 00 02 ae 06 15 00 02 af 03 15 00 02 b0 08 15 00 02 b1 26 15 00 02 b2 28 15 00 02 b3 28 15 00 02 b4 33 15 00 02 b5 08 15 00 02 b6 26 15 00 02 b7 08 15 00 02 b8 26 15 00 02 c0 00 15 00 02 c1 00 15 00 02 c2 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 b0 0b 15 00 02 b1 16 15 00 02 b2 17 15 00 02 b3 2c 15 00 02 b4 32 15 00 02 b5 3b 15 00 02 b6 29 15 00 02 b7 40 15 00 02 b8 0d 15 00 02 b9 05 15 00 02 ba 12 15 00 02 bb 10 15 00 02 bc 12 15 00 02 bd 15 15 00 02 be 19 15 00 02 bf 0e 15 00 02 c0 16 15 00 02 c1 0a 15 00 02 d0 0c 15 00 02 d1 17 15 00 02 d2 14 15 00 02 d3 2e 15 00 02 d4 32 15 00 02 d5 3c 15 00 02 d6 22 15 00 02 d7 3d 15 00 02 d8 0d 15 00 02 d9 07 15 00 02 da 13 15 00 02 db 13 15 00 02 dc 11 15 00 02 dd 15 15 00 02 de 19 15 00 02 df 10 15 00 02 e0 17 15 00 02 e1 0a 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 03 15 00 02 00 2a 15 00 02 01 2a 15 00 02 02 2a 15 00 02 03 2a 15 00 02 04 61 15 00 02 05 80 15 00 02 06 c7 15 00 02 07 01 15 00 02 08 82 15 00 02 09 83 15 00 02 30 2a 15 00 02 31 2a 15 00 02 32 2a 15 00 02 33 2a 15 00 02 34 a1 15 00 02 35 c5 15 00 02 36 80 15 00 02 37 23 15 00 02 40 82 15 00 02 41 83 15 00 02 42 80 15 00 02 43 81 15 00 02 44 55 15 00 02 45 e6 15 00 02 46 e5 15 00 02 47 55 15 00 02 48 e8 15 00 02 49 e7 15 00 02 50 02 15 00 02 51 01 15 00 02 52 04 15 00 02 53 03 15 00 02 54 55 15 00 02 55 ea 15 00 02 56 e9 15 00 02 57 55 15 00 02 58 ec 15 00 02 59 eb 15 00 02 7e 02 15 00 02 7f 80 15 00 02 e0 5a 15 00 02 b1 00 15 00 02 b4 0e 15 00 02 b5 0f 15 00 02 b6 04 15 00 02 b7 07 15 00 02 b8 06 15 00 02 b9 05 15 00 02 ba 0f 15 00 02 c7 00 15 00 02 ca 0e 15 00 02 cb 0f 15 00 02 cc 04 15 00 02 cd 07 15 00 02 ce 06 15 00 02 cf 05 15 00 02 d0 0f 15 00 02 81 0f 15 00 02 84 0e 15 00 02 85 0f 15 00 02 86 07 15 00 02 87 04 15 00 02 88 05 15 00 02 89 06 15 00 02 8a 00 15 00 02 97 0f 15 00 02 9a 0e 15 00 02 9b 0f 15 00 02 9c 07 15 00 02 9d 04 15 00 02 9e 05 15 00 02 9f 06 15 00 02 a0 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 01 01 15 00 02 02 da 15 00 02 03 ba 15 00 02 04 a8 15 00 02 05 9a 15 00 02 06 70 15 00 02 07 ff 15 00 02 08 91 15 00 02 09 90 15 00 02 0a ff 15 00 02 0b 8f 15 00 02 0c 60 15 00 02 0d 58 15 00 02 0e 48 15 00 02 0f 38 15 00 02 10 2b 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 00 15 00 02 36 02 15 00 02 3a 70 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PC0 GPIO_ACTIVE_LOW",
    enableGpios: null,
    useExtAmplifier: false
},
{
    name: "origin panel 2",
    md5: "a5d6f30491abac29423d0c1334ad88d3",
    panelInitSequence: "15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 01 15 00 02 e3 00 15 00 02 40 0a 15 00 02 03 40 15 00 02 04 00 15 00 02 05 03 15 00 02 24 12 15 00 02 25 1e 15 00 02 26 6f 15 00 02 27 52 15 00 02 28 67 15 00 02 29 01 15 00 02 2a df 15 00 02 37 9c 15 00 02 38 a7 15 00 02 39 53 15 00 02 44 00 15 00 02 49 3c 15 00 02 59 fe 15 00 02 5c 00 15 00 02 80 20 15 00 02 91 77 15 00 02 92 77 15 00 02 a0 55 15 00 02 a1 50 15 00 02 a4 9c 15 00 02 a7 02 15 00 02 a8 01 15 00 02 a9 21 15 00 02 aa fc 15 00 02 ab 28 15 00 02 ac 06 15 00 02 ad 06 15 00 02 ae 06 15 00 02 af 03 15 00 02 b0 08 15 00 02 b1 26 15 00 02 b2 28 15 00 02 b3 28 15 00 02 b4 33 15 00 02 b5 08 15 00 02 b6 26 15 00 02 b7 08 15 00 02 b8 26 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 b0 0b 15 00 02 b1 16 15 00 02 b2 17 15 00 02 b3 2c 15 00 02 b4 32 15 00 02 b5 3b 15 00 02 b6 29 15 00 02 b7 40 15 00 02 b8 0d 15 00 02 b9 05 15 00 02 ba 12 15 00 02 bb 10 15 00 02 bc 12 15 00 02 bd 15 15 00 02 be 19 15 00 02 bf 0e 15 00 02 c0 16 15 00 02 c1 0a 15 00 02 d0 0c 15 00 02 d1 17 15 00 02 d2 14 15 00 02 d3 2e 15 00 02 d4 32 15 00 02 d5 3c 15 00 02 d6 22 15 00 02 d7 3d 15 00 02 d8 0d 15 00 02 d9 07 15 00 02 da 13 15 00 02 db 13 15 00 02 dc 11 15 00 02 dd 15 15 00 02 de 19 15 00 02 df 10 15 00 02 e0 17 15 00 02 e1 0a 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 03 15 00 02 00 2a 15 00 02 01 2a 15 00 02 02 2a 15 00 02 03 2a 15 00 02 04 61 15 00 02 05 80 15 00 02 06 c7 15 00 02 07 01 15 00 02 08 82 15 00 02 09 83 15 00 02 30 2a 15 00 02 31 2a 15 00 02 32 2a 15 00 02 33 2a 15 00 02 34 a1 15 00 02 35 c5 15 00 02 36 80 15 00 02 37 23 15 00 02 40 82 15 00 02 41 83 15 00 02 42 80 15 00 02 43 81 15 00 02 44 55 15 00 02 45 e6 15 00 02 46 e5 15 00 02 47 55 15 00 02 48 e8 15 00 02 49 e7 15 00 02 50 02 15 00 02 51 01 15 00 02 52 04 15 00 02 53 03 15 00 02 54 55 15 00 02 55 ea 15 00 02 56 e9 15 00 02 57 55 15 00 02 58 ec 15 00 02 59 eb 15 00 02 7e 02 15 00 02 7f 80 15 00 02 e0 5a 15 00 02 b1 00 15 00 02 b4 0e 15 00 02 b5 0f 15 00 02 b6 04 15 00 02 b7 07 15 00 02 b8 06 15 00 02 b9 05 15 00 02 ba 0f 15 00 02 c7 00 15 00 02 ca 0e 15 00 02 cb 0f 15 00 02 cc 04 15 00 02 cd 07 15 00 02 ce 06 15 00 02 cf 05 15 00 02 d0 0f 15 00 02 81 0f 15 00 02 84 0e 15 00 02 85 0f 15 00 02 86 07 15 00 02 87 04 15 00 02 88 05 15 00 02 89 06 15 00 02 8a 00 15 00 02 97 0f 15 00 02 9a 0e 15 00 02 9b 0f 15 00 02 9c 07 15 00 02 9d 04 15 00 02 9e 05 15 00 02 9f 06 15 00 02 a0 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 01 01 15 00 02 02 da 15 00 02 03 ba 15 00 02 04 a8 15 00 02 05 9a 15 00 02 06 70 15 00 02 07 ff 15 00 02 08 91 15 00 02 09 90 15 00 02 0a ff 15 00 02 0b 8f 15 00 02 0c 60 15 00 02 0d 58 15 00 02 0e 48 15 00 02 0f 38 15 00 02 10 2b 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 00 15 00 02 36 02 15 00 02 3a 70 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PC0 GPIO_ACTIVE_LOW",
    enableGpios: null,
    useExtAmplifier: false
},
{
    name: "origin panel 1",
    md5: "a3d55922b4ccce3e2b23c57cefdd9ba7",
    panelInitSequence: "39 00 03 e0 ab ba 39 00 03 e1 ba ab 39 00 05 b1 10 01 47 ff 39 00 07 b2 0c 08 04 50 50 14 39 00 04 b3 56 12 e0 39 00 04 b4 33 30 04 39 00 08 b6 b0 00 00 10 00 10 00 39 00 06 b8 05 12 29 49 48 39 00 27 b9 7f 63 52 45 42 34 39 24 3e 3d 3c 59 46 4d 3e 3d 30 22 00 7f 63 52 45 42 34 39 24 3e 3d 3c 59 46 4d 3e 3d 30 22 00 39 00 11 c0 32 10 12 34 22 22 22 22 90 04 90 04 0f 00 00 c1 39 00 0b c1 12 9f 8e 89 90 04 90 04 54 40 39 00 0d c2 77 09 08 89 08 11 22 33 44 87 18 00 39 00 17 c3 88 4a 24 24 1e 1f 12 0c 0e 10 04 06 24 24 02 02 02 02 02 02 02 02 39 00 17 c4 09 0b 24 24 1e 1f 13 0d 0f 11 05 07 24 24 02 02 02 02 02 02 02 02 39 00 03 c6 46 55 39 00 07 c8 12 00 31 42 34 16 39 00 03 ca 18 43 39 00 09 cd 0e 64 64 2c 16 6b 06 b3 39 00 05 d2 e3 2b 38 08 39 00 0c d4 00 01 00 0e 04 44 08 10 00 00 00 39 00 09 e6 80 09 ff ff ff ff ff ff 39 00 06 f0 12 03 20 00 ff 15 00 02 f3 03 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PC0 GPIO_ACTIVE_LOW",
    enableGpios: null,
    useExtAmplifier: false
},
{
    name: "origin panel 0",
    md5: "bfc6068ef7d80575bef04b36ef881619",
    panelInitSequence: "39 00 04 b9 f1 12 83 39 00 06 b1 00 00 00 da 80 39 00 04 b2 00 13 70 39 00 0b b3 10 10 28 28 03 ff 00 00 00 00 15 00 02 b4 80 15 00 03 b5 0a 0a 15 00 03 b6 7f 7f 39 00 05 b8 26 62 f0 63 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 90 0a 00 00 01 4f 01 00 00 37 15 00 02 bc 47 39 00 04 bf 02 11 00 39 00 0a c0 73 73 50 50 00 00 12 50 00 39 00 0d c1 53 c0 32 32 77 e1 dd dd 77 77 33 33 39 00 07 c6 82 00 bf ff 00 ff 39 00 07 c7 b8 00 0a 00 00 00 39 00 05 c8 10 40 1e 02 15 00 02 cc 0b 39 00 23 e0 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 39 00 0f e3 07 07 0b 0b 0b 0b 00 00 00 00 ff 00 c0 10 39 00 40 e9 c8 10 02 00 00 b0 b1 11 31 23 28 80 b0 b1 27 08 00 04 02 00 00 00 00 04 02 00 00 00 88 88 ba 60 24 08 88 88 88 88 88 88 88 ba 71 35 18 88 88 88 88 88 00 00 00 01 00 00 00 00 00 00 00 00 00 39 00 3e ea 97 0a 82 02 03 07 00 00 00 00 00 00 81 88 ba 17 53 88 88 88 88 88 88 80 88 ba 06 42 88 88 88 88 88 88 23 00 00 02 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 04 ef ff ff 01 05 c8 01 11 05 32 01 29",
    resetGpios: "&gpio3 RK_PC0 GPIO_ACTIVE_LOW",
    enableGpios: null,
    useExtAmplifier: false
},
{
    name: "K36 Panel 1",
    md5: "df50e4c1847859cc94f7e6d3e4951e15",
    panelInitSequence: "39 00 04 b9 f1 12 83 39 00 06 b1 00 00 00 da 80 39 00 04 b2 00 13 70 39 00 0b b3 10 10 28 28 03 ff 00 00 00 00 15 00 02 b4 80 15 00 03 b5 0a 0a 15 00 03 b6 82 82 39 00 05 b8 26 62 f0 63 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 90 0a 00 00 01 4f 01 00 00 37 15 00 02 bc 47 39 00 04 bf 02 11 00 39 00 0a c0 73 73 50 50 00 00 12 50 00 39 00 0d c1 53 00 32 32 77 d1 cc cc 77 77 33 33 39 00 07 c6 82 00 bf ff 00 ff 39 00 07 c7 b8 00 0a 00 00 00 39 00 05 c8 10 40 1e 02 15 00 02 cc 0b 39 00 23 e0 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 39 00 0f e3 07 07 0b 0b 0b 0b 00 00 00 00 ff 00 c0 10 39 00 40 e9 c8 10 02 00 00 b0 b1 11 31 23 28 80 b0 b1 27 08 00 04 02 00 00 00 00 04 02 00 00 00 88 88 ba 60 24 08 88 88 88 88 88 88 88 ba 71 35 18 88 88 88 88 88 00 00 00 01 00 00 00 00 00 00 00 00 00 39 00 3e ea 97 0a 82 02 03 07 00 00 00 00 00 00 81 88 ba 17 53 88 88 88 88 88 88 80 88 ba 06 42 88 88 88 88 88 88 23 00 00 02 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 04 ef ff ff 01 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PB7 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio0 RK_PB5 GPIO_ACTIVE_HIGH",
    useExtAmplifier: false
},
{
    name: "K36 Panel 2",
    md5: "c063209abc99cb31638daf66952af4db",
    panelInitSequence: "39 00 04 b9 f1 12 83 39 00 06 b1 00 00 00 da 80 39 00 04 b2 00 13 70 39 00 0b b3 10 10 28 28 03 ff 00 00 00 00 15 00 02 b4 80 15 00 03 b5 0a 0a 15 00 03 b6 82 82 39 00 05 b8 26 62 f0 63 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 90 0a 00 00 01 4f 01 00 00 37 15 00 02 bc 47 39 00 04 bf 02 11 00 39 00 0a c0 73 73 50 50 00 00 12 50 00 39 00 0d c1 53 00 32 32 77 d1 cc cc 77 77 33 33 39 00 07 c6 82 00 bf ff 00 ff 39 00 07 c7 b8 00 0a 00 00 00 39 00 05 c8 10 40 1e 02 15 00 02 cc 0b 39 00 23 e0 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 39 00 0f e3 07 07 0b 0b 0b 0b 00 00 00 00 ff 00 c0 10 39 00 40 e9 c8 10 02 00 00 b0 b1 11 31 23 28 80 b0 b1 27 08 00 04 02 00 00 00 00 04 02 00 00 00 88 88 ba 60 24 08 88 88 88 88 88 88 88 ba 71 35 18 88 88 88 88 88 00 00 00 01 00 00 00 00 00 00 00 00 00 39 00 3e ea 97 0a 82 02 03 07 00 00 00 00 00 00 81 88 ba 17 53 88 88 88 88 88 88 80 88 ba 06 42 88 88 88 88 88 88 23 00 00 02 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 04 ef ff ff 01 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PB7 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio0 RK_PB5 GPIO_ACTIVE_HIGH",
    useExtAmplifier: false
},
{
    name: "K36 Panel 3",
    md5: "cb1e59976247acff3308b185909d441b",
    panelInitSequence: "15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 01 15 00 02 e3 00 15 00 02 25 10 15 00 02 28 6f 15 00 02 29 01 15 00 02 2a df 15 00 02 2c 22 15 00 02 c3 0f 15 00 02 37 9c 15 00 02 38 a7 15 00 02 39 41 15 00 02 80 20 15 00 02 91 67 15 00 02 92 67 15 00 02 a0 55 15 00 02 a1 50 15 00 02 a3 58 15 00 02 a4 9c 15 00 02 a7 02 15 00 02 a8 01 15 00 02 a9 21 15 00 02 aa fc 15 00 02 ab 28 15 00 02 ac 06 15 00 02 ad 06 15 00 02 ae 06 15 00 02 af 03 15 00 02 b0 08 15 00 02 b1 26 15 00 02 b2 28 15 00 02 b3 28 15 00 02 b4 03 15 00 02 b5 08 15 00 02 b6 26 15 00 02 b7 08 15 00 02 b8 26 15 00 02 c0 00 15 00 02 c1 00 15 00 02 c2 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 b0 02 15 00 02 d0 02 15 00 02 b1 0f 15 00 02 d1 10 15 00 02 b2 11 15 00 02 d2 12 15 00 02 b3 32 15 00 02 d3 33 15 00 02 b4 36 15 00 02 d4 36 15 00 02 b5 3c 15 00 02 d5 3c 15 00 02 b6 20 15 00 02 d6 20 15 00 02 b7 3e 15 00 02 d7 3e 15 00 02 b8 0e 15 00 02 d8 0d 15 00 02 b9 05 15 00 02 d9 05 15 00 02 ba 11 15 00 02 da 12 15 00 02 bb 11 15 00 02 db 11 15 00 02 bc 13 15 00 02 dc 14 15 00 02 bd 14 15 00 02 dd 14 15 00 02 be 16 15 00 02 de 18 15 00 02 bf 0e 15 00 02 df 0f 15 00 02 c0 17 15 00 02 e0 17 15 00 02 c1 07 15 00 02 e1 08 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 03 15 00 02 08 8a 15 00 02 09 8b 15 00 02 30 00 15 00 02 31 00 15 00 02 32 00 15 00 02 33 00 15 00 02 34 61 15 00 02 35 d4 15 00 02 36 24 15 00 02 37 03 15 00 02 40 86 15 00 02 41 87 15 00 02 42 84 15 00 02 43 85 15 00 02 44 11 15 00 02 45 de 15 00 02 46 dd 15 00 02 47 11 15 00 02 48 e0 15 00 02 49 df 15 00 02 50 82 15 00 02 51 83 15 00 02 52 80 15 00 02 53 81 15 00 02 54 11 15 00 02 55 e2 15 00 02 56 e1 15 00 02 57 11 15 00 02 58 e4 15 00 02 59 e3 15 00 02 82 0f 15 00 02 83 0f 15 00 02 84 00 15 00 02 85 0f 15 00 02 86 0f 15 00 02 87 0e 15 00 02 88 0e 15 00 02 89 06 15 00 02 8a 06 15 00 02 8b 07 15 00 02 8c 07 15 00 02 8d 04 15 00 02 8e 04 15 00 02 8f 05 15 00 02 90 05 15 00 02 98 0f 15 00 02 99 0f 15 00 02 9a 00 15 00 02 9b 0f 15 00 02 9c 0f 15 00 02 9d 0e 15 00 02 9e 0e 15 00 02 9f 06 15 00 02 a0 06 15 00 02 a1 07 15 00 02 a2 07 15 00 02 a3 04 15 00 02 a4 04 15 00 02 a5 05 15 00 02 a6 05 15 00 02 e0 02 15 00 02 e1 52 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 00 15 00 02 36 02 05 c8 01 11 05 64 01 29",
    resetGpios: "&gpio3 RK_PB7 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio0 RK_PB5 GPIO_ACTIVE_HIGH",
    useExtAmplifier: true
},
{
    name: "K36 Panel 4",
    md5: "9153251523a603af76c4cbe0825a9580",
    panelInitSequence: "15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 01 15 00 02 e3 00 15 00 02 25 10 15 00 02 28 6f 15 00 02 29 01 15 00 02 2a df 15 00 02 2c 22 15 00 02 c3 0f 15 00 02 37 9c 15 00 02 38 a7 15 00 02 39 41 15 00 02 80 20 15 00 02 91 67 15 00 02 92 67 15 00 02 a0 55 15 00 02 a1 50 15 00 02 a3 58 15 00 02 a4 9c 15 00 02 a7 02 15 00 02 a8 01 15 00 02 a9 21 15 00 02 aa fc 15 00 02 ab 28 15 00 02 ac 06 15 00 02 ad 06 15 00 02 ae 06 15 00 02 af 03 15 00 02 b0 08 15 00 02 b1 26 15 00 02 b2 28 15 00 02 b3 28 15 00 02 b4 03 15 00 02 b5 08 15 00 02 b6 26 15 00 02 b7 08 15 00 02 b8 26 15 00 02 c0 00 15 00 02 c1 00 15 00 02 c2 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 b0 02 15 00 02 d0 02 15 00 02 b1 0f 15 00 02 d1 10 15 00 02 b2 11 15 00 02 d2 12 15 00 02 b3 32 15 00 02 d3 33 15 00 02 b4 36 15 00 02 d4 36 15 00 02 b5 3c 15 00 02 d5 3c 15 00 02 b6 20 15 00 02 d6 20 15 00 02 b7 3e 15 00 02 d7 3e 15 00 02 b8 0e 15 00 02 d8 0d 15 00 02 b9 05 15 00 02 d9 05 15 00 02 ba 11 15 00 02 da 12 15 00 02 bb 11 15 00 02 db 11 15 00 02 bc 13 15 00 02 dc 14 15 00 02 bd 14 15 00 02 dd 14 15 00 02 be 16 15 00 02 de 18 15 00 02 bf 0e 15 00 02 df 0f 15 00 02 c0 17 15 00 02 e0 17 15 00 02 c1 07 15 00 02 e1 08 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 03 15 00 02 08 8a 15 00 02 09 8b 15 00 02 30 00 15 00 02 31 00 15 00 02 32 00 15 00 02 33 00 15 00 02 34 61 15 00 02 35 d4 15 00 02 36 24 15 00 02 37 03 15 00 02 40 86 15 00 02 41 87 15 00 02 42 84 15 00 02 43 85 15 00 02 44 11 15 00 02 45 de 15 00 02 46 dd 15 00 02 47 11 15 00 02 48 e0 15 00 02 49 df 15 00 02 50 82 15 00 02 51 83 15 00 02 52 80 15 00 02 53 81 15 00 02 54 11 15 00 02 55 e2 15 00 02 56 e1 15 00 02 57 11 15 00 02 58 e4 15 00 02 59 e3 15 00 02 82 0f 15 00 02 83 0f 15 00 02 84 00 15 00 02 85 0f 15 00 02 86 0f 15 00 02 87 0e 15 00 02 88 0e 15 00 02 89 06 15 00 02 8a 06 15 00 02 8b 07 15 00 02 8c 07 15 00 02 8d 04 15 00 02 8e 04 15 00 02 8f 05 15 00 02 90 05 15 00 02 98 0f 15 00 02 99 0f 15 00 02 9a 00 15 00 02 9b 0f 15 00 02 9c 0f 15 00 02 9d 0e 15 00 02 9e 0e 15 00 02 9f 06 15 00 02 a0 06 15 00 02 a1 07 15 00 02 a2 07 15 00 02 a3 04 15 00 02 a4 04 15 00 02 a5 05 15 00 02 a6 05 15 00 02 e0 02 15 00 02 e1 52 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 00 15 00 02 36 02 05 c8 01 11 05 64 01 29",
    resetGpios: "&gpio3 RK_PB7 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio0 RK_PB5 GPIO_ACTIVE_HIGH",
    useExtAmplifier: false
},
{
    name: "K36 Panel 5",
    md5: ["88f853daa7524244ca4ce7a7da3bedbc", "31f968d5a1d000a42c82207fb7c875b7"],
    panelInitSequence: "39 00 04 b9 f1 12 83 39 00 06 b1 00 00 00 da 80 39 00 04 b2 00 13 70 39 00 0b b3 10 10 28 28 03 ff 00 00 00 00 15 00 02 b4 80 15 00 03 b5 0a 0a 15 00 03 b6 82 82 39 00 05 b8 26 62 f0 63 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 90 0a 00 00 01 4f 01 00 00 37 15 00 02 bc 47 39 00 04 bf 02 11 00 39 00 0a c0 73 73 50 50 00 00 12 50 00 39 00 0d c1 53 00 32 32 77 d1 cc cc 77 77 33 33 39 00 07 c6 82 00 bf ff 00 ff 39 00 07 c7 b8 00 0a 00 00 00 39 00 05 c8 10 40 1e 02 15 00 02 cc 0b 39 00 23 e0 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 39 00 0f e3 07 07 0b 0b 0b 0b 00 00 00 00 ff 00 c0 10 39 00 40 e9 c8 10 02 00 00 b0 b1 11 31 23 28 80 b0 b1 27 08 00 04 02 00 00 00 00 04 02 00 00 00 88 88 ba 60 24 08 88 88 88 88 88 88 88 ba 71 35 18 88 88 88 88 88 00 00 00 01 00 00 00 00 00 00 00 00 00 39 00 3e ea 97 0a 82 02 03 07 00 00 00 00 00 00 81 88 ba 17 53 88 88 88 88 88 88 80 88 ba 06 42 88 88 88 88 88 88 23 00 00 02 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 04 ef ff ff 01 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PD3 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio3 RK_PA3 GPIO_ACTIVE_HIGH",
    useExtAmplifier: true
},
{
    name: "K36 Panel 6",
    md5: "85a6f808b362c2e79ae9860b81ae6f66",
    panelInitSequence: "15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 01 15 00 02 e3 00 15 00 02 25 10 15 00 02 28 6f 15 00 02 29 01 15 00 02 2a df 15 00 02 2c 22 15 00 02 c3 0f 15 00 02 37 9c 15 00 02 38 a7 15 00 02 39 41 15 00 02 80 20 15 00 02 91 67 15 00 02 92 67 15 00 02 a0 55 15 00 02 a1 50 15 00 02 a3 58 15 00 02 a4 9c 15 00 02 a7 02 15 00 02 a8 01 15 00 02 a9 21 15 00 02 aa fc 15 00 02 ab 28 15 00 02 ac 06 15 00 02 ad 06 15 00 02 ae 06 15 00 02 af 03 15 00 02 b0 08 15 00 02 b1 26 15 00 02 b2 28 15 00 02 b3 28 15 00 02 b4 03 15 00 02 b5 08 15 00 02 b6 26 15 00 02 b7 08 15 00 02 b8 26 15 00 02 c0 00 15 00 02 c1 00 15 00 02 c2 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 b0 02 15 00 02 d0 02 15 00 02 b1 0f 15 00 02 d1 10 15 00 02 b2 11 15 00 02 d2 12 15 00 02 b3 32 15 00 02 d3 33 15 00 02 b4 36 15 00 02 d4 36 15 00 02 b5 3c 15 00 02 d5 3c 15 00 02 b6 20 15 00 02 d6 20 15 00 02 b7 3e 15 00 02 d7 3e 15 00 02 b8 0e 15 00 02 d8 0d 15 00 02 b9 05 15 00 02 d9 05 15 00 02 ba 11 15 00 02 da 12 15 00 02 bb 11 15 00 02 db 11 15 00 02 bc 13 15 00 02 dc 14 15 00 02 bd 14 15 00 02 dd 14 15 00 02 be 16 15 00 02 de 18 15 00 02 bf 0e 15 00 02 df 0f 15 00 02 c0 17 15 00 02 e0 17 15 00 02 c1 07 15 00 02 e1 08 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 03 15 00 02 08 8a 15 00 02 09 8b 15 00 02 30 00 15 00 02 31 00 15 00 02 32 00 15 00 02 33 00 15 00 02 34 61 15 00 02 35 d4 15 00 02 36 24 15 00 02 37 03 15 00 02 40 86 15 00 02 41 87 15 00 02 42 84 15 00 02 43 85 15 00 02 44 11 15 00 02 45 de 15 00 02 46 dd 15 00 02 47 11 15 00 02 48 e0 15 00 02 49 df 15 00 02 50 82 15 00 02 51 83 15 00 02 52 80 15 00 02 53 81 15 00 02 54 11 15 00 02 55 e2 15 00 02 56 e1 15 00 02 57 11 15 00 02 58 e4 15 00 02 59 e3 15 00 02 82 0f 15 00 02 83 0f 15 00 02 84 00 15 00 02 85 0f 15 00 02 86 0f 15 00 02 87 0e 15 00 02 88 0e 15 00 02 89 06 15 00 02 8a 06 15 00 02 8b 07 15 00 02 8c 07 15 00 02 8d 04 15 00 02 8e 04 15 00 02 8f 05 15 00 02 90 05 15 00 02 98 0f 15 00 02 99 0f 15 00 02 9a 00 15 00 02 9b 0f 15 00 02 9c 0f 15 00 02 9d 0e 15 00 02 9e 0e 15 00 02 9f 06 15 00 02 a0 06 15 00 02 a1 07 15 00 02 a2 07 15 00 02 a3 04 15 00 02 a4 04 15 00 02 a5 05 15 00 02 a6 05 15 00 02 e0 02 15 00 02 e1 52 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 00 15 00 02 36 02 05 c8 01 11 05 64 01 29",
    resetGpios: "&gpio3 RK_PD3 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio3 RK_PA3 GPIO_ACTIVE_HIGH",
    useExtAmplifier: true
},
{
    name: "K36 Panel 7",
    md5: "01de1c13af2882c697e013224f40bc5b",
    panelInitSequence: "15 00 02 e0 00 15 00 02 e1 93 15 00 02 e2 65 15 00 02 e3 f8 15 00 02 80 03 15 00 02 e0 01 15 00 02 00 00 15 00 02 01 73 15 00 02 03 00 15 00 02 04 7d 15 00 02 0c 74 15 00 02 17 00 15 00 02 18 bf 15 00 02 19 01 15 00 02 1a 00 15 00 02 1b bf 15 00 02 1c 01 15 00 02 24 fe 15 00 02 37 09 15 00 02 38 04 15 00 02 40 03 15 00 02 41 3c 15 00 02 42 a0 15 00 02 43 0d 15 00 02 44 09 15 00 02 45 76 15 00 02 4b 04 15 00 02 55 02 15 00 02 57 89 15 00 02 5a 34 15 00 02 5b 12 15 00 02 5d 7f 15 00 02 5e 70 15 00 02 5f 62 15 00 02 60 58 15 00 02 61 54 15 00 02 62 46 15 00 02 63 48 15 00 02 64 31 15 00 02 65 46 15 00 02 66 42 15 00 02 67 3e 15 00 02 68 56 15 00 02 69 41 15 00 02 6a 44 15 00 02 6b 35 15 00 02 6c 30 15 00 02 6d 23 15 00 02 6e 13 15 00 02 6f 0c 15 00 02 70 7f 15 00 02 71 70 15 00 02 72 62 15 00 02 73 58 15 00 02 74 54 15 00 02 75 46 15 00 02 76 48 15 00 02 77 31 15 00 02 78 46 15 00 02 79 42 15 00 02 7a 3e 15 00 02 7b 56 15 00 02 7c 41 15 00 02 7d 44 15 00 02 7e 35 15 00 02 7f 30 15 00 02 80 23 15 00 02 81 13 15 00 02 82 0c 15 00 02 e0 02 15 00 02 00 5d 15 00 02 01 5d 15 00 02 02 5f 15 00 02 03 5f 15 00 02 04 57 15 00 02 05 58 15 00 02 06 4a 15 00 02 07 44 15 00 02 08 46 15 00 02 09 48 15 00 02 0a 40 15 00 02 0b 5d 15 00 02 0c 5f 15 00 02 0d 5f 15 00 02 0e 5f 15 00 02 0f 5f 15 00 02 10 5f 15 00 02 11 5f 15 00 02 12 5f 15 00 02 13 5f 15 00 02 14 5f 15 00 02 15 5f 15 00 02 16 5d 15 00 02 17 5d 15 00 02 18 5f 15 00 02 19 5f 15 00 02 1a 57 15 00 02 1b 58 15 00 02 1c 4b 15 00 02 1d 45 15 00 02 1e 47 15 00 02 1f 49 15 00 02 20 41 15 00 02 21 5d 15 00 02 22 5f 15 00 02 23 5f 15 00 02 24 5f 15 00 02 25 5f 15 00 02 26 5f 15 00 02 27 5f 15 00 02 28 5f 15 00 02 29 5f 15 00 02 2a 5f 15 00 02 2b 5f 15 00 02 2c 5d 15 00 02 2d 41 15 00 02 2e 5f 15 00 02 2f 5f 15 00 02 30 57 15 00 02 31 58 15 00 02 32 45 15 00 02 33 4b 15 00 02 34 49 15 00 02 35 47 15 00 02 36 5d 15 00 02 37 5d 15 00 02 38 5f 15 00 02 39 5f 15 00 02 3a 5f 15 00 02 3b 5f 15 00 02 3c 5f 15 00 02 3d 5f 15 00 02 3e 5f 15 00 02 3f 5f 15 00 02 40 5f 15 00 02 41 5f 15 00 02 42 5d 15 00 02 43 40 15 00 02 44 5f 15 00 02 45 5f 15 00 02 46 57 15 00 02 47 58 15 00 02 48 44 15 00 02 49 4a 15 00 02 4a 48 15 00 02 4b 46 15 00 02 4c 5d 15 00 02 4d 5d 15 00 02 4e 5f 15 00 02 4f 5f 15 00 02 50 5f 15 00 02 51 5f 15 00 02 52 5f 15 00 02 53 5f 15 00 02 54 5f 15 00 02 55 5f 15 00 02 56 5f 15 00 02 57 5f 15 00 02 58 40 15 00 02 59 00 15 00 02 5a 00 15 00 02 5b 10 15 00 02 5c 06 15 00 02 5d 20 15 00 02 5e 01 15 00 02 5f 02 15 00 02 60 10 15 00 02 61 01 15 00 02 62 02 15 00 02 63 40 15 00 02 64 48 15 00 02 65 15 15 00 02 66 0c 15 00 02 67 72 15 00 02 68 08 15 00 02 69 60 15 00 02 6a 40 15 00 02 6b 08 15 00 02 6c 20 15 00 02 75 87 15 00 02 76 04 15 00 02 77 08 15 00 02 78 02 15 00 02 8f e0 15 00 02 90 06 15 00 02 91 08 15 00 02 92 08 15 00 02 e0 00 15 00 02 35 00 05 78 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PD3 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio3 RK_PA3 GPIO_ACTIVE_HIGH",
    useExtAmplifier: true
},
{
    name: "K36 Panel 8",
    md5: "2cc8f4054fe0b5db5aac45d36c46779c",
    panelInitSequence: "39 00 04 b9 f1 12 83 39 00 06 b1 00 00 00 da 80 39 00 04 b2 00 13 70 39 00 0b b3 10 10 28 28 03 ff 00 00 00 00 15 00 02 b4 80 15 00 03 b5 0a 0a 15 00 03 b6 82 82 39 00 05 b8 26 62 f0 63 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 90 0a 00 00 01 4f 01 00 00 37 15 00 02 bc 47 39 00 04 bf 02 11 00 39 00 0a c0 73 73 50 50 00 00 12 50 00 39 00 0d c1 53 00 32 32 77 d1 cc cc 77 77 33 33 39 00 07 c6 82 00 bf ff 00 ff 39 00 07 c7 b8 00 0a 00 00 00 39 00 05 c8 10 40 1e 02 15 00 02 cc 0b 39 00 23 e0 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 39 00 0f e3 07 07 0b 0b 0b 0b 00 00 00 00 ff 00 c0 10 39 00 40 e9 c8 10 02 00 00 b0 b1 11 31 23 28 80 b0 b1 27 08 00 04 02 00 00 00 00 04 02 00 00 00 88 88 ba 60 24 08 88 88 88 88 88 88 88 ba 71 35 18 88 88 88 88 88 00 00 00 01 00 00 00 00 00 00 00 00 00 39 00 3e ea 97 0a 82 02 03 07 00 00 00 00 00 00 81 88 ba 17 53 88 88 88 88 88 88 80 88 ba 06 42 88 88 88 88 88 88 23 00 00 02 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 04 ef ff ff 01 05 c8 01 11 05 14 01 29",
    resetGpios: "&gpio3 RK_PD3 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio3 RK_PA3 GPIO_ACTIVE_HIGH",
    useExtAmplifier: false
},
{
    name: "K36 Panel 9",
    md5: "2be6f8864414af729c0666089ac3af88",
    panelInitSequence: "15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 01 15 00 02 e3 00 15 00 02 25 10 15 00 02 28 6f 15 00 02 29 01 15 00 02 2a df 15 00 02 2c 22 15 00 02 c3 0f 15 00 02 37 9c 15 00 02 38 a7 15 00 02 39 41 15 00 02 80 20 15 00 02 91 67 15 00 02 92 67 15 00 02 a0 55 15 00 02 a1 50 15 00 02 a3 58 15 00 02 a4 9c 15 00 02 a7 02 15 00 02 a8 01 15 00 02 a9 21 15 00 02 aa fc 15 00 02 ab 28 15 00 02 ac 06 15 00 02 ad 06 15 00 02 ae 06 15 00 02 af 03 15 00 02 b0 08 15 00 02 b1 26 15 00 02 b2 28 15 00 02 b3 28 15 00 02 b4 03 15 00 02 b5 08 15 00 02 b6 26 15 00 02 b7 08 15 00 02 b8 26 15 00 02 c0 00 15 00 02 c1 00 15 00 02 c2 00 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 02 15 00 02 b0 02 15 00 02 d0 02 15 00 02 b1 0f 15 00 02 d1 10 15 00 02 b2 11 15 00 02 d2 12 15 00 02 b3 32 15 00 02 d3 33 15 00 02 b4 36 15 00 02 d4 36 15 00 02 b5 3c 15 00 02 d5 3c 15 00 02 b6 20 15 00 02 d6 20 15 00 02 b7 3e 15 00 02 d7 3e 15 00 02 b8 0e 15 00 02 d8 0d 15 00 02 b9 05 15 00 02 d9 05 15 00 02 ba 11 15 00 02 da 12 15 00 02 bb 11 15 00 02 db 11 15 00 02 bc 13 15 00 02 dc 14 15 00 02 bd 14 15 00 02 dd 14 15 00 02 be 16 15 00 02 de 18 15 00 02 bf 0e 15 00 02 df 0f 15 00 02 c0 17 15 00 02 e0 17 15 00 02 c1 07 15 00 02 e1 08 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 03 15 00 02 08 8a 15 00 02 09 8b 15 00 02 30 00 15 00 02 31 00 15 00 02 32 00 15 00 02 33 00 15 00 02 34 61 15 00 02 35 d4 15 00 02 36 24 15 00 02 37 03 15 00 02 40 86 15 00 02 41 87 15 00 02 42 84 15 00 02 43 85 15 00 02 44 11 15 00 02 45 de 15 00 02 46 dd 15 00 02 47 11 15 00 02 48 e0 15 00 02 49 df 15 00 02 50 82 15 00 02 51 83 15 00 02 52 80 15 00 02 53 81 15 00 02 54 11 15 00 02 55 e2 15 00 02 56 e1 15 00 02 57 11 15 00 02 58 e4 15 00 02 59 e3 15 00 02 82 0f 15 00 02 83 0f 15 00 02 84 00 15 00 02 85 0f 15 00 02 86 0f 15 00 02 87 0e 15 00 02 88 0e 15 00 02 89 06 15 00 02 8a 06 15 00 02 8b 07 15 00 02 8c 07 15 00 02 8d 04 15 00 02 8e 04 15 00 02 8f 05 15 00 02 90 05 15 00 02 98 0f 15 00 02 99 0f 15 00 02 9a 00 15 00 02 9b 0f 15 00 02 9c 0f 15 00 02 9d 0e 15 00 02 9e 0e 15 00 02 9f 06 15 00 02 a0 06 15 00 02 a1 07 15 00 02 a2 07 15 00 02 a3 04 15 00 02 a4 04 15 00 02 a5 05 15 00 02 a6 05 15 00 02 e0 02 15 00 02 e1 52 15 00 02 ff 30 15 00 02 ff 52 15 00 02 ff 00 15 00 02 36 02 05 c8 01 11 05 64 01 29",
    resetGpios: "&gpio3 RK_PD3 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio3 RK_PA3 GPIO_ACTIVE_HIGH",
    useExtAmplifier: false
},
{
    name: "K36 Panel 10",
    md5: "037dfec5cb0bf9938864489fac9d9e3c",
    panelInitSequence: "05 fa 01 11 39 00 04 b9 f1 12 83 39 00 06 b1 00 00 00 da 80 39 00 04 b2 00 13 70 39 00 0b b3 10 10 28 28 03 ff 00 00 00 00 15 00 02 b4 82 15 00 03 b5 07 07 15 00 03 b6 9c 9c 39 00 05 b8 2a 62 f0 60 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 90 0a 00 00 01 4f 01 00 00 37 39 00 02 bc 47 39 00 04 bf 02 11 00 39 00 0a c0 73 73 50 50 00 00 12 70 00 39 00 0d c1 25 c0 32 32 77 e4 ff ff cc cc 77 77 39 00 07 c6 82 00 bf ff 00 ff 39 00 07 c7 b8 00 0a 00 00 00 39 00 05 c8 10 40 1e 02 39 00 02 cc 0b 39 00 23 e0 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 00 07 0d 37 35 3f 41 44 06 0c 0d 0f 11 10 12 14 1a 39 00 0f e3 07 07 0b 0b 0b 0b 00 00 00 00 ff 00 c0 10 39 00 40 e9 c8 10 0a 00 00 f0 08 12 31 23 4f 86 f0 08 47 08 00 00 10 00 00 00 00 00 10 00 00 00 88 88 08 f8 f4 46 60 02 28 88 88 88 88 18 f8 f5 57 71 13 38 88 88 00 00 00 01 00 00 00 00 00 00 00 00 00 39 00 3e ea 00 1a 00 00 00 00 00 00 00 00 00 00 88 f8 18 f8 83 31 17 75 58 88 88 88 f8 08 f8 82 20 06 64 48 88 88 23 00 00 03 f0 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 04 ef ff ff 01 05 32 01 29",
    resetGpios: "&gpio3 RK_PB7 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio0 RK_PB5 GPIO_ACTIVE_HIGH",
    useExtAmplifier: false
},
{
    name: "R36Max",
    md5: ["3101828659a9256f3bfc70631ba58dfc", "3d7f16bbd611f88ee9b0eb10791eadfc"],
    panelInitSequence: "39 00 04 b9 f1 12 83 39 00 06 b1 00 00 00 da 80 39 00 04 b2 3c 12 30 39 00 0b b3 10 10 28 28 03 ff 00 00 00 00 15 00 02 b4 80 39 00 03 b5 0a 0a 39 00 03 b6 97 97 39 00 05 b8 26 22 f0 13 39 00 1c ba 33 81 05 f9 0e 0e 20 00 00 00 00 00 00 00 44 25 00 90 0a 00 00 01 4f 01 00 00 37 15 00 02 bc 47 39 00 04 bf 02 11 00 39 00 0a c0 73 73 50 50 00 00 12 70 00 39 00 0d c1 25 00 32 32 77 e4 ff ff cc cc 77 77 39 00 07 c6 82 00 bf ff 00 ff 39 00 07 c7 b8 00 0a 00 00 00 39 00 05 c8 10 40 1e 02 15 00 02 cc 0b 39 00 23 e0 00 0b 10 2c 3d 3f 42 3a 07 0d 0f 13 15 13 14 0f 16 00 0b 10 2c 3d 3f 42 3a 07 0d 0f 13 15 13 14 0f 16 39 00 0f e3 07 07 0b 0b 0b 0b 00 00 00 00 ff 00 c0 10 39 00 40 e9 c8 10 0a 00 00 80 81 12 31 23 4f 86 a0 00 47 08 00 00 0c 00 00 00 00 00 0c 00 00 00 98 02 8b af 46 02 88 88 88 88 88 98 13 8b af 57 13 88 88 88 88 88 00 00 00 00 00 00 00 00 00 00 00 00 00 39 00 3e ea 97 0c 09 09 09 78 00 00 00 00 00 00 9f 31 8b a8 31 75 88 88 88 88 88 9f 20 8b a8 20 64 88 88 88 88 88 23 00 00 02 71 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 40 80 81 00 00 00 00 39 00 04 ef ff ff 01 05 fa 01 11 05 32 01 29",
    resetGpios: "&gpio3 RK_PB7 GPIO_ACTIVE_LOW",
    enableGpios: "&gpio0 RK_PB5 GPIO_ACTIVE_HIGH",
    useExtAmplifier: true
},
    // 可以继续添加更多ArkOSK36的设备配置
];


// MD5计算类
class MD5 {
    static md5(input) {
        if (input instanceof ArrayBuffer) {
            return this.md5FromArrayBuffer(input);
        }
        throw new Error('MD5: 只支持 ArrayBuffer 输入');
    }

    static md5FromArrayBuffer(arrayBuffer) {
        const bytes = new Uint8Array(arrayBuffer);
        return this.calculateMD5(bytes);
    }

    static calculateMD5(inputBytes) {
        const S = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
            5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
            4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
            6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
        ];

        const K = [0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee,
            0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
            0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
            0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
            0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa,
            0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
            0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed,
            0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
            0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
            0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
            0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05,
            0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
            0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039,
            0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
            0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
            0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
        ];

        let a = 0x67452301 >>> 0;
        let b = 0xEFCDAB89 >>> 0;
        let c = 0x98BADCFE >>> 0;
        let d = 0x10325476 >>> 0;

        const originalLength = inputBytes.length;
        const bitLength = (originalLength * 8) >>> 0;
        const bitLengthHigh = Math.floor((originalLength * 8) / 0x100000000) >>> 0;

        const padLen = (56 - ((originalLength + 1) % 64) + 64) % 64;
        const totalLength = originalLength + 1 + padLen + 8;
        const padded = new Uint8Array(totalLength);
        padded.set(inputBytes, 0);
        padded[originalLength] = 0x80;

        padded[totalLength - 8] = (bitLength & 0xff);
        padded[totalLength - 7] = (bitLength >>> 8) & 0xff;
        padded[totalLength - 6] = (bitLength >>> 16) & 0xff;
        padded[totalLength - 5] = (bitLength >>> 24) & 0xff;
        padded[totalLength - 4] = (bitLengthHigh & 0xff);
        padded[totalLength - 3] = (bitLengthHigh >>> 8) & 0xff;
        padded[totalLength - 2] = (bitLengthHigh >>> 16) & 0xff;
        padded[totalLength - 1] = (bitLengthHigh >>> 24) & 0xff;

        for (let chunkStart = 0; chunkStart < totalLength; chunkStart += 64) {
            const M = new Array(16);
            for (let i = 0; i < 16; i++) {
                const offset = chunkStart + i * 4;
                M[i] = (padded[offset] |
                    (padded[offset + 1] << 8) |
                    (padded[offset + 2] << 16) |
                    (padded[offset + 3] << 24)) >>> 0;
            }

            let A = a,
                B = b,
                C = c,
                D = d;

            for (let i = 0; i < 64; i++) {
                let F, g;
                if (i < 16) {
                    F = (B & C) | ((~B) & D);
                    g = i;
                } else if (i < 32) {
                    F = (D & B) | ((~D) & C);
                    g = (5 * i + 1) % 16;
                } else if (i < 48) {
                    F = B ^ C ^ D;
                    g = (3 * i + 5) % 16;
                } else {
                    F = C ^ (B | (~D));
                    g = (7 * i) % 16;
                }

                let temp = (A + F + K[i] + M[g]) >>> 0;
                temp = this.rotateLeft(temp, S[i]);
                temp = (B + temp) >>> 0;

                A = D;
                D = C;
                C = B;
                B = temp;
            }

            a = (a + A) >>> 0;
            b = (b + B) >>> 0;
            c = (c + C) >>> 0;
            d = (d + D) >>> 0;
        }

        return this.toHex(a) + this.toHex(b) + this.toHex(c) + this.toHex(d);
    }

    static rotateLeft(value, shift) {
        return (((value << shift) | (value >>> (32 - shift))) >>> 0);
    }

    static toHex(value) {
        value = value >>> 0;
        let str = '';
        for (let i = 0; i < 4; i++) {
            const byte = (value >>> (i * 8)) & 0xff;
            str += byte.toString(16).padStart(2, '0');
        }
        return str;
    }
}
// 完整的 DTB 识别器类
class DTBIdentifier {
    constructor() {
        this.phandleMap = new Map();
        this.nodePaths = new Map();
    }

    // 在 DTB_DATABASE 中查找匹配的DTB
    findMatchingDtb(md5, panelInfo, codecInfo) {
        console.log('=== 在DTB数据库中查找匹配 ===');
        console.log('MD5:', md5);

        const exactMatches = [];
        const screenMatches = [];

        // 1. 精确 MD5 匹配
        for (const dbItem of DTB_DATABASE) {
            let md5Match = false;

            // 处理数组格式的MD5
            if (Array.isArray(dbItem.md5)) {
                md5Match = dbItem.md5.includes(md5);
            } else {
                md5Match = dbItem.md5 === md5;
            }

            if (md5Match) {
                console.log(`✅ 精确MD5匹配: ${dbItem.name}`);
                exactMatches.push({
                    dbItem: dbItem,
                    matchType: 'exact',
                    confidence: 100
                });
                // 注意：这里不break，继续检查其他DTB
            }
        }

        // 2. 屏幕参数模糊匹配 - 总是进行，用于收集额外信息
        console.log('开始屏幕参数模糊匹配...');
        for (const dbItem of DTB_DATABASE) {
            // 跳过已经精确匹配的项
            if (exactMatches.some(match => match.dbItem.name === dbItem.name)) {
                console.log(`跳过已精确匹配的项: ${dbItem.name}`);
                continue;
            }

            const isScreenMatch = this.compareScreenParams(dbItem, panelInfo, codecInfo);
            if (isScreenMatch) {
                console.log(`🔄 屏幕参数匹配: ${dbItem.name}`);
                screenMatches.push({
                    dbItem: dbItem,
                    matchType: 'screen',
                    confidence: 80
                });
            } else {
                console.log(`❌ 屏幕参数不匹配: ${dbItem.name}`);
            }
        }

        console.log(`\n=== 最终识别结果 ===`);
        console.log(`精确匹配: ${exactMatches.length > 0 ? exactMatches.map(m => m.dbItem.name).join(', ') : '无'}`);
        console.log(`屏幕匹配数量: ${screenMatches.length}`);
        screenMatches.forEach(match => console.log(`  - ${match.dbItem.name}`));

        return {
            exactMatches,
            screenMatches,
            hasExactMatch: exactMatches.length > 0,
            hasScreenMatch: screenMatches.length > 0
        };
    }
    // 根据匹配的DTB名称查找对应的设备
    findDevicesByDtbNames(dtbMatches) {
        const matchedDeviceIds = new Set();
        const matchedDevicesInfo = [];

        console.log('=== 根据DTB名称查找设备 ===');

        for (const match of dtbMatches) {
            const dtbName = match.dbItem.name;
            console.log(`查找使用DTB "${dtbName}" 的设备...`);

            // 在 devicesData 中查找包含此DTB名称的设备
            for (const device of devicesData.devices) {
                if (device.dtbNames && device.dtbNames.includes(dtbName)) {
                    console.log(`✅ 找到设备: ${device.title}`);
                    matchedDeviceIds.add(device.id);
                    matchedDevicesInfo.push({
                        device: device,
                        dtbName: dtbName,
                        matchType: match.matchType,
                        confidence: match.confidence
                    });
                }
            }
        }

        return {
            deviceIds: Array.from(matchedDeviceIds),
            devicesInfo: matchedDevicesInfo
        };
    }

    // 屏幕参数比较（完整版）
    compareScreenParams(dbItem, panelInfo, codecInfo) {
        console.log(`比较屏幕参数: ${dbItem.name}`);

        // 1. 比较 panel-init-sequence
        if (!this.compareSequences(dbItem.panelInitSequence, panelInfo.initSequence)) {
            console.log(`❌ 序列不匹配: ${dbItem.name}`);
            return false;
        }

        // 2. 比较 reset-gpios
        if (!this.compareGpios(dbItem.resetGpios, panelInfo.resetGpios)) {
            console.log(`❌ reset-gpios不匹配: ${dbItem.name}`);
            return false;
        }

        // 3. 比较 enable-gpios
        if (!this.compareGpios(dbItem.enableGpios, panelInfo.enableGpios)) {
            console.log(`❌ enable-gpios不匹配: ${dbItem.name}`);
            return false;
        }

        // 4. 比较 use-ext-amplifier（如果存在）
        if (dbItem.useExtAmplifier !== undefined) {
            const dbUseExtAmplifier = dbItem.useExtAmplifier === true || dbItem.useExtAmplifier === "true";
            const extractedUseExtAmplifier = codecInfo.useExtAmplifier === true || codecInfo.useExtAmplifier === "true";

            if (dbUseExtAmplifier !== extractedUseExtAmplifier) {
                console.log(`❌ use-ext-amplifier不匹配: ${dbItem.name}`);
                return false;
            }
        }

        console.log(`✅ 所有屏幕参数匹配: ${dbItem.name}`);
        return true;
    }

    // 序列比较（增强版）
    compareSequences(dbSequence, extractedSequence) {
        if (!dbSequence || !extractedSequence) {
            console.log('序列为空，无法比较');
            return false;
        }

        const dbBytes = this.sequenceStringToBytes(dbSequence);
        const extractedBytes = extractedSequence;

        console.log(`数据库序列长度: ${dbBytes.length}, 提取序列长度: ${extractedBytes.length}`);

        if (dbBytes.length !== extractedBytes.length) {
            console.log(`序列长度不匹配: ${dbBytes.length} vs ${extractedBytes.length}`);
            return false;
        }

        for (let i = 0; i < dbBytes.length; i++) {
            if (dbBytes[i] !== extractedBytes[i]) {
                console.log(`序列字节不匹配 at ${i}: ${dbBytes[i]} vs ${extractedBytes[i]}`);
                return false;
            }
        }

        return true;
    }


    // GPIO 比较（增强版）
    compareGpios(dbGpios, extractedGpios) {
        console.log(`比较GPIO: 数据库=${dbGpios}, 提取=${JSON.stringify(extractedGpios)}`);

        // 如果数据库中的值为 null，表示该设备没有这个 GPIO
        if (dbGpios === null) {
            const result = extractedGpios === null;
            console.log(`数据库GPIO为null，匹配结果: ${result}`);
            return result;
        }

        // 如果提取到的值为 null，但数据库中有值，不匹配
        if (extractedGpios === null && dbGpios !== null) {
            console.log('提取GPIO为null但数据库有值，不匹配');
            return false;
        }

        // 如果两者都为 null，匹配
        if (extractedGpios === null && dbGpios === null) {
            console.log('两者GPIO都为null，匹配');
            return true;
        }

        // 处理字符串格式比较（数据库中的格式）
        if (typeof dbGpios === 'string' && Array.isArray(extractedGpios)) {
            const formattedExtracted = this.formatGpiosForCompare(extractedGpios);
            const result = dbGpios === formattedExtracted;
            console.log(`字符串GPIO比较: ${dbGpios} vs ${formattedExtracted}, 结果: ${result}`);
            return result;
        }

        // 数组比较逻辑
        if (Array.isArray(dbGpios) && Array.isArray(extractedGpios)) {
            if (dbGpios.length !== extractedGpios.length) {
                console.log(`GPIO数组长度不匹配: ${dbGpios.length} vs ${extractedGpios.length}`);
                return false;
            }
            for (let i = 0; i < dbGpios.length; i++) {
                if (dbGpios[i] !== extractedGpios[i]) {
                    console.log(`GPIO数组元素不匹配 at ${i}: ${dbGpios[i]} vs ${extractedGpios[i]}`);
                    return false;
                }
            }
            console.log('GPIO数组完全匹配');
            return true;
        }

        console.log('GPIO格式不匹配');
        return false;
    }

    // 格式化 GPIO 用于比较
    formatGpiosForCompare(gpioData) {
        if (!gpioData || gpioData.length < 3) return '';
        const [phandle, pin, flags] = gpioData;
        const nodePath = this.phandleMap.get(phandle);
        let gpioController;

        if (nodePath) {
            const nodeName = this.getNodeNameFromPath(nodePath);
            gpioController = `&${nodeName.split('@')[0]}`;
        } else {
            gpioController = `&unknown_${phandle.toString(16)}`;
        }

        const pinName = this.getGpioPinName(pin);
        const flagStr = flags === 0x1 ? "GPIO_ACTIVE_LOW" : "GPIO_ACTIVE_HIGH";

        return `${gpioController} ${pinName} ${flagStr}`;
    }

    // GPIO 引脚名称映射
    getGpioPinName(pin) {
        const gpioMapping = {
            0x0: "RK_PA0",
            0x1: "RK_PA1",
            0x2: "RK_PA2",
            0x3: "RK_PA3",
            0x4: "RK_PA4",
            0x5: "RK_PA5",
            0x6: "RK_PA6",
            0x7: "RK_PA7",
            0x8: "RK_PB0",
            0x9: "RK_PB1",
            0xa: "RK_PB2",
            0xb: "RK_PB3",
            0xc: "RK_PB4",
            0xd: "RK_PB5",
            0xe: "RK_PB6",
            0xf: "RK_PB7",
            0x10: "RK_PC0",
            0x11: "RK_PC1",
            0x12: "RK_PC2",
            0x13: "RK_PC3",
            0x14: "RK_PC4",
            0x15: "RK_PC5",
            0x16: "RK_PC6",
            0x17: "RK_PC7",
            0x18: "RK_PD0",
            0x19: "RK_PD1",
            0x1a: "RK_PD2",
            0x1b: "RK_PD3",
            0x1c: "RK_PD4",
            0x1d: "RK_PD5",
            0x1e: "RK_PD6",
            0x1f: "RK_PD7"
        };
        return gpioMapping[pin] || `0x${pin.toString(16)}`;
    }

    // 序列字符串转字节数组
    sequenceStringToBytes(sequenceString) {
        return sequenceString.split(' ').map(hex => parseInt(hex, 16));
    }

    // 提取 Codec 信息
    extractCodecInfo(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        let useExtAmplifier = false;

        const magic = view.getUint32(0, false);
        if (magic !== 0xd00dfeed) {
            return {
                useExtAmplifier
            };
        }

        const off_dt_strings = view.getUint32(12, false);

        for (let offset = 0; offset < view.byteLength - 100; offset++) {
            const nodeInfo = this.findCodecNodeAtOffset(view, offset, off_dt_strings);
            if (nodeInfo && nodeInfo.name) {
                const properties = this.findPropertiesInNode(view, nodeInfo.offset, off_dt_strings);
                if (properties.useExtAmplifier) {
                    useExtAmplifier = true;
                    break;
                }
            }
        }

        return {
            useExtAmplifier
        };
    }

    // 查找 Codec 节点
    findCodecNodeAtOffset(view, offset, stringOffset) {
        try {
            const token = view.getUint32(offset, false);
            if (token === 1) {
                const name = this.readString(view, offset + 4);
                if (name && (
                    name.includes('codec') || name.includes('sound') ||
                    name.includes('audio') || name.includes('es8316') ||
                    name.includes('acodec') || name.endsWith('codec')
                )) {
                    return {
                        name: name,
                        offset: offset
                    };
                }
            }
        } catch (e) { }
        return null;
    }

    // 构建节点树
    buildNodeTree(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        this.phandleMap.clear();
        this.nodePaths.clear();

        const magic = view.getUint32(0, false);
        if (magic !== 0xd00dfeed) return;

        const off_dt_struct = view.getUint32(8, false);
        const off_dt_strings = view.getUint32(12, false);

        const pathStack = [];
        this.parseNodeTree(view, off_dt_struct, off_dt_strings, pathStack, '/');
    }

    // 解析节点树
    parseNodeTree(view, offset, stringOffset, pathStack, currentPath) {
        let currentOffset = offset;

        while (true) {
            if (currentOffset + 4 > view.byteLength) break;

            const token = view.getUint32(currentOffset, false);
            currentOffset += 4;

            switch (token) {
                case 0x1: // FDT_BEGIN_NODE
                    const nodeName = this.readString(view, currentOffset);
                    currentOffset += nodeName.length + 1;
                    currentOffset = this.align4(currentOffset);

                    const nodePath = currentPath + (currentPath === '/' ? '' : '/') + nodeName;
                    pathStack.push({
                        offset: currentOffset,
                        path: nodePath
                    });
                    this.nodePaths.set(currentOffset, nodePath);

                    const phandle = this.findPhandleInNode(view, currentOffset, stringOffset);
                    if (phandle !== null) {
                        this.phandleMap.set(phandle, nodePath);
                    }

                    currentOffset = this.parseNodeTree(view, currentOffset, stringOffset, pathStack, nodePath);
                    break;

                case 0x2: // FDT_END_NODE
                    pathStack.pop();
                    return currentOffset;

                case 0x3: // FDT_PROP
                    const len = view.getUint32(currentOffset, false);
                    currentOffset += 4;
                    const nameoff = view.getUint32(currentOffset, false);
                    currentOffset += 4;
                    currentOffset += len;
                    currentOffset = this.align4(currentOffset);
                    break;

                case 0x9: // FDT_END
                    return currentOffset;

                default:
                    return currentOffset;
            }
        }
        return currentOffset;
    }

    // 查找节点中的 phandle
    findPhandleInNode(view, nodeOffset, stringOffset) {
        let offset = nodeOffset;

        while (true) {
            if (offset + 4 > view.byteLength) break;

            const token = view.getUint32(offset, false);
            offset += 4;

            if (token === 0x2 || token === 0x9) break;

            if (token === 0x3) {
                const len = view.getUint32(offset, false);
                offset += 4;
                const nameoff = view.getUint32(offset, false);
                offset += 4;
                const propName = this.readString(view, stringOffset + nameoff);

                if (propName === 'phandle') {
                    const data = new Uint8Array(view.buffer, offset, Math.min(len, 4));
                    return this.parseUint32(data);
                }

                offset += len;
                offset = this.align4(offset);
            }
        }
        return null;
    }
    // 添加缺失的方法
    findGpioFromPowerSupply(view, stringOffset, powerSupplyPhandle) {
        // 通过phandle找到power-supply节点
        const powerSupplyNodePath = this.phandleMap.get(powerSupplyPhandle);
        if (!powerSupplyNodePath) return null;

        // 找到power-supply节点的偏移量
        for (const [offset, path] of this.nodePaths.entries()) {
            if (path === powerSupplyNodePath) {
                // 在power-supply节点中查找gpio属性
                const properties = this.findPropertiesInNode(view, offset, stringOffset);
                return properties.gpio; // 返回power-supply节点下的gpio属性
            }
        }
        return null;
    }

    // 完整的 extractPanelInfo 方法
    extractPanelInfo(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        let initSequence = null;
        let resetGpios = null;
        let enableGpios = null;
        let powerSupplyPhandle = null;

        const magic = view.getUint32(0, false);
        if (magic !== 0xd00dfeed) {
            return {
                initSequence: null,
                resetGpios: null,
                enableGpios: null
            };
        }

        const off_dt_strings = view.getUint32(12, false);

        // 查找 panel 节点
        for (let offset = 0; offset < view.byteLength - 100; offset++) {
            const nodeInfo = this.findPanelNodeAtOffset(view, offset, off_dt_strings);
            if (nodeInfo && nodeInfo.name) {
                const properties = this.findPropertiesInNode(view, offset, off_dt_strings);
                if (properties.init) initSequence = properties.init;
                if (properties.resetGpios) resetGpios = properties.resetGpios;

                // 完整的enable-gpios提取逻辑
                if (properties.enableGpios) {
                    enableGpios = properties.enableGpios;
                } else if (properties.powerSupply) {
                    // 如果panel节点下没有enable-gpios，但有power-supply，记录phandle
                    powerSupplyPhandle = properties.powerSupply[0];
                }

                if (initSequence || resetGpios || enableGpios || powerSupplyPhandle) {
                    break;
                }
            }
        }

        // 如果panel节点下没有enable-gpios，但有power-supply，尝试从power-supply节点获取gpio
        if (!enableGpios && powerSupplyPhandle) {
            enableGpios = this.findGpioFromPowerSupply(view, off_dt_strings, powerSupplyPhandle);
        }

        return {
            initSequence,
            resetGpios,
            enableGpios
        };
    }

    // 查找 Panel 节点
    findPanelNodeAtOffset(view, offset, stringOffset) {
        try {
            const token = view.getUint32(offset, false);
            if (token === 1) {
                const name = this.readString(view, offset + 4);
                if (name && (name.includes('panel') || name.includes('display') || name.includes('lcd'))) {
                    return {
                        name: name,
                        offset: offset
                    };
                }
            }
        } catch (e) { }
        return null;
    }

    // 查找节点中的属性
    findPropertiesInNode(view, nodeOffset, stringOffset) {
        let initSequence = null;
        let resetGpios = null;
        let enableGpios = null;
        let powerSupply = null;
        let gpio = null;
        let useExtAmplifier = false;
        let offset = nodeOffset + 4;

        offset += this.readString(view, offset).length + 1;
        offset = this.align4(offset);

        for (let i = 0; i < 100; i++) {
            if (offset + 8 >= view.byteLength) break;

            const token = view.getUint32(offset, false);
            if (token === 2 || token === 9) break;

            if (token === 3) {
                const len = view.getUint32(offset + 4, false);
                const nameoff = view.getUint32(offset + 8, false);
                const propName = this.readString(view, stringOffset + nameoff); // 正确的位置定义 propName

                if (propName === 'panel-init-sequence') {
                    const data = new Uint8Array(view.buffer, offset + 12, len);
                    initSequence = this.parseSequenceData(data);
                } else if (propName === 'reset-gpios') {
                    const data = new Uint8Array(view.buffer, offset + 12, len);
                    resetGpios = this.parseGpioData(data);
                } else if (propName === 'enable-gpios') {
                    const data = new Uint8Array(view.buffer, offset + 12, len);
                    enableGpios = this.parseGpioData(data);
                } else if (propName === 'power-supply') {
                    const data = new Uint8Array(view.buffer, offset + 12, len);
                    powerSupply = this.parseGpioData(data);
                } else if (propName === 'gpio') {
                    const data = new Uint8Array(view.buffer, offset + 12, len);
                    gpio = this.parseGpioData(data);
                } else if (propName === 'use-ext-amplifier') {
                    useExtAmplifier = true;
                }

                offset += 12 + len;
                offset = this.align4(offset);
            } else {
                offset += 4;
            }
        }

        return {
            init: initSequence,
            resetGpios,
            enableGpios,
            powerSupply,
            gpio,
            useExtAmplifier
        };
    }

    // 解析序列数据
    parseSequenceData(data) {
        const bytes = [];
        for (let i = 0; i < data.length; i++) {
            bytes.push(data[i]);
        }
        return bytes;
    }

    // 解析 GPIO 数据
    parseGpioData(data) {
        const values = [];
        for (let i = 0; i < data.length; i += 4) {
            if (i + 4 <= data.length) {
                const val = (data[i] << 24) | (data[i + 1] << 16) | (data[i + 2] << 8) | data[i + 3];
                values.push(val);
            }
        }
        return values;
    }

    // 解析 32 位无符号整数
    parseUint32(data) {
        if (data.length >= 4) {
            return (data[0] << 24) | (data[1] << 16) | (data[2] << 8) | data[3];
        }
        return null;
    }

    // 读取字符串
    readString(view, offset) {
        let str = '';
        for (let i = offset; i < view.byteLength; i++) {
            const char = view.getUint8(i);
            if (char === 0) break;
            str += String.fromCharCode(char);
        }
        return str;
    }

    // 4 字节对齐
    align4(offset) {
        return (offset + 3) & ~3;
    }

    // 获取节点名称
    getNodeNameFromPath(nodePath) {
        const parts = nodePath.split('/');
        return parts[parts.length - 1] || nodePath;
    }
}

// 加载设备数据并显示
function loadDevices() {
    console.log('加载所有设备数据');
    displayDevices(devicesData.devices);
    setupSearch(devicesData.devices);
}

// 显示设备列表
function displayDevices(devices) {
    const grid = document.getElementById('device-grid');
    if (!grid) {
        console.error('设备网格容器未找到');
        return;
    }

    if (!devices || devices.length === 0) {
        grid.innerHTML = '<div class="error-message">暂无设备数据</div>';
        return;
    }

    grid.innerHTML = devices.map(device => {
        // 获取首页显示的图片（gallery中的第一张图片）
        const mainImage = device.gallery && device.gallery.length > 0 ? device.gallery[0] : null;
        const imagePath = mainImage ? mainImage.path : '../images/placeholder.jpg';

        return `
        <div class="device-card" data-device="${device.id}" onclick="showDeviceDetails('${device.id}', devicesData.devices)">
            <div class="device-header">
                <div class="device-model">${device.model}</div>
                <div class="device-category">${device.category}</div>
                <div class="device-description">${device.description || '暂无描述'}</div>
            </div>
            <div class="device-image">
                <img src="${imagePath}" 
                     alt="${device.model}" 
                     onerror="this.src='../images/placeholder.jpg'">
            </div>
            <button class="view-details" data-device="${device.id}">查看详情</button>
        </div>
        `;
    }).join('');

    // 添加点击事件 - 现在整个卡片都可以点击
    document.querySelectorAll('.device-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // 如果点击的是按钮，不触发卡片点击（避免重复触发）
            if (!e.target.closest('.view-details')) {
                const deviceId = card.getAttribute('data-device');
                showDeviceDetails(deviceId, devicesData.devices);
            }
        });
    });

    // 保持按钮点击事件（作为备用）
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡到卡片
            const deviceId = button.getAttribute('data-device');
            showDeviceDetails(deviceId, devicesData.devices);
        });
    });

    console.log(`成功显示 ${devices.length} 个设备`);
}

// 处理系统链接点击事件
function setupSystemLinks() {
    const systemLinks = document.querySelectorAll('.page-link-btn');
    systemLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const systemName = this.getAttribute('data-system');
            const pageUrl = this.getAttribute('href');

            // 存储要定位的系统名称到sessionStorage
            sessionStorage.setItem('targetSystem', systemName);

            // 跳转到系统页面
            window.location.href = pageUrl;
        });
    });
}

// 获取系统配置信息的函数
function getSystemConfig(systemName) {
    const systemConfigs = {
        'Rocknix MOD': {
            isRecommended: true,
            theme: 'gold'
        },
        'Arkos4Clone': {
            isRecommended: true,
            theme: 'gold'
        },
        'ArkOS K36': {
            isRecommended: false,
            theme: 'blue'
        },
        'ArkOS R3XS': {
            isRecommended: true,
            theme: 'gold'
        },
        'Rocknix WIP': {
            isRecommended: false,
            theme: 'blue'
        },
        'Rocknix每夜构建': {
            isRecommended: false,
            theme: 'blue'
        },
        'Rocknix': {
            isRecommended: true,
            theme: 'gold'
        },
        'UnofficialOS': {
            isRecommended: true,
            theme: 'gold'
        },
        'Amberelec': {
            isRecommended: false,
            theme: 'blue'
        },
        'PAN4elec': {
            isRecommended: false,
            theme: 'blue'
        }
    };
    
    return systemConfigs[systemName] || { isRecommended: false, theme: 'default' };
}
// 获取分类图标的函数
function getCategoryIcon(category) {
    const iconMap = {
        '克隆机': 'fas fa-clone',
        '原版机': 'fas fa-star',
        '酱油机': 'fas fa-flask',
        '改进版本': 'fas fa-rocket',
        '旗舰版本': 'fas fa-crown'
    };
    return iconMap[category] || 'fas fa-gamepad';
}

// 获取设备年份的辅助函数
function getDeviceYear(deviceId) {
    const yearMatch = deviceId.match(/20(\d{2})/);
    return yearMatch ? `20${yearMatch[1]}` : null;
}

// 显示设备详情
function showDeviceDetails(deviceId, devices) {
    const device = devices.find(d => d.id === deviceId);
    if (!device) {
        console.error('未找到设备:', deviceId);
        return;
    }

    const modal = document.getElementById('device-modal');
    const modalContent = document.getElementById('modal-content');

    if (!modal || !modalContent) {
        console.error('模态框元素未找到');
        return;
    }

    // 安全地转义 gallery 数据
    const galleryJson = JSON.stringify(device.gallery || [])
        .replace(/'/g, "\\'")
        .replace(/"/g, '&quot;');

    modalContent.innerHTML = `
        <div class="device-detail">
            <div class="detail-header">
                <div class="detail-image">
                    <div class="device-category-display">
                        <div class="category-icon">
                            <i class="${getCategoryIcon(device.category)}"></i>
                        </div>
                        <div class="category-text">${device.category}</div>
                    </div>
                </div>
                <div class="detail-content">
                    <h2>${device.title}</h2>
                    <div class="detail-meta">
                        <span><i class="fas fa-tag"></i> ${device.category}</span>
                        ${device.dtbNames && device.dtbNames.length > 0 ? 
                            `<span><i class="fas fa-microchip"></i> ${device.dtbNames.length}个DTB</span>` : ''}
                        ${getDeviceYear(device.id) ? 
                            `<span><i class="fas fa-calendar"></i> ${getDeviceYear(device.id)}</span>` : ''}
                    </div>
                    <p>${device.description || '暂无描述'}</p>
                </div>
            </div>
            
            <div class="detail-tabs">
                <button class="detail-tab active" data-tab="features">产品特性</button>
                <button class="detail-tab" data-tab="gallery">硬件照片</button>
                <button class="detail-tab" data-tab="system">系统支持</button>
            </div>
            
            <div class="tab-content active" id="features-content">
                <div class="features-grid">
                    ${(device.features || []).map(feature => `
                        <div class="feature-item">
                            <i class="fas fa-check"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="tab-content" id="gallery-content">
                <div class="gallery-grid">
                    ${(device.gallery || []).map(item => {
        const safePath = item.path.replace(/'/g, "\\'");
        const safeTitle = item.title.replace(/'/g, "\\'");
        return `
                        <div class="gallery-item">
                            <div class="image-container">
                                <img src="${item.path}" alt="${item.title}" 
                                    onclick="event.stopPropagation(); openImageModal('${safePath}', '${safeTitle}', '${galleryJson}')"
                                    onerror="this.src='../images/placeholder.jpg'">
                                <div class="image-title">${item.title}</div>
                            </div>
                        </div>
                        `;
    }).join('')}
                </div>
            </div>
            
            <div class="tab-content" id="system-content">
                <div class="system-support">
                    <h4><i class="fas fa-desktop"></i> 系统支持情况</h4>
                    <div class="system-list">
                        ${(device.systemInfos || []).map(systemName => {
        const system = device.systemDetails ? device.systemDetails[systemName] : null;
        if (!system) return '';

        // 获取系统推荐状态和主题颜色
        const systemConfig = getSystemConfig(systemName);
        const isRecommended = systemConfig.isRecommended || false;
        const theme = systemConfig.theme || 'default';
        const statusClass = system.status === '完全支持' ? 'status-full' :
            system.status === '测试支持' ? 'status-test' : 'status-partial';

        return `
                            <div class="system-item ${isRecommended ? 'recommended' : ''} ${theme}">
                                ${isRecommended ? `
                                <div class="recommendation-badge">
                                    <i class="fas fa-star"></i>推荐
                                </div>
                                ` : ''}
                                <div class="system-header">
                                    <h5>${systemName}</h5>
                                    <span class="system-status ${statusClass}">${system.status}</span>
                                </div>
                                <p class="system-description">${system.description || '暂无描述'}</p>
                                <div class="system-tutorial">
                                    <strong>安装教程：</strong>
                                    <pre>${system.tutorial || '暂无教程'}</pre>
                                </div>
                                <div class="system-notes">
                                    <strong>注意事项：</strong>
                                    <ul>
                                        ${(system.notes || []).map(note => `<li>${note}</li>`).join('')}
                                    </ul>
                                </div>
                                ${system.pageLink ? `
                                <div class="system-download">
                                    <a href="${system.pageLink}" class="page-link-btn" data-system="${systemName}">
                                        <i class="fas fa-external-link-alt"></i> 查看系统详情
                                    </a>
                                </div>
                                ` : ''}
                            </div>
                            `;
    }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // 标签页切换
    setupTabs();

    // 添加系统链接点击事件处理
    setupSystemLinks();

    modal.style.display = 'block';
}
// 设置搜索功能
function setupSearch(devices) {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredDevices = devices.filter(device =>
            device.title.toLowerCase().includes(searchTerm) ||
            device.description.toLowerCase().includes(searchTerm) ||
            device.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
            device.category.toLowerCase().includes(searchTerm)
        );
        displayDevices(filteredDevices);
    });
}

// 工具函数
function getSpecName(key) {
    const specNames = {
        'cpu': '处理器',
        'ram': '内存',
        'storage': '存储',
        'screen': '屏幕',
        'wifi': 'WiFi',
        'bluetooth': '蓝牙',
        'battery': '电池',
        'color': '颜色'
    };
    return specNames[key] || key;
}

function setupTabs() {
    document.querySelectorAll('.detail-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // 更新活动标签
            document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 显示对应内容
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
}

// 新增：处理DTB文件的函数
async function processDtbFile(file, identifier, statusElement) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const md5 = MD5.md5(arrayBuffer);

        // 更新状态
        statusElement.textContent = `🔍 识别中: ${file.name}`;

        // 构建节点树
        identifier.buildNodeTree(arrayBuffer);

        // 提取 Panel 相关信息
        const panelInfo = identifier.extractPanelInfo(arrayBuffer);
        const codecInfo = identifier.extractCodecInfo(arrayBuffer);

        console.log('提取的面板信息:', panelInfo);
        console.log('提取的编解码器信息:', codecInfo);

        // 在DTB数据库中查找匹配
        const dtbMatches = identifier.findMatchingDtb(md5, panelInfo, codecInfo);

        console.log('DTB匹配结果:', dtbMatches);

        // 根据匹配的DTB名称查找对应的设备
        let matchedDevicesInfo = [];
        let matchType = 'none';
        let exactMatchedDtbNames = []; // 精确匹配的DTB名称
        let screenMatchedDtbNames = []; // 屏幕参数匹配的DTB名称

        if (dtbMatches.hasExactMatch) {
            matchType = 'exact';
            const result = identifier.findDevicesByDtbNames(dtbMatches.exactMatches);
            matchedDevicesInfo = result.devicesInfo;
            exactMatchedDtbNames = dtbMatches.exactMatches.map(match => match.dbItem.name);
            console.log('精确匹配设备:', matchedDevicesInfo);
            console.log('精确匹配DTB名称:', exactMatchedDtbNames);
        }

        // 屏幕参数匹配
        if (dtbMatches.hasScreenMatch) {
            const screenResult = identifier.findDevicesByDtbNames(dtbMatches.screenMatches);
            screenMatchedDtbNames = dtbMatches.screenMatches.map(match => match.dbItem.name);

            if (matchType === 'none') {
                matchType = 'screen';
                matchedDevicesInfo = screenResult.devicesInfo;
            } else {
                // 合并结果，去除重复
                const allDevices = [...matchedDevicesInfo, ...screenResult.devicesInfo];
                const uniqueDevices = [];
                const seenIds = new Set();

                for (const deviceInfo of allDevices) {
                    if (!seenIds.has(deviceInfo.device.id)) {
                        seenIds.add(deviceInfo.device.id);
                        uniqueDevices.push(deviceInfo);
                    }
                }
                matchedDevicesInfo = uniqueDevices;
            }
            console.log('屏幕参数匹配设备:', screenResult.devicesInfo);
            console.log('屏幕参数匹配DTB名称:', screenMatchedDtbNames);
        }

        // 更新状态为完成
        statusElement.textContent = `✅ 识别完成: ${file.name}`;

        // 显示结果
        displayDtbSearchResults(matchedDevicesInfo, md5, arrayBuffer, matchType, dtbMatches, exactMatchedDtbNames, screenMatchedDtbNames);

    } catch (error) {
        console.error('DTB识别错误:', error);
        statusElement.textContent = `❌ 识别失败: ${file.name}`;
        statusElement.style.color = '#ff6b6b';
        alert('识别错误: ' + error.message);
    }
}

// 设置悬浮DTB上传功能
function setupFloatingDtbUpload() {
    const floatingUpload = document.getElementById('floatingDtbUpload');
    const floatingFileInput = document.getElementById('floatingDtbFileInput');
    const floatingUploadArea = document.getElementById('floatingUploadArea');
    const floatingSelectedFile = document.getElementById('floatingSelectedFile');
    const floatingProcessBtn = document.getElementById('floatingProcessBtn'); // 这个按钮将被移除
    const floatingCloseBtn = document.querySelector('.floating-dtb-close');

    if (!floatingUpload || !floatingFileInput) {
        console.log('悬浮DTB上传元素未找到，跳过初始化');
        return;
    }

    let currentFile = null;
    const identifier = new DTBIdentifier();

    // 文件选择事件 - 自动识别
    floatingFileInput.addEventListener('change', async function (e) {
        console.log('文件选择事件触发', e.target.files);
        if (e.target.files.length > 0) {
            currentFile = e.target.files[0];
            console.log('选择的文件:', currentFile.name, currentFile.size);
            floatingSelectedFile.textContent = `⏳ 正在识别: ${currentFile.name} (${(currentFile.size / 1024).toFixed(1)} KB)`;
            floatingSelectedFile.style.display = 'block';

            // 自动开始识别
            await processDtbFile(currentFile, identifier, floatingSelectedFile);
        } else {
            console.log('没有选择文件');
            floatingSelectedFile.style.display = 'none';
        }
    });

    // 拖放事件
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        floatingUploadArea.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        floatingUploadArea.addEventListener(eventName, () => floatingUploadArea.classList.add('dragover'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        floatingUploadArea.addEventListener(eventName, () => floatingUploadArea.classList.remove('dragover'), false);
    });

    floatingUploadArea.addEventListener('drop', async function (e) {
        const files = e.dataTransfer.files;
        if (files.length > 0 && (files[0].name.endsWith('.dtb') || files[0].name.endsWith('.dtbo'))) {
            floatingFileInput.files = files;
            currentFile = files[0];
            floatingSelectedFile.textContent = `⏳ 正在识别: ${currentFile.name} (${(currentFile.size / 1024).toFixed(1)} KB)`;
            floatingSelectedFile.style.display = 'block';

            // 自动开始识别
            await processDtbFile(currentFile, identifier, floatingSelectedFile);
        }
    });

    // 移除处理按钮的相关代码
    if (floatingProcessBtn) {
        floatingProcessBtn.style.display = 'none'; // 隐藏按钮
    }

    // 关闭按钮事件
    if (floatingCloseBtn) {
        floatingCloseBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            floatingUpload.style.display = 'none';
            // 重置状态
            floatingFileInput.value = '';
            floatingSelectedFile.style.display = 'none';
        });
    }

    console.log('悬浮DTB上传功能初始化完成');
}

// 显示DTB搜索结果的函数
function displayDtbSearchResults(matchedDevicesInfo, md5, arrayBuffer, matchType, dtbMatches, exactMatchedDtbNames = [], screenMatchedDtbNames = []) {
    const grid = document.getElementById('device-grid');
    const searchInput = document.getElementById('search-input');

    if (!grid) return;

    let resultsHtml = '';

    // 添加DTB识别信息头部
    resultsHtml += `
        <div class="search-results-header" style="grid-column: 1 / -1; margin-bottom: 2rem;">
            <div style="background: var(--glass); border-radius: 15px; padding: 2rem; border: 1px solid var(--glass-border);">
                <h3 style="color: var(--secondary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-microchip"></i> DTB识别结果
                </h3>
                <div style="color: #ccc; line-height: 1.6;">
                    <div><strong>文件MD5:</strong> <code>${md5}</code></div>
                    <div><strong>文件大小:</strong> ${arrayBuffer.byteLength} 字节</div>
                </div>
    `;

    // 检查是否有任何匹配（设备匹配或DTB匹配）
    const hasAnyMatch = matchedDevicesInfo.length > 0 || exactMatchedDtbNames.length > 0 || screenMatchedDtbNames.length > 0;

    if (hasAnyMatch) {
        let matchText = '';
        let matchClass = '';

        if (matchType === 'exact') {
            matchText = `✅ <strong>精确匹配！</strong>`;
            matchClass = 'match-success';
        } else {
            matchText = `⚠️ <strong>屏幕参数匹配</strong>`;
            matchClass = 'match-warning';
        }

        resultsHtml += `
            <div class="${matchClass}" style="margin-top: 1rem;">
                ${matchText}
            </div>
        `;

        // 只在有精确匹配时才显示"精确匹配DTB"
        if (exactMatchedDtbNames.length > 0) {
            resultsHtml += `
                <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #4EC9B0;">
                    <strong>精确匹配DTB:</strong> ${exactMatchedDtbNames.join(', ')}
                </div>
            `;
        }

        // 显示屏幕参数匹配的DTB信息
        if (screenMatchedDtbNames.length > 0) {
            resultsHtml += `
                <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #FFD700;">
                    <strong>屏幕参数匹配DTB:</strong> ${screenMatchedDtbNames.join(', ')}
                </div>
            `;
        }
    } else {
        resultsHtml += `
            <div class="match-info" style="margin-top: 1rem;">
                ❓ <strong>未找到匹配设备</strong> 该DTB文件不在当前设备数据库中
            </div>
        `;
    }

    resultsHtml += `</div></div>`;

    // 显示匹配的设备卡片 - 使用新的卡片结构
    if (matchedDevicesInfo.length > 0) {
        const uniqueDevices = [];
        const seenDeviceIds = new Set();

        for (const info of matchedDevicesInfo) {
            if (!seenDeviceIds.has(info.device.id)) {
                seenDeviceIds.add(info.device.id);
                uniqueDevices.push(info.device);
            }
        }

        // 使用新的卡片结构，但添加匹配徽章
        resultsHtml += uniqueDevices.map(device => {
            // 获取首页显示的图片（gallery中的第一张图片）
            const mainImage = device.gallery && device.gallery.length > 0 ? device.gallery[0] : null;
            const imagePath = mainImage ? mainImage.path : '../images/placeholder.jpg';

            // 判断设备是精确匹配还是屏幕参数匹配
            let deviceMatchType = 'screen'; // 默认屏幕参数匹配
            if (matchType === 'exact') {
                // 检查这个设备是否在精确匹配的DTB中
                const deviceDtbNames = device.dtbNames || [];
                const isExactMatch = deviceDtbNames.some(dtbName => exactMatchedDtbNames.includes(dtbName));
                deviceMatchType = isExactMatch ? 'exact' : 'screen';
            }

            // 匹配徽章的样式
            const badgeStyle = deviceMatchType === 'exact'
                ? 'background: var(--primary);'
                : 'background: #FFA500;';

            // 在显示匹配的设备卡片部分修改：
            return `
<div class="device-card" data-device="${device.id}" onclick="showDeviceDetails('${device.id}', devicesData.devices)">
    <div class="device-header" style="position: relative;">
        <div class="device-model">${device.model}</div>
        <div class="device-category">${device.category}</div>
        <div class="device-description">${device.description || '暂无描述'}</div>
        <!-- 添加匹配徽章到设备型号右上角 -->
        <div class="match-badge" style="position: absolute; top: 10px; right: 10px; ${badgeStyle} color: white; padding: 0.3rem 0.6rem; border-radius: 15px; font-size: 0.7rem; font-weight: 600; z-index: 10;">
            <i class="fas fa-check"></i> ${deviceMatchType === 'exact' ? '精确匹配' : '参数匹配'}
        </div>
    </div>
    <div class="device-image">
        <img src="${imagePath}" 
             alt="${device.model}" 
             onerror="this.src='../images/placeholder.jpg'">
    </div>
    <button class="view-details" data-device="${device.id}">查看详情</button>
</div>
`;
        }).join('');
    } else if (hasAnyMatch) {
        // 没有设备信息，但有DTB匹配 - 显示DTB匹配信息
        let matchIcon = '';
        let matchTitle = '';
        let matchDescription = '';

        if (matchType === 'exact') {
            matchIcon = '✅';
            matchTitle = 'DTB匹配成功';
            matchDescription = '成功匹配到以下DTB配置：';
        } else {
            matchIcon = '⚠️';
            matchTitle = '屏幕参数匹配成功';
            matchDescription = '仅屏幕参数匹配成功：';
        }

        // 合并所有DTB名称用于显示
        const allDtbNames = [...exactMatchedDtbNames, ...screenMatchedDtbNames];

        resultsHtml += `
            <div class="no-device-info" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; color: var(--accent); margin-bottom: 1rem;">
                    <i class="fas fa-microchip"></i>
                </div>
                <h3 style="color: var(--light); margin-bottom: 1rem;">${matchTitle}</h3>
                <p style="color: #ccc; margin-bottom: 1rem;">
                    ${matchIcon} ${matchDescription}<br>
                    <strong style="color: var(--secondary); font-size: 1.2rem;">${allDtbNames.join(', ')}</strong>
                </p>
                <p style="color: #888; margin-bottom: 2rem; font-size: 0.9rem;">
                    ${matchType === 'exact'
                ? '该DTB文件已成功识别，但设备详细信息暂未收录到数据库中。'
                : '该DTB文件通过屏幕参数匹配成功，但设备详细信息暂未收录到数据库中。'}
                    <br>
                    <small>MD5: ${md5}</small>
                </p>
                <button onclick="loadDevices()" class="view-details" style="width: auto; padding: 0.8rem 2rem;">
                    <i class="fas fa-arrow-left"></i> 返回所有设备
                </button>
            </div>
        `;
    } else {
        // 完全没有匹配
        resultsHtml += `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; color: var(--accent); margin-bottom: 1rem;">
                    <i class="fas fa-search"></i>
                </div>
                <h3 style="color: var(--light); margin-bottom: 1rem;">未找到匹配设备</h3>
                <p style="color: #ccc; margin-bottom: 2rem;">
                    当前DTB文件未在设备数据库中找到匹配项<br>
                    <small style="color: #888;">MD5: ${md5}</small>
                </p>
                <button onclick="loadDevices()" class="view-details" style="width: auto; padding: 0.8rem 2rem;">
                    <i class="fas fa-arrow-left"></i> 返回所有设备
                </button>
            </div>
        `;
    }

    grid.innerHTML = resultsHtml;

    // 重新绑定查看详情按钮事件
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const deviceId = button.getAttribute('data-device');
            showDeviceDetails(deviceId, devicesData.devices);
        });
    });

    // 清空搜索框
    if (searchInput) {
        searchInput.value = '';
    }

    // 滚动到设备网格区域
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 图片查看功能
let currentGallery = [];
let currentImageIndex = 0;

// 打开图片模态框
function openImageModal(imageSrc, imageTitle, galleryJson = null) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalImageTitle');

    // 设置当前图片
    modalImage.src = imageSrc;
    modalTitle.textContent = imageTitle;

    // 设置当前图库和索引
    if (galleryJson) {
        try {
            currentGallery = JSON.parse(galleryJson);
            currentImageIndex = currentGallery.findIndex(item => item.path === imageSrc);
        } catch (e) {
            console.error('解析图库数据失败:', e);
            currentGallery = [];
            currentImageIndex = 0;
        }
    } else {
        // 如果没有提供图库，从当前设备详情中获取
        const galleryItems = document.querySelectorAll('.gallery-item img');
        currentGallery = Array.from(galleryItems).map(img => ({
            path: img.src,
            title: img.alt
        }));
        currentImageIndex = Array.from(galleryItems).findIndex(img => img.src === imageSrc);
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 禁止背景滚动
}

// 关闭图片模态框
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // 恢复背景滚动
    currentGallery = [];
    currentImageIndex = 0;
}

// 导航图片
function navigateImage(direction) {
    if (currentGallery.length === 0) return;

    currentImageIndex += direction;

    // 循环导航
    if (currentImageIndex < 0) {
        currentImageIndex = currentGallery.length - 1;
    } else if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = 0;
    }

    const image = currentGallery[currentImageIndex];
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalImageTitle');

    modalImage.src = image.path;
    modalTitle.textContent = image.title;
}

// 键盘导航支持
document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('imageModal');
    if (modal.style.display === 'block') {
        switch (e.key) {
            case 'Escape':
                closeImageModal();
                break;
            case 'ArrowLeft':
                navigateImage(-1);
                break;
            case 'ArrowRight':
                navigateImage(1);
                break;
        }
    }
});

// 点击模态框背景关闭
document.getElementById('imageModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeImageModal();
    }
});
// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('device-modal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // 初始化悬浮DTB上传
    setupFloatingDtbUpload();

    // 加载设备数据
    loadDevices();
});

console.log('设备识别脚本加载完成');