module.exports = {
    head: {
        title: "巨角集团",
        javascript: [
            "/script/jquery-3.3.1.min.js",
            "/script/jquery.cookie.js",
            "/script/swiper.min.js",
            "/script/common.js",
        ],
        style: [
            "/style/normalize.css",
            "/style/swiper.min.css",
            "/style/flex.css",
            "/style/main.css",
            "/style/animate.min.css",
        ]
    },
    menu: [
        {label: "首页", path: "/"},
        {label: "即将上映", path: "/#slide_index_1"},
        {label: "巨角作品", path: "/production"},
        {label: "新闻报道", path: "/news"},
        {label: "集团简介", path: "/about"},
        {label: "联系我们", path: "/contact-us"},
    ],
    home: {
        banner: [
            "/images/home/banner-1.jpg",
            "/images/home/banner-2.jpg",
            "/images/home/banner-3.jpg",
            "/images/home/banner-4.jpg",
            "/images/home/banner-5.jpg",
            "/images/home/banner-6.jpg",
        ],
        s2: {
            banner: "/images/home/banner-7.jpg",
            imgls: [{
                src: "/images/home/img-3.jpg",
                label: "千代美"
            }, {
                src: "/images/home/img-4.jpg",
                label: "南 瞬"
            }, {
                src: "/images/home/img-5.jpg",
                label: "纱 衣"
            }],
            title: "小南的迷你情人",
            text: "小南与千代美是一对高中生恋人，两人交往了11个月谈着纯纯的恋爱。有一天千代美与小南吵架 后，骑单车不慎跌落桥下，醒来后竟然变成只有 16厘米高的“迷你千代美”，一段不可思议的奇幻 爱情故事就此拉开序幕... ",
        },
        s3: [[
            {src: "/images/home/banner-8.jpg", label: "《网剧疯神榜》<br />播放破800万", path: "/production/2#slide2_5"},
            {src: "/images/home/banner-9.jpg", label: "我的灵界男友", path: "/production/1#slide1_2"},
            {src: "/images/home/banner-10.jpg", label: "恶作剧之吻", path: "/production/1#slide1_1"},
            {src: "/images/home/banner-11.jpg", label: "平安银行", path: "/production/0#slide0_0"},
        ], [
            {src: "/images/home/banner-12.jpg", label: "我喜欢你，你知道吗？", path: "/production/1#slide1_0"},
            {src: "/images/home/banner-13.jpg", label: "花旗银行", path: "/production/0#slide0_1"},
            {src: "/images/home/banner-14.jpg", label: "渣打银行", path: "/production/0#slide0_2"},
            {src: "/images/home/banner-15.jpg", label: "85度C", path: "/production/0#slide0_3"},
        ], [
            {src: "/images/home/banner-16.jpg", label: "梅赛德斯-奔驰", path: "/production/0#slide0_4"},
            {src: "/images/home/banner-17.jpg", label: "史考特证券", path: "/production/0#slide0_5"},
            {src: "/images/home/banner-18.jpg", label: "饭爱豆", path: "/production/2#slide2_4"},
            {src: "/images/home/banner-19.jpg", label: "饭爱豆粉丝破458万", path: "/production/2#slide2_3"},
        ], [
            {src: "/images/home/banner-20.jpg", label: "今日头条阅读量破<br />200万", path: "/production/2#slide2_2"},
            {src: "/images/home/banner-21.jpg", label: "#我的恶作剧之吻#<br />话题榜Top3", path: "/production/2#slide2_1"},
            {src: "/images/home/banner-22.jpg", label: "#豆姐安利#<br />进千万阅读量", path: "/production/2#slide2_0"},
        ]],
        s4: {
            icon: "/icons/more-btn.png",
            morelink: "/news",
            list: [{
                title: "情怀这么用，粉丝才买账！",
                date: "2018/03/01",
                text: "近日，饭爱豆主持#德芙女孩马思纯#话题，发布德芙 新年情感大片，从家人相处的细节中感动粉丝，视频 播放量破800万……"
            }, {
                title: "视频播放突破344万！饭爱豆神秘竞猜引热议！",
                date: "2018/03/01",
                text: "近日，饭爱豆联手台湾著名美肤品牌DR.WU开展了代 言人公布活动，主持#DR.WU新代言人你来猜#话题活 动，与粉丝进行代言人竞互动，话题一上线阅读量 就达近300万……"
            }, {
                title: "豆姐斩获腾讯十大QQ部落之星！明星级认证重磅升级！",
                date: "2018/01/25",
                text: "1月11日，腾讯兴趣部落“心赏之夜”在北京五棵松AMG LIVE隆重召开，饭爱豆豆姐凭借在兴趣部落上的出彩 成绩斩获十大QQ部落之星……"
            }]
        },
        s5: [{
            src: "/images/home/img-1.png",
            title: "影视产业",
            text: "一体化、全方位影视娱乐业务"
        }, {
            src: "/images/home/img-2.png",
            title: "广告营销",
            text: "影视植入/品牌广告/效果广告/舆情监测"
        }, {
            src: "/images/home/img-3.png",
            title: "数据分析",
            text: "所有营销活动及效果分析全部基于数据"
        }],
        s6: {
            titlepic: "/images/home/decoration-1.png",
            icon: "/icons/more-btn.png",
            morelink: "/about",
            list: [{
                src: "/images/home/banner-23.jpg",
                label: "智传文化出品《我的灵界男友》网络播放量破6个亿"
            }, {
                src: "/images/home/banner-24.jpg",
                label: "上海智将广告成为中国广告协会会员"
            }, {
                src: "/images/home/banner-25.jpg",
                label: "上海智将广告成为上海市广告协会会员单位"
            }]
        },
        s7: {
            qrcode: ["/images/home/img-1.jpg", "/images/home/img-2.jpg"],
            list: [{
                src: "/images/home/map-sh.jpg",
                label: "总部：<br />上海市徐汇区襄阳北路97号襄阳大楼308室、506室"
            }, {
                src: "/images/home/map-bj.jpg",
                label: "北京：<br />朝阳区建国路93号院4号楼3006室"
            }]
        }
    },
    production: [{
        title: "智将广告",
        btn: "/icons/more-btn_2.png",
        list: [{
            banner: "/images/production/a-banner-1.jpg",
            logo: "/images/production/a-logo-1.jpg",
            title: "平安银行",
            text: "公司于2010年与平安银行开始合作，为其贷款产品进行网络推广。常规媒体广告Banner投放结合EDM定时推送，有效增加受众曝光量，另一方面在调整页面设计的同时亦不断整合完善各个资源的投放策略及活动形式，从而有效提升贷款申请人数。",
            link: "http://www.omsys.com.cn/pingan/index/cGluZ2FuXzMwMTFfMF95ZXM=",
        }, {
            banner: "/images/production/a-banner-2.jpg",
            logo: "/images/production/a-logo-2.jpg",
            title: "花旗银行",
            text: "公司于2010年3月与花旗银行合作至今。为花旗银行旗下幸福时贷、信用卡、美元定存等多个产品进行推广宣传。通过免费帮客户设计Banner、Landingpage、EDM、Minisite等，不断调整广告素材获取高转化率，并在各大媒体的曝光结合活动策划从而让其知名度在国内进...",
            link: "http://www.omsys.com.cn/huaqic/index/aHVhcWljXzM1MDZfMF95ZXM=",
        }, {
            banner: "/images/production/a-banner-3.jpg",
            logo: "/images/production/a-logo-3.jpg",
            title: "渣打银行",
            text: "公司于2010年与渣打银行(中国)开始合作，经过我公司在贷款行业的经验及资源结合行业调查研究,为其贷款产品“现贷派”进行市场推广经营。与其合作的一年多以来，在公司各渠道研究（包括特通渠道、网络页面等）等的数据基础，定期为其产品设立推广...",
            link: "http://www.omsys.com.cn/scbank/index/c2NiYW5rXzI2MTRfMF95ZXM=",
        }, {
            banner: "/images/production/a-banner-4.jpg",
            logo: "/images/production/a-logo-4.jpg",
            title: "85度C",
            text: "公司于2013年与85度C开始合作，为其进行网络舆情监测及重大舆情应急处理工作及品牌传播，截止2015年5月共监测互联网舆情信息2227条，针对负面舆情给予合理建议，有效控制大规模传播及负面影响。",
            link: "http://www.85cafe.asia/",
        }, {
            banner: "/images/production/a-banner-5.jpg",
            logo: "/images/production/a-logo-5.jpg",
            title: "梅赛德斯-奔驰",
            text: "公司于2013年与上海星翰合作，为其进行梅赛德斯奔驰线下品鉴试驾活动网络推广。在设定区域限制的条件下，单场活动电话预约成功率达到60%以上，到场率达到50%以上，网络推广效果显著。",
            link: "http://www.omsys.com.cn/benz/index/YmVuel8zNTE5XzBfeWVz",
        }, {
            banner: "/images/production/a-banner-6.jpg",
            logo: "/images/production/a-logo-6.jpg",
            title: "史考特证券",
            text: "公司于2009年开始与史考特证券开始合作，为其进行网络市场营销推广。通过免费帮客户设计Banner、Landingpage、EDM等，不断调整广告素材获取高转化率，成功吸引受众关注，并积极相应活动，不仅为其成功开拓国内市场，也为国内财经门户丰富内容，提供更好的资...",
            link: "https://chinese.scottrade.com/",
        }]
    }, {
        title: "智传文化",
        btn: "/icons/more-btn_2.png",
        list: [{
            banner: "/images/production/b-banner-1.jpg",
            logo: "/images/production/b-logo-1.jpg",
            title: "我喜欢你,你知道吗？",
            text: "我喜欢你，你知道吗？》是由上海聚力传媒技术有限公司出品、香港巨角集团制作的网络剧。该剧根据网络作家我和你的同名小说改编，由沈建宏、吴思贤、陈语安、郑暐达、纪培慧等主演，讲述了两个独立主题、推陈出新的暗恋故事。",
            link: "http://v.pptv.com/show/Qy21MpoAcK4Rj1M.html?rcc_id=baiduchuisou",
        }, {
            banner: "/images/production/b-banner-2.jpg",
            logo: "/images/production/b-logo-2.jpg",
            title: "恶作剧之吻",
            text: "《恶作剧之吻》（2016）由香港巨角集团、上海聚力传媒技术有限公司联合出品，改编自日本著名漫画《淘气小亲亲》，之前已有日、韩、台、泰四个版本，再次翻拍剧情更精彩。剧集2016年4月在台湾取景拍摄，12月8日登录PPTV聚力播出，上海智传文化传播有限公司全...",
            link: "http://v.pptv.com/show/7Fg0shqA8C6RD3c.html?rcc_src=www_index",
        }, {
            banner: "/images/production/b-banner-3.jpg",
            logo: "/images/production/b-logo-3.jpg",
            title: "我的灵界男友",
            text: "优酷土豆股份有限公司、上海智传影视传媒有限公司2014年联合出品，陈匡怡、刘以豪、张睿家等主演的网络剧。该剧讲述鬼魂凌宏沛、宅男王书海与校花韩思宜之间的三角恋故事，是一部融灵异、爱情、偶像为一体的青春轻喜剧。2015年8月24日在优酷土豆、PPTV聚力...",
            link: "http://v.youku.com/v_show/id_XMTMxNzExNDYzNg==.html?tpa=dW5pb25faWQ9MTAzNjY3XzEwMDAwMV8wMV8wMQ",
        }]
    }, {
        title: "将烁技术",
        btn: "/icons/more-btn_2.png",
        list: [{
            banner: "/images/production/c-banner-1.jpg",
            logo: "/images/production/c-logo-1.jpg",
            title: "#豆姐安利#<br />近千万阅读量",
            text: "搭建粉丝与爱豆之间的桥梁，微博@饭爱豆_港台娱乐发起#豆姐安利#活动，定期安利一个明星，如果该安利博被其粉丝转发过万，饭爱豆便为粉丝提供一次机会：接受视频或图文投稿，通过覆盖的渠道向大众安利该明星，活动获得粉丝热情参与。",
            link: "http://weibo.com/p/1008080c9e2e08497cc6914aa42afee17767a1",
        }, {
            banner: "/images/production/c-banner-2.jpg",
            logo: "/images/production/c-logo-2.jpg",
            title: "#我的恶作剧之吻#<br />话题榜Top3",
            text: "饭爱豆负责新版《恶作剧之吻》大陆宣传，配合剧的更新不断发布图文、视频等信息，以保证剧的曝光量与热度，更多次发起线上活动，其中#我的恶作剧之吻#活动发布后即刻登上微博情感话题榜第3，阅读量也不断攀升。",
            link: "http://weibo.com/p/100808b105c55dfae5aae4714aee26d48027a7",
        }, {
            banner: "/images/production/c-banner-3.jpg",
            logo: "/images/production/c-logo-3.jpg",
            title: "今日头条阅读量<br />破200万",
            text: "饭爱豆娱乐资讯覆盖社交、图文、视频、音频、实体等多个渠道，其中图文报道在今日头条的成绩最为显眼，阅读量最高曾突破200万！多条图文阅读超过100万。",
            link: "http://www.toutiao.com/m5721659302/",
        }, {
            banner: "/images/production/c-banner-4.jpg",
            logo: "/images/production/c-logo-3.jpg",
            title: "饭爱豆微博粉丝<br />超458万",
            text: "饭爱豆作为巨角集团娱乐资讯全网分发平台（MCN），除了发布娱乐新闻外，更以新浪微博为大本营、以服务粉丝为目标进行粉丝运营。旗下共17个账号，微博粉丝超517万，且不断快速增加中。",
            link: "http://weibo.com/u/5687064835?refer_flag=1008085010_&is_hot=1",
        }, {
            banner: "/images/production/c-banner-5.jpg",
            logo: "/images/production/c-logo-3.jpg",
            title: "饭爱豆",
            text: "饭爱豆致力于发布一手娱乐明星资讯和各地现场活动动态，线上周周送福利，线下明星探班。还负责推广经纪公司旗下艺人和明星代言产品活动，搭建明星与粉丝桥梁，电视剧、电影官方微博宣传，是粉丝们的好伙伴，你不可或缺的陪伴。",
            link: "http://weibo.com/u/5687064835?from=feed&loc=at&nick=%E9%A5%AD%E7%88%B1%E8%B1%86FanIdol&is_hot=1",
        }, {
            banner: "/images/production/c-banner-6.jpg",
            logo: "/images/production/c-logo-6.jpg",
            title: "《网剧疯神榜》<br />播放破800万",
            text: "饭爱豆与新浪微博@微综艺合作，结合微博热度和播放数据，打造权威网剧人气榜单。每周五上线，点评推荐一周最热的5部网剧，并特邀当红明星担任揭榜嘉宾，得到明星、上榜剧组和明星粉丝的积极转发。",
            link: "http://weibo.com/p/100808fc02a653036ad91604b575b801164b8f",
        }]
    }],
    news: [{
        title: "新闻动态",
        list: [
            {title: "情怀这么用，粉丝才买账！", date: "2018/03/01", text: "近日，饭爱豆主持#德芙女孩马思纯#话题，发布德芙 新年情感大片，从家人相处的细节中感动粉丝，视频 播放量破800万……"},
            {title: "视频播放突破344万！饭爱豆神秘竞猜引热议！", date: "2018/03/01", text: "近日，饭爱豆联手台湾著名美肤品牌DR.WU开展了代 言人公布活动，主持#DR.WU新代言人你来猜#话题活 动，与粉丝进行代言人竞猜互动，话题一上线阅读量 就达近300万……"},
            {title: "豆姐斩获腾讯十大QQ部落之星！明星级认证重磅升级！", date: "2018/01/25", text: "1月11日，腾讯兴趣部落“心赏之夜”在北京五棵松AMG LIVE隆重召开，饭爱豆豆姐凭借在兴趣部落上的出彩 成绩斩获十大QQ部落之星……"},
            {title: "智将广告正式签约汇丰银行，精准营销助其推广个人业务", date: "2018/01/25", text: "智将广告日前与汇丰银行（中国）公司签约，成为HS BC个人零售银行业务网络推广的合作伙伴"},
            {title: "最强IP影视化启动！智传文化出击漫改市场", date: "2018/01/25", text: "近日，上海智传文化有限公司正式公布《小南的迷你 情人》影视开发决定。该IP在日本拥有超高人气，分别 于1990年、1994年、2004年、2015年四度改编为影 视剧，受到观众好评。而红遍亚洲的《流星花园》、 《恶作剧之吻》在日本分别只有过一、二次电视剧改编 经历，相比之下《小南》的IP能量更加可观。智传文化 于2016年购入《小南..."},
            {title: "网剧“10亿+”俱乐部出炉！《恶吻》成唯一入榜日漫翻拍作！", date: "2018/01/25", text: "近日，在中国网络视听节目服务协会发布的《2017中 国网络视听发展研究报告》中，新版《恶作剧之吻》与 《老九门》、《青云志》等投资过亿的平台主推大剧共 同入围网剧“10亿+”俱乐部。以千万投资收获14.95亿 播放量完美收官，成为PPTV唯一入围剧集，也是“10 亿+”俱乐部中仅有的一部日漫翻拍剧。"},
            {title: "阅读量达4.5亿！#豆姐在现场#为何让粉丝欲罢不能", date: "2017/11/28", text: "日前，饭爱豆话题 #豆姐在现场# 阅读量达到4.5亿并 成功升级为微博超级话题。4.5亿是什么概念？按照如 今我国近14亿总人口数来看，该话题阅读量约等于全 国人口的三分之一，饭爱豆到底用什么样的内容和方 式造就了如此成绩呢？"},
            {title: "#潮范系男神来袭#阅读量破千万，饭爱豆助力I.T告捷", date: "2017/11/24", text: "日前，饭爱豆助力潮流时装品牌I.T双十一活动品牌合作 活动。本次活动中，饭爱豆全网发布多种相关内容，活 动微博话题总阅读量破1000万，成功为I.T品牌双十一 活动造势。"},
            {title: "饭爱豆助力话题热搜榜，#宋仲基抱娃#冲榜 Top1", date: "2017/11/24", text: "日前，饭爱豆助力微博话题热搜榜，发布娱乐明星类 内容话题 #宋仲基抱娃# 再次轻松冲进话题热搜 Top1。"},
            {title: "#豆姐在现场#阅读量破2.8亿，独家前线记者覆盖全球", date: "2017/09/27", text: "日前，饭爱豆机场街拍话题 #豆姐在现场# 势头大好， 该微博话题阅读量已突破2.8亿。话题内机场街拍图片， 由饭爱豆派遣至全球各大机场的独家前线记者拍摄。 该机场街拍网络是饭爱豆获取一手资讯的王牌力量。"},
            {title: "饭爱豆助力TFBOYS粉丝嘉年华宣传！成为活动唯一合作伙伴", date: "2017/08/28", text: "日前，饭爱豆助力宣传TFBOYS四周年粉丝嘉年华宣传， 并成为此次活动唯一合作伙伴。值得一提的是，饭爱豆 还为此次活动提供了特别定制款饮用水，并在微博上为 粉丝带来海量现场福利"},
            {title: "饭爱豆助沙宣权志龙，话题阅读量日破千万！", date: "2017/07/24", text: "日前，权志龙为沙宣代言引领千变逆型。饭爱豆（巨角集团）助力宣传并创建话题#暗黑系男神大盘点#阅 读量日破千万！其制作发布的秒拍视频，播放量单日 破百万！"},
            {title: "智传文化宣发网综《厉害了我滴星》，首播破400万~ 明星榜第一！话题榜第二！", date: "2017/06/23", text: "近日，智传文化（巨角集团）宣发了一档全新大型网 红养成类节目《厉害了我滴星》，由浙江广电集团唯一 官方视频平台“中国蓝TV”和腾讯视频联合独家播出。"},
            {title: "智将广告牵线花旗银行与第一财经直播合作，直播当晚观看量破10万+", date: "2017/04/20", text: "日前，智将广告（巨角集团）牵线花旗银行与第一财 经达成首次直播合作，为资讯者们提供了一手的新鲜 讯息，直播当晚观看人数破10万+。"},
            {title: "饭爱豆入驻梨视频，锁定资讯类短视频领先者", date: "2017/03/24", text: "饭爱豆（巨角集团）与“梨视频”达成合作，成功入驻 该平台。进驻不久，饭爱豆发布的视频就获得梨视频 娱乐版的推荐席位，成绩非凡。此次合作是饭爱豆开 拓MCN模式中的重要一环。"},
            {title: "饭爱豆主持话题#真人版樱桃小丸子#进榜Top1！助剧取得开门红！", date: "2017/02/24", text: "饭爱豆（巨角集团）为真人版《樱桃小丸子》进行宣 传，主持的话题#真人版樱桃小丸子#登上微博电视剧 话题榜top1、阅读量高达1.2亿，成绩骄人。"},
            {title: "骨朵总榜第4《恶吻》破9亿播放", date: "2017/01/24", text: "由智传文化（巨角集团）、PPTV聚力、SPO Entertainment Inc、王牌娱乐联合出品的新版《恶作 剧之吻》目前已取得9亿播放，强势进军网剧总播榜第 四名。随着剧情的发展，该剧已成功虏获网友“芳心”， 收获大量粉丝。"},
            {title: "饭爱豆联合新浪出品《网剧疯神榜》播放破470万", date: "2016/12/23", text: "饭爱豆（巨角集团）与新浪微综艺携手打造《网剧疯 神榜》，上线4期成绩惊人，其中第二期秒拍播放突破 470万。"},
            {title: "饭爱豆助腾讯“耳边疯”宣传播放破500万！超真实整蛊综艺", date: "2016/11/24", text: "腾讯视频最新自制全民遥控整蛊明星真人秀《耳边疯》 上线，明星被主持团远程操控指挥在日常场景中做出搞 笑举动，爆笑节目引关注；饭爱豆（巨角集团）为该综 艺进行线上宣传，相关视频秒拍播放量超500万。"},
            {title: "方文山力邀霹雳布袋戏参展，饭爱豆助力话题登榜Top11", date: "2016/11/24", text: "10月29日西塘汉服文化周开幕，霹雳布袋戏受邀参展， 方文山亲至展区并力赞；饭爱豆(巨角集团)协助霹雳对 本次参展进行多方位线上宣传，助力#霹雳布袋戏#话 题登上动漫榜第11名，活动大获成功。"},
            {title: "霹雳布袋戏惊艳爱奇艺动漫嘉年华", date: "2016/10/24", text: "饭爱豆协助霹雳布袋戏参加“2016爱奇艺动漫游戏嘉年 华”，成为全场焦点，期间#霹雳布袋戏#与#霹雳嘉年 华#两大话题分别荣进动漫热搜榜第9和第12名！"},
            {title: "《一吻定情》正式杀青 创意直播引关注", date: "2016/09/26", text: "由巨角集团、日本SPOEntertainment Inc.、PPTV聚 力及台湾王牌娱乐合资拍摄的网剧《一吻定情》（201 6）8月31日全面杀青，于30日创新进行杀青直播，引 发粉丝热烈关注。"},
            {title: "《我喜欢你，你知道吗》开播在即 PPTV聚力精彩呈现", date: "2016/08/24", text: "由智传文化（巨角集团）制作、PPTV聚力投资出品的2016“暗恋”IP改编新剧《我喜欢你，你知道吗？》初 定9月开播，将由PPTV聚力精彩呈现。"},
            {title: "智将广告搭载春秋航空：开拓推广新平台", date: "2016/07/25", text: "智将广告（巨角集团）与春秋航空达成合作，为客户 进行线上广告推广。不断挖掘优质媒体是智将广告服 务客户的承诺，此次与春秋航空达成合作，将主要为 渣打信用卡、平安普惠、易信等客户进行线上推广。 智将广告依托集团影视资源优势，实现线上与线下、 影视娱乐与广告营销的全面跨界整合，提供影视剧植 入、影视宣传服务。"},
            {title: "饭爱豆娱乐新闻正式入驻小米电视", date: "2016/06/24", text: "饭爱豆（巨角集团）继5月初用户超1600万后，5月底 娱乐新闻正式入驻小米电视，搭载互联网电视平台开启 粉丝服务新旅程。饭爱豆通过发布娱乐新闻进行粉丝运 营，此次入驻小米电视，是发布渠道的扩张和创新，定 会给粉丝、明星带来新惊喜！"},
            {title: "智传新剧《我喜欢你，你知道吗？》杀青 主演大呼不舍", date: "2016/05/24", text: "由智传影视（巨角集团）负责拍摄制作、PPTV聚力投 资的2016“暗恋”IP《我喜欢你，你知道吗？》开机仪 式后进入拍摄阶段，5月6日全组杀青。剧集分爱·戒篇 和爱&mid"},
            {title: "神IP《一吻定情》最新翻拍开机启动，经典重现or蜜汁惊喜？敬请期待！", date: "2016/04/25", text: "号外！号外！由巨角集团、日本SPO Entertainment Inc.、PPTV聚力及台湾王牌娱乐合资拍摄的网剧《一 吻定情》（2016）开机仪式4月21日于台湾举行。之 前日本、台湾、泰国等版本取得不俗收视成绩……"},
            {title: "饭爱豆#电视剧品质盛典#投票活动掀参与狂潮", date: "2016/03/24", text: "3月8日，东方卫视2016电视剧品质盛典举行，胡歌、 霍建华、刘诗诗、靳东等大咖悉数亮相。巨角集团旗 下娱乐推广平台饭爱豆当晚发起#电视剧品质盛典#投 票，1天内过万粉丝参与投票，热度持续飙高。"},
            {title: "饭爱豆（巨角集团）粉丝迎来新伙伴霹雳布袋戏", date: "2016/03/09", text: "日前，饭爱豆（巨角集团）迎来新伙伴霹雳布袋戏， 为其开设微博账号饭爱豆_霹雳布袋戏开启粉丝运营合 作。霹雳布袋戏自1984年创始至2015年已创作播出 2000余集，凭借优秀传统的表演形式和新颖奇幻的武 侠风格席卷两岸三地，锁定大批粉丝。"},
            {title: "饭爱豆#祝偶像情人节快乐#投票活动热力开启", date: "2016/03/09", text: "2月12日，饭爱豆微博总号饭爱豆FanIdol发布话题#祝 偶像情人节快乐#号召粉丝投票。微博发出几天内8000 多人参与投票，5000多人转发和评论，凸显饭爱豆粉 丝营销实力。"},
            {title: "《我的灵界男友》网络播放量近五亿", date: "2015/11/06", text: "在线热播两个多月，临近收官热度不减，网络播放量 持续走高，目前，该剧在双平台的网络总播放也高达 4.8亿，稳居全网网络剧排行榜第二名。"},
            {title: "《我的灵界男友》播放量破3亿", date: "2015/11/06", text: "上海智将广告有限公司为《我的灵界男友》进行市场 推广，通过微博、微信、常规媒体、热门APP相结合 的宣传方式，宣传物料结合时下热点，成功吸引粉丝 关注，创下蝉联网络播放量排名前三的好成绩。"},
            {title: "《我的灵界男友》排名第二", date: "2015/11/06", text: "智将广告为《我的灵界男友》做网络推广，骨朵数据 播放量排名网络剧第二。"},
            {title: "智将广告与号码百事通达成合作", date: "2015/11/06", text: "智将广告与号码百事通达成合作，为其进行第四季度 微信服务号运营及推广"},
        ]
    }, {
        title: "媒体报道",
        list: [{
            title: "中华娱乐网：《我的灵界男友》网络播放近五亿PPTV聚力全网领先",
            date: "2015/11/17",
            text: "在PPTV聚力热播两个多月的奇幻偶像剧《我的灵界男 友》临近收官热度不减，网络播放量持续走高，目前，该剧在双平台的网络总播放也高达4.8亿，稳居全网网络剧排行榜第二名。",
            link: "http://www.yule.com.cn/html/201511/7403.html",
        }, {
            title: "网易娱乐：《我的灵界男友》定档开播基情上演“人鬼奇缘”",
            date: "2015/11/03",
            text: "由优酷土豆股份有限公司、上海智传影视传媒有限公司联合出品的《我的灵界男友》敲定上线日期，8月2 4日中午12点准时在优酷土豆、Line TV首播，8月29日起在台湾中文卫视台播出！《我的灵界男友》围绕一块手表上演了一场跌宕起伏的“人鬼奇缘”……",
            link: "http://ent.163.com/15/0819/13/B1CSDB9Q00032DGD.html",
        }],
    }],
    about: {
        text1: "/images/about/img-1.png",
        text2: "战略合作伙伴",
        img: ["/images/about/img-2.png", "/images/about/img-4.png", "/images/about/img-5.png"],
        intr: [
            "<p>巨角集团近11年来由一家效果广告技术公司逐步发展成一家结合媒体资讯、粉丝经济和广告的文娱资讯集团。我们致力于向不同维度的粉丝提供优质内容和服务，以粉丝（用户）为导向，发展结合影视、游戏、动漫、知识等内容和广告的产业链服务。</p><p>集团旗下的品牌“饭爱豆” 是一个全面覆盖各个线上和线下媒体观众的全网分发平台（MCN）。</p><p>饭爱豆拥的粉丝社群运营，可创每周超过2亿浏览量的关注话题，成功达到对粉丝族群的宣传和推广。</p>",
            "<p>BCI致力于剧本编剧、制作公司、投资合作伙伴、发行渠道、宣发等各影视投资环节，完成一体化全方位的影视投资相关内容，全面性与专业性在行业属领先地位。</p>",
            "<p>智将的核心技术在于电子媒体内容授权、效果营销与电子商务、搜寻信息技术架构、广告监测追踪及线上金流操作核心的完整支持。</p>",
            "<p>将烁技术经营以互联网粉丝为核心的粉丝培育和运营、影视娱乐资讯联播网、影视宣传等粉丝产业链相关业务。其自有品牌饭爱豆以服务影视明星粉丝需求为市场导向，打造粉丝主导的专属福利平台。</p>",
            "<p>智传文化从事两岸三地影视版权发行代理，与PPTV、优酷、土豆、腾讯等媒体合作，将台湾、欧美等地的影视资源引进大陆。</p>",
            "<p>GliaCloud 集雅科技股份有限公司，致力于让所有人都能享受人工智能以及大数据所带来的便利。</p>",
            "<p>浩达传播致力于提供更有创意的节目模式，更优质的节目内容，更多元化的影视产业服务。</p>",
            "<p>和骏文创有限公司</p>",
        ],
    },
    contact_us: [{
        label: "广告营销",
        title: "上海智将广告有限公司",
        slogan: "全方位精准营销",
        intr: "智将广告有限公司（上海）成立于2009年，全程为客户提供数字整合营销解决方案，包括在互联网和数字媒体、影视领域的品牌营销，效果营销，内容营销，搜索引擎营销等全方位服务，通过对策略、创意、媒介整合和行业发展的深度洞察及数据分析，帮助客户在e-Marketing方面取得成功。",
        businessCard: ["/images/contact_us/a-img-1.png", "/images/contact_us/a-img-2.png"],
    }, {
        label: "影视合作",
        title: "上海智传文化传播有限公司",
        slogan: "影视制作/版权交易",
        intr: "上海智传文化传播有限公司成立于2011年，业务内容涵盖：采购IP的投资运作、自有IP的创作培育、影视剧制作执行、海内外影视作品发行等影视产业链相关业务。公司具有专业的影视IP分析能力，结合强大的制作团队与优质的媒体宣传资源，打造出诸多优秀的影视作品。上海智传文化传播公司与优酷土豆、腾讯、PPTV聚力等两岸三地各大视频网站及电视台保持长期良好的合作，并通过明星的粉丝效应、专业的宣传营销方案推动影视作品的周边业务。",
        businessCard: ["/images/contact_us/b-img-1.png", "/images/contact_us/b-img-2.png"],
    }, {
        label: "技术支持",
        title: "上海将烁信息技术有限公司",
        slogan: "每款产品都为提高效果服务",
        intr: "将烁信息技术有限公司(上海)成立于2009年，经营以互联网粉丝为核心的粉丝服务及培育运营、网络资讯联播网、影视宣传等粉丝产业链相关业务。其自有品牌饭爱豆从粉丝利益优先以服务粉丝需求为市场导向，打通两岸三地全方位粉丝Social宣传渠道。将影视、明星、粉丝、品牌商家等资源创新整合，打造粉丝主导的专属服务平台；利用影视内容和明星的粉丝效应助推影视宣传、明星宣传及品牌商家宣传，创造四方共同利益最大化。",
        businessCard: ["/images/contact_us/c-img-1.png", "/images/contact_us/c-img-2.png"],
    }],
}