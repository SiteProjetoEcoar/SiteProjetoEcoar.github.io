'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3965e2099c9ab4c0dbf684ea4ddf6ceb",
"assets/AssetManifest.json": "fac3c3770801f510bb17953cdaa43523",
"assets/FontManifest.json": "61daeed0521a26947b512384a712f715",
"assets/fonts/Exo2-VariableFont_wght.ttf": "799e84675774ec8da059c7943cf05c5f",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/images/familiamissionaria.jpeg": "cfef3155c5ed21e9d1302438e1038c83",
"assets/images/images_icon.png": "8862f790d4744898fa417c1964fb04b5",
"assets/images/photo_old.png": "24a47891f9aa713a8186e1f4f29f3f56",
"assets/images/projeto_ecoar/2016/2016_culto_campal3.JPG": "c964e7c65f2fc1f7a23e7c76a01e94ba",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico.JPG": "fa0b944a4c2b8c6576e7390e57930c0d",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_1.JPG": "1e41607769f19576b4622bd8a59e601c",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_2.JPG": "cf358844493b9d5bfcab209023b12205",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_3.JPG": "894c2a42024eca1b9220ba9f9737795f",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_4.JPG": "5e7bfcfba6a1053d117217de51c2248c",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_5.JPG": "9414391869117d4135a20c878288c75e",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_6.JPG": "4b464859eb78280ed8083ecacf151e89",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_7.JPG": "da352e4c8cd3933dc7e6ac05cff44f7a",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_8.JPG": "3ac5d37fcbd5eb5b16e208c831241cc4",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_9.JPG": "ad08c78d80088341a86c7856455b78d6",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_cascudo_ico_ce_1.jpg": "765e59628f007cbcaca5127680a79633",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_cascudo_ico_ce_2.jpg": "123f765b110a9bd5145f766e75290c50",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_1.JPG": "8373b322afe344d5da7bc9e1d470d643",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_2.JPG": "0a8e1a301b58745d0c26334d762e695d",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_4.JPG": "2c48fa23e93a44bd2ed2f39a5eb390bc",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_5.JPG": "c7ccb224aeef32a1594e859b3170a495",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_6.JPG": "5bee72ae4db62af7814b639b4532dd77",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_7.JPG": "bcfc10a40d0afc116cf7ff909508493d",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_8.JPG": "c60ab4bf80ea217fb11ba063788e19b0",
"assets/images/projeto_ecoar/2016/2016_culto_evangelistico_no_ivan_9.JPG": "8e815c5354fc81674123552edaba2f6b",
"assets/images/projeto_ecoar/2016/2016_mudanca_da_palestina_para_o_cascudo_ico_ce_1.jpg": "fc8d0960249518a976a6c78b8fbfb9ec",
"assets/images/projeto_ecoar/2016/2016_mudanca_da_palestina_para_o_cascudo_ico_ce_2.jpg": "c1ed3e0806ad8c4294ef01153831b52e",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_1.JPG": "ffc690b0a44cf83826eb0378afc83e8a",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_2.JPG": "c42ebbd83d9b08bdd637330a8347f3ec",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_3.JPG": "1dde9382ed6813aa67cbe132739b2116",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_4.JPG": "87f0e186239a2f4337b4719a3fd83688",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_em_cascudo1.JPG": "72058f8d9447aed46724a35cad275bf0",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_no_cascudo_ico_ce_1.jpg": "5b56f3771519bb35ffb3a9ddb490df74",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_no_cascudo_ico_ce_2.jpg": "3841a47e1c0a60e6b7fc36b81d95ff58",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_no_cascudo_ico_ce_3.jpg": "f1efa0e89c2124a5b383188e1d9436de",
"assets/images/projeto_ecoar/2016/2016_reuni%25C3%25A3o_evangelistica_no_cascudo_ico_ce_4.jpg": "0c99be615c1a48ea4a71f77387975067",
"assets/images/projeto_ecoar/2017/2017_(1_EBD_com_crian%25C3%25A7as_em_Cascudo).JPG": "65a62f1c133b5c1661172cd4d3f7b3ab",
"assets/images/projeto_ecoar/2017/2017_2.JPG": "1d9819bf1566f7ba974ad0662ba66bd1",
"assets/images/projeto_ecoar/2017/2017_3_transporte_da_programa%25C3%25A7%25C3%25A3o_evangelistica.JPG": "342478b78c69b3b483825724e522fc79",
"assets/images/projeto_ecoar/2017/2017_4.jpg": "d98a97590133881cbbba99571e75213d",
"assets/images/projeto_ecoar/2017/2017_6.JPG": "24421ec92b5ece8608001aee792f959f",
"assets/images/projeto_ecoar/2017/2017_culto_campal_em_cascudo.JPG": "c5fbd960412d45d52b2c9f009d7b4e69",
"assets/images/projeto_ecoar/2017/2017_culto_campal_em_cascudo2.JPG": "24421ec92b5ece8608001aee792f959f",
"assets/images/projeto_ecoar/2017/2017_culto_dentro_do_ponto_de_prega%25C3%25A7%25C3%25A3o_em_cascudo.JPG": "0071a6d3b4baabaed6e6ff2e5d9701f1",
"assets/images/projeto_ecoar/2017/2017_culto_em_frente_ao_ponto_de_prega%25C3%25A7%25C3%25A3o_em_cascudo.jpg": "4234125337065dfd4c02d4cd6cdbfc5c",
"assets/images/projeto_ecoar/2017/2017_culto_evangelistico_no_ivan_3.JPG": "e12d72f9869fb6602be2a6a2d6e6706e",
"assets/images/projeto_ecoar/2017/2017_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o.JPG": "0071a6d3b4baabaed6e6ff2e5d9701f1",
"assets/images/projeto_ecoar/2017/2017_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o_1.jpg": "88fcea8a13e63ca5cc79e513ac79ada0",
"assets/images/projeto_ecoar/2017/2017_EBD_com_crian%25C3%25A7as.jpg": "a22de853b7d17295952811a502121fc7",
"assets/images/projeto_ecoar/2017/2017_EBD_com_crian%25C3%25A7as_2.JPG": "d68a3e3af20b01f08fa6047c4e85bd19",
"assets/images/projeto_ecoar/2017/2017_EBD_com_crian%25C3%25A7as_3.JPG": "31012124811fbb537b3aa0726dcaa974",
"assets/images/projeto_ecoar/2017/2017_EBD_com_crian%25C3%25A7as_4.JPG": "65a62f1c133b5c1661172cd4d3f7b3ab",
"assets/images/projeto_ecoar/2017/2017_EBD_com_crian%25C3%25A7as_5.JPG": "116bf9893873e762c87c5ab234fe41f3",
"assets/images/projeto_ecoar/2017/2017_EBD_com_crian%25C3%25A7as_6.JPG": "5cf0870a5514c82d3cf4815123996e71",
"assets/images/projeto_ecoar/2017/2017_foto_do_transporte_1.JPG": "73ed4d17b51bd507363acf272a3c019d",
"assets/images/projeto_ecoar/2017/2017_foto_do_transporte_2.JPG": "58178e7061afaaf8cebc99e3d99f6d23",
"assets/images/projeto_ecoar/2017/2017_foto_do_transporte_3.JPG": "f29d9fb65656b0f5ddf75f57fe531768",
"assets/images/projeto_ecoar/2017/2017_irm%25C3%25A3os_com_o_transporte_1.JPG": "12161938abea39f3155f85e78aa5fb84",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_1.JPG": "c5fbd960412d45d52b2c9f009d7b4e69",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_2.JPG": "24421ec92b5ece8608001aee792f959f",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_3.JPG": "6a5cc7449bbd122db7083398944c86c0",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_4.JPG": "5203c8283c085ec385d3c06624502c58",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_5.JPG": "da78228b8e9bed1248a09e9ece3f2020",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_6.JPG": "960acf2f872f5b69501e7513d2539586",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_7.JPG": "65e9db092c5b2213be775c6c3f9304bb",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_8.JPG": "1be14495a69a121db7b686585a93312f",
"assets/images/projeto_ecoar/2017/2017_ponto_de_prega%25C3%25A7%25C3%25A3o_9.JPG": "1910873be69a0b5a2cb78a1438917a89",
"assets/images/projeto_ecoar/2017/2017_programa%25C3%25A7%25C3%25A3o_com_senhoras_em_cascudo.JPG": "73ad9feaad325fb0d7cdc34edccd6449",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_talcivania_1.jpg": "d7f9154bc52600624bd576d707f3e4dc",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_talcivania_2.jpg": "446fbc36c0bc245d18176a4ca4cc547c",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_talcivania_3.jpg": "89f34d501705ee0b78baba7610d7d18b",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_talcivania_4.jpg": "f6a87089e59b32719aa95a7332a1d2c3",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_talcivania_5.jpg": "cbef6ab841cd3b75e5c66247a38d04d8",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_talcivania_6.jpg": "91e5fcba3f8a9e738270ffa96caba3a6",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_talcivania_7.jpg": "45640c4e7dc47a56806b81fa05316a46",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_1.jpg": "5046149bc155835408a63edc624a36e6",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_10.jpg": "92c4c5b7958ee55b069ae00ef3aabc2d",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_11.jpg": "62695b1bd0754056916c38cd62190f82",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_12.jpg": "9078c80a6f349391b6433d97aec7ed45",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_13.jpg": "05a510f12f09f0eb72c43f2b50dac019",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_2.jpg": "411eff8e9f6c440c55788899d55b36eb",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_3.jpg": "4b8953172c8406046db9cb4dfed08e52",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_4.jpg": "acf044e670362df2c6803919161dd86e",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_5.jpg": "0e6bc86cd8eeabb41307aba5ca28a5df",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_6.jpg": "a5663703a9f81ef97e2c4004624b98b9",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_7.jpg": "adbf051eeca06e2b98ea48213002a872",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_8.jpg": "d2111be0a95f280d7c505e601e6e918e",
"assets/images/projeto_ecoar/2017/2017_reuni%25C3%25A3o_no_ponto_de_prega%25C3%25A7%25C3%25A3o_9.jpg": "cc919ceade6dfc25445f9b140abbc9a3",
"assets/images/projeto_ecoar/2018/2018_(2_culto_evangelistico_em_cascudo).JPG": "c6845ae8d3d59545256f50fccc396ab8",
"assets/images/projeto_ecoar/2018/2018_(2_transporte_da_programa%25C3%25A7%25C3%25A3o_evangelistica.JPG": "9f9d6bdb437e28a395224caa6946a656",
"assets/images/projeto_ecoar/2018/2018_batismo.jpg": "619c7d9e4145767a93e48ef7a290e7a9",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_em_cascudo.jpg": "b5e7fb432ec9e25e32a70e6c3a00cb0f",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_em_sitio_s%25C3%25A3o_paulo.jpg": "a10cbcb8d7109ded1903eb3569c4eb05",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_na_tatajuba_de_cima.jpg": "868588146920c629c59704eccec906cf",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_no_ivan_1.jpg": "3beaea244774a8d6cdfa511a2b30c664",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_no_ivan_2.jpg": "d9fd89ad522c7f4e37f2ef228c5353f3",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_no_ivan_3.jpg": "8585e36cc667be50e42dce3929431f7a",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_no_ivan_4.jpg": "9eb44df22448b465873ae6b500a576b9",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_no_ivan_5.jpg": "a22633443604040e3a9b449b132cf119",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_no_ivan_6.jpg": "e96444f8192e76ad1a7806c80a3d9328",
"assets/images/projeto_ecoar/2018/2018_culto_evangelistico_no_olho_dagua.jpg": "1d50931636a08fe943ed9810207ee685",
"assets/images/projeto_ecoar/2018/2018_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o_1.jpg": "a7e5417733218e7c10cba617b56f16d0",
"assets/images/projeto_ecoar/2018/2018_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o_2.jpg": "d4851d9db46f777884eaf14264ff3eac",
"assets/images/projeto_ecoar/2018/2018_disipulado_para_batismo_em_furquilia.jpg": "8ef987432450a27c065dc823de25475c",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_1.jpg": "ea6cf9040e9993ae18a17e617b1f9e78",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_10.jpg": "78c3b08c01275c7453b223bd7072aa70",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_11.jpg": "8d9bbb51515b33e3b024eebdaa74bb74",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_12.jpg": "a6bb65a7a30acb599e3d1aeb265a2917",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_2.jpg": "b68ed698472e57bcb52bb029c39590b3",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_3.jpg": "7c488470f0254afced2a974e2b6dfa05",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_4.jpg": "e2964b29c7d5537979b7bd81da3112b9",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_5.jpg": "6dffb3bc42a5446901b566519bb04f6a",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_6.jpg": "ee59d552b3abf63363ca155557e7d0ab",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_7.jpg": "befc5742cc8ff3e190be0eef3c786598",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_8.jpg": "16fae052645bfea6b356edacf67b8a9e",
"assets/images/projeto_ecoar/2018/2018_ponto_de_prega%25C3%25A7%25C3%25A3o_9.jpg": "eeda2ef8e92d5801a3b2cea50421fce7",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica.jpg": "b5e7fb432ec9e25e32a70e6c3a00cb0f",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_eliete_1.jpg": "b98a13b22725fab0aa73b128c5fe8848",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_eliete_2.jpg": "d85e15c94048c2d6038b5d4bca21a7d9",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_eliete_3.jpg": "1b9e2183195ea2a3e725e19fa1e57d35",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_eliete_4.jpg": "5caca09d7b1e49df55997862e4d26234",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_eliete_5.jpg": "e99ccef5b7aa2b6c9fa071a2942ff4b5",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_na_irm%25C3%25A3_eliete_6.jpg": "ef63dc03d907ef7d35acd38929ba8d05",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_sitio_s%25C3%25A3o_paulo_1.jpg": "ea01d774da7fa2b4fe6bcdcdec8b62bb",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_sitio_s%25C3%25A3o_paulo_2.jpg": "cef39a0a17776ac4f91e1ad2952643c7",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_sitio_s%25C3%25A3o_paulo_3.jpg": "53a29241734117fe5322c4282bf2b71d",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_sitio_s%25C3%25A3o_paulo_4.jpg": "968624214682c988d70c729b9869e755",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_sitio_s%25C3%25A3o_paulo_5.jpg": "66be7bba5194b25eb97f1e0abdd3c3b7",
"assets/images/projeto_ecoar/2018/2018_reuni%25C3%25A3o_evangelistica_sitio_s%25C3%25A3o_paulo_6.jpg": "7a3e489f19c4148ab9d22288ddf68c6b",
"assets/images/projeto_ecoar/2018/2018_transporte_1.jpg": "93ba1a1fe2c88a738c6a7b18bea9ac1d",
"assets/images/projeto_ecoar/2018/2018_transporte_10.jpg": "84cc82a7bd686a4344ed0cf860893f4d",
"assets/images/projeto_ecoar/2018/2018_transporte_11.jpg": "63b34d06f46fd2b1d3f67589bceb3bbb",
"assets/images/projeto_ecoar/2018/2018_transporte_12.jpg": "d2a0c2c8c351382ca44839c12cc3b732",
"assets/images/projeto_ecoar/2018/2018_transporte_2.jpg": "8e6b9c1c9583190d456526bcd4d42545",
"assets/images/projeto_ecoar/2018/2018_transporte_3.jpg": "143023b98bcbd623a6cc0d55bd0f5614",
"assets/images/projeto_ecoar/2018/2018_transporte_4.jpg": "3bb79bf3907526967321425484d6ad4c",
"assets/images/projeto_ecoar/2018/2018_transporte_5.jpg": "5eb97391eb13fa44bcb9e6573cee9c08",
"assets/images/projeto_ecoar/2018/2018_transporte_6.jpg": "0aeabbd2fdf0f0b37a7e51e4f7014089",
"assets/images/projeto_ecoar/2018/2018_transporte_7.jpg": "9c3fa60da47141733d41f15b0dc6ecac",
"assets/images/projeto_ecoar/2018/2018_transporte_8.jpg": "bd94de16ff17200403a80332a3ec1761",
"assets/images/projeto_ecoar/2018/2018_transporte_9.jpg": "7521904d95da53ef827433da610491a8",
"assets/images/projeto_ecoar/2019/2019_culto_a_noite_na_residencia_do_mission%25C3%25A1rio_(1).jpg": "e92429d2277982dd6cd76f581b792914",
"assets/images/projeto_ecoar/2019/2019_culto_a_noite_na_residencia_do_mission%25C3%25A1rio_(2).jpg": "f2d7ee4653bd9e5ec1682a6057184c19",
"assets/images/projeto_ecoar/2019/2019_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o_1.jpg": "cb45c11760a0792a1f792c45ea7fc54b",
"assets/images/projeto_ecoar/2019/2019_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o_2.jpg": "aec3703b10140c938c43f5d080ed46ae",
"assets/images/projeto_ecoar/2019/2019_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o_3.jpg": "a4dbcddb395de845a6fe8348f7777599",
"assets/images/projeto_ecoar/2019/2019_culto_no_ponto_de_prega%25C3%25A7%25C3%25A3o_4.jpg": "fd15ab5e28ae666d702681b26e793a3d",
"assets/images/projeto_ecoar/2019/2019_dentro_do_transporte_1.jpg": "b6b1dde7854da1b07174b0acff0abd0d",
"assets/images/projeto_ecoar/2019/2019_dentro_do_transporte_2.jpg": "d16ed00320c5153b3f602184aac30386",
"assets/images/projeto_ecoar/2019/2019_dentro_do_transporte_3.jpg": "c6d7c0b5dd74988416bc4d14b4cfb86e",
"assets/images/projeto_ecoar/2019/2019_dentro_do_transporte_4.jpg": "1448f2cbe5632323935d347a59b91244",
"assets/images/projeto_ecoar/2019/2019_EBD_com_adultos.jpg": "5676d25c465329de7251dfda168659bd",
"assets/images/projeto_ecoar/2019/2019_EBD_com_adultos_2.jpg": "456136d10d17e42201253bcc1533d761",
"assets/images/projeto_ecoar/2019/2019_EBD_com_crian%25C3%25A7as.jpg": "7ed91e56943154563ea90ec16b681f3d",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_1.jpg": "2e57ad4b23a6b9777db01c543f2b046a",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_10.jpg": "85a98d93102eac6c6a3aa9534ec84795",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_11.jpg": "1ea965d58a5cc8dd74b3f1d5ae62bebf",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_12.jpg": "b295ff58f638a7e0f2551acac8b8f16a",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_2.jpg": "16b8ab56b3b4873d80e79818864e208e",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_3.jpg": "4755eed6a9df4eb2a75878b3eb82d148",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_4.jpg": "3b79761537b7ba9ca8aea904de4099f0",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_5.jpg": "d21d750aca002f073085ab186fa67acf",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_6.jpg": "f6b222f16d45f423f3e5edf06da6ef5a",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_7.jpg": "9735156c7106c96ea290c1a1e2b42947",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_8.jpg": "859f8331e2d99240b3d5016656883cce",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_nos_sitios_9.jpg": "31f2c5a65f32837b5f58a78399cdd321",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_no_cascudo_Ic%25C3%25B3_CE.jpg": "37609510e814d0047c7dff35ed9846d9",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_evangelistica_no_irm%25C3%25A3o_rodrigo.jpg": "bcc46a83f138a20a572e75c16eca53f2",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_1.jpg": "32b5f493abe7962d79420c6c40d2e1cd",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_2.jpg": "3bdd58ec8a6944fa7bbe9df81a7820a5",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_3.jpg": "5459fdd880021c93d6e49fb486ca37dc",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_4.jpg": "6a4d6f022a923784e808f9203281d5a8",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_5.jpg": "6d6cf656f9b5fc520d4e77264c31f926",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_6.jpg": "12a47808f37a2d48b10c5eb67cacf2bf",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_7.jpg": "8b4e960f7cb85bf710073e29552c786c",
"assets/images/projeto_ecoar/2019/2019_reuni%25C3%25A3o_na_tatajuba_de_cima.jpg": "9f9654c2546fbd1dc94ea4afccdb4b0c",
"assets/images/projeto_ecoar/2019/2019_transporte.jpg": "9c4452e61f5f3b7e396e3fed9be35482",
"assets/images/projeto_ecoar/2020/2020_casa_pastoral_1.jpg": "1c5bd253dcb84a276625de678891b006",
"assets/images/projeto_ecoar/2020/2020_casa_pastoral_2.jpg": "61a26b753857debf83866067ebf33a7a",
"assets/images/projeto_ecoar/2020/2020_casa_pastoral_3.jpg": "f5eac5fcb1ab5d9a6ae10d59fb55416c",
"assets/images/projeto_ecoar/2020/2020_casa_pastoral_4.jpg": "63569d63d163613783e92c5e5ea71446",
"assets/images/projeto_ecoar/2020/2020_casa_pastoral_5.jpg": "187c030e56d47c4832426b9cc0f38ed5",
"assets/images/projeto_ecoar/2020/2020_casa_pastoral_6.jpg": "f4b35591a3fd1635471e4f9f837c1e9a",
"assets/images/projeto_ecoar/2020/2020_constru%25C3%25A7%25C3%25A3o_da_casa_pastoral_1.jpg": "0796436f90c56308742f226f71733943",
"assets/images/projeto_ecoar/2020/2020_constru%25C3%25A7%25C3%25A3o_da_casa_pastoral_2.jpg": "68501875d10d97fe567080588090b6e0",
"assets/images/projeto_ecoar/2020/2020_constru%25C3%25A7%25C3%25A3o_da_casa_pastoral_3.jpg": "d5c70305d513032ed4e4f00e5f1a007d",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_1.jpg": "9e52206663a4e92ce569e95c370faf5c",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_10.jpg": "a2d0585f2f22365dead2ea4cc388f7b2",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_2.jpg": "1754993ce7b18b11fbeb42d106d2cbac",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_3.jpg": "9a2eeb498edd66e30c0badf6416b459b",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_4.jpg": "f2820ee7230cde90e43bc1fce49b44cf",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_5.jpg": "66e2ea2b62b5a0016cb6c480841a8cc4",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_6.jpg": "51554d08663aba3f3cca2daf8f5e8cac",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_7.jpg": "0c3af3bc331797e675d4d08b13ffabac",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_8.jpg": "6470687d629260573226521760ff5da9",
"assets/images/projeto_ecoar/2020/2020_cultos_evangelisticos_com_caixa_9.jpg": "53beae53a9862c6a6120a369c72ab435",
"assets/images/projeto_ecoar/2020/2020_culto_de_virada_de_ano_1.jpg": "c655646882325e2f77f4e315525bbec3",
"assets/images/projeto_ecoar/2020/2020_culto_de_virada_de_ano_2.jpg": "fdc737137f605dce1803e2abbdc920a1",
"assets/images/projeto_ecoar/2020/2020_culto_ponto_de_prega%25C3%25A7%25C3%25A3o.png": "3fa2ef8fa2cc21d2f4dbb2a8c9e56b9a",
"assets/images/projeto_ecoar/2020/2020_dicipulado_no_irm%25C3%25A3o_rodrigo.png": "c958f789d844bfe22cb37d33ecce3580",
"assets/images/projeto_ecoar/2020/2020_disipulado_para_batismo_em_cascudo.jpg": "b28d195678be6e9f1283d7793106068b",
"assets/images/projeto_ecoar/2020/2020_EBD_com_adultos.jpg": "3f023d4a4545d42faacf9274c69c5811",
"assets/images/projeto_ecoar/2020/2020_EBD_com_adultos_4.jpg": "ee6bab47fceeec3a4d46faaeefdd21ed",
"assets/images/projeto_ecoar/2020/2020_EBD_com_adultos_5.jpg": "a269275cb7f9458ceae3823f8c71348d",
"assets/images/projeto_ecoar/2020/2020_EBD_com_crian%25C3%25A7as.jpg": "933e21478946d04aba00c10846babde7",
"assets/images/projeto_ecoar/2020/2020_escola_biblica_adultos.png": "d30c7f5129be29381dba95c619eb1751",
"assets/images/projeto_ecoar/2020/2020_escola_biblica_crian%25C3%25A7as.png": "f5bbae0710ab0eccce15e578b7a8aa6a",
"assets/images/projeto_ecoar/2020/2020_familia.jpg": "dc38b87513167fa6cec7b98e25cd866d",
"assets/images/projeto_ecoar/2020/2020_familia_mission%25C3%25A1ria_2.jpg": "89c2a0912b2620d96e3e3637eea2b7dc",
"assets/images/projeto_ecoar/2020/2020_primeiro_culto_na_casa_pastoral_1.jpg": "c1f8a220f9e83b18a91c04e08fa33f31",
"assets/images/projeto_ecoar/2020/2020_primeiro_culto_na_casa_pastoral_2.jpg": "16f4ea02b580d9cf1f10454924d191bc",
"assets/images/projeto_ecoar/2020/2020_primeiro_culto_na_casa_pastoral_3.jpg": "501306fc81bc95e29b53be0c3616bbf4",
"assets/images/projeto_ecoar/2020/2020_primeiro_culto_na_casa_pastoral_4.jpg": "16bc14a9a2c020decfc452595586f280",
"assets/images/projeto_ecoar/2020/2020_primeiro_culto_na_casa_pastoral_5.jpg": "72951ab0a507174840fa368003f814a2",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_evangelistica_no_cascudo_Ic%25C3%25B3_CE_1.jpg": "e8fb12aaf04b23c901963669f11bd4d7",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_evangelistica_no_cascudo_Ic%25C3%25B3_CE_2.jpg": "784ef9c94bcb08320b0be4feec6e2055",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_evangelistica_no_cascudo_Ic%25C3%25B3_CE_3.jpg": "b1d40c7023ca7b762731ae3364950a27",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_na_casa_dos_irm%25C3%25A3os_1.jpeg": "624582b53be035d1415361ec073fc4b5",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_na_casa_dos_irm%25C3%25A3os_1.jpg": "132a5b4e2e579424544c71ff49fc8545",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_na_casa_dos_irm%25C3%25A3os_2.jpeg": "e01244bb128db606d6fd55e8575ff376",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_1.jpg": "e5b897fa9e14b5d14debe5aad56bbe17",
"assets/images/projeto_ecoar/2020/2020_reuni%25C3%25A3o_na_casa_do_irm%25C3%25A3o_rodrigo_2.jpg": "d33765fdd549764401a28f6aca1e8929",
"assets/images/projeto_ecoar/2020/2020_ultimo_culto_na_ultima_casa_de_aluguel_1.jpg": "2fec1f9571de7f2f0843ad6b0ee48aa7",
"assets/images/projeto_ecoar/2020/2020_ultimo_culto_na_ultima_casa_de_aluguel_2.jpg": "1a08b0124ed709bd27eed60f808784c7",
"assets/images/projeto_ecoar/2020/2020_ultimo_culto_na_ultima_casa_de_aluguel_3.jpg": "626c6fc0aeff48bb768849d026b77ee8",
"assets/images/projeto_ecoar/2020/2020_ultimo_culto_na_ultima_casa_de_aluguel_4.jpg": "a2bcd4da2549e92dd990ad162bb78785",
"assets/images/projeto_ecoar/2020/2020_ultimo_culto_na_ultima_casa_de_aluguel_5.jpg": "b384cc6e6811b2c591f339fd3cca8295",
"assets/images/projeto_ecoar/2021/10_2021_culto_ao_lado_casa_pastoral10.jpeg": "18fdca856e2aae7c238aa0cf98d9f0e8",
"assets/images/projeto_ecoar/2021/11_2021_culto_ao_lado_casa_pastoral11.jpeg": "ad3ad7daf05fff82e38c04af415f84cf",
"assets/images/projeto_ecoar/2021/12_2021_culto_ao_lado_casa_pastoral12.jpeg": "dfaf4d086f312af0bdad7aa6eb2ccd1e",
"assets/images/projeto_ecoar/2021/13_2021_culto_ao_lado_casa_pastoral13.jpeg": "ab1b2201a053415b8ac5df17541bd0d0",
"assets/images/projeto_ecoar/2021/14_2021_culto_ao_lado_casa_pastoral14.jpeg": "6dd020d61f6118e3e188399f1d011eaf",
"assets/images/projeto_ecoar/2021/15_2021_culto_ao_lado_casa_pastoral15.jpeg": "a1ed29c7b9069c0d616039b4c4428f43",
"assets/images/projeto_ecoar/2021/16_2021_culto_ao_lado_casa_pastoral16.jpeg": "9f2e64c1f2b886fc17bb44a51889a74b",
"assets/images/projeto_ecoar/2021/17_2021_culto_ao_lado_casa_pastoral17.jpeg": "04a7bc88ddc8315e9759e351d3bfaced",
"assets/images/projeto_ecoar/2021/18_2021_culto_ao_lado_casa_pastoral18.jpeg": "b9b57d13f46e82a2549f0060eb944a23",
"assets/images/projeto_ecoar/2021/19_2021_culto_ao_lado_casa_pastoral19.jpeg": "924d5e1fc8337c34a69348fad51dd800",
"assets/images/projeto_ecoar/2021/1_2021_culto_ao_lado_casa_pastoral1.jpeg": "d8acd4c804088ca79663bcbbf43a718b",
"assets/images/projeto_ecoar/2021/20_2021_culto_ao_lado_casa_pastoral20.jpeg": "55f7e73c3e847dbfbcc847d4d2351892",
"assets/images/projeto_ecoar/2021/21_2021_culto_ao_lado_casa_pastoral21.jpeg": "c16457726c6d5c39893cf1a2e5c2e997",
"assets/images/projeto_ecoar/2021/22_2021_culto_ao_lado_casa_pastoral22.jpeg": "fbe0460fa8e70c58f750e0bbb7305f43",
"assets/images/projeto_ecoar/2021/23_2021_culto_ao_lado_casa_pastoral23.jpeg": "fbe0460fa8e70c58f750e0bbb7305f43",
"assets/images/projeto_ecoar/2021/24_2021_culto_ao_lado_casa_pastoral24.jpeg": "d75dd543799a6043c4c52b52023e61ef",
"assets/images/projeto_ecoar/2021/25_2021_culto_ao_lado_casa_pastoral25.jpeg": "52834c87f35176c2976981ac92e2ea4f",
"assets/images/projeto_ecoar/2021/26_2021_culto_ao_lado_casa_pastoral26.jpeg": "9326d3503cbee4ea136125c091b4be15",
"assets/images/projeto_ecoar/2021/27_2021_culto_ao_lado_casa_pastoral27.jpeg": "46f90ad753e8cee6f6058f9702814311",
"assets/images/projeto_ecoar/2021/28_2021_culto_ao_lado_casa_pastoral28.jpeg": "d87f52de25728a5f867ca6442e887006",
"assets/images/projeto_ecoar/2021/29_2021_culto_ao_lado_casa_pastoral29.jpeg": "16ee5b14acc650631773aec5dcc88938",
"assets/images/projeto_ecoar/2021/2_2021_culto_ao_lado_casa_pastoral2.jpeg": "d1dfc394670575d2439af38b551d3f8c",
"assets/images/projeto_ecoar/2021/30_2021_culto_ao_lado_casa_pastoral30.jpeg": "d96915484dad128987c5604deee0f356",
"assets/images/projeto_ecoar/2021/31_2021_culto_ao_lado_casa_pastoral31.jpeg": "d8e652b430ef098a4338efd44dc11893",
"assets/images/projeto_ecoar/2021/32_2021_EBD_adultos1.jpeg": "e51d0fe529a12ff8d5f291ade1f54e72",
"assets/images/projeto_ecoar/2021/33_2021_EBD_adultos2.jpeg": "5077b793436ba175f9f2ee81b494aad5",
"assets/images/projeto_ecoar/2021/34_2021_EBD_adultos3.jpeg": "7d25ecb4566f5d116e48acac198c0fcb",
"assets/images/projeto_ecoar/2021/35_2021_reuni%25C3%25A3o_evangelistica1.jpeg": "604f828c347e10beaee008d80cb3b669",
"assets/images/projeto_ecoar/2021/36_2021_reuni%25C3%25A3o_evangelistica2.jpeg": "67b6ffed573a6a98a4a8369b37cce298",
"assets/images/projeto_ecoar/2021/37_2021_reuni%25C3%25A3o_evangelistica3.jpeg": "eea3d956999966de5c9d034db36c27ef",
"assets/images/projeto_ecoar/2021/38_2021_reuni%25C3%25A3o_evangelistica4.jpeg": "7c76eed79f94bc1f09f91a9e86b6b54a",
"assets/images/projeto_ecoar/2021/39_2021_reuni%25C3%25A3o_evangelistica5.jpeg": "560e255b46fcd572014115f3090f7cb1",
"assets/images/projeto_ecoar/2021/3_2021_culto_ao_lado_casa_pastoral3.jpeg": "a3196c2ddbbdff72c45fe99ae06ec0f7",
"assets/images/projeto_ecoar/2021/40_2021_reuni%25C3%25A3o_evangelistica6.jpeg": "fdb2fbe4d55e37de4c8c4fa8352bc936",
"assets/images/projeto_ecoar/2021/41_2021_reuni%25C3%25A3o_evangelistica7.jpeg": "9eeeaba7fdf62e98cb380e16ee82d56a",
"assets/images/projeto_ecoar/2021/42_2021_reuni%25C3%25A3o_evangelistica8.jpeg": "133162700217c75f83c31a1542a8ee36",
"assets/images/projeto_ecoar/2021/43_2021_reuni%25C3%25A3o_evangelistica9.jpeg": "9eeeaba7fdf62e98cb380e16ee82d56a",
"assets/images/projeto_ecoar/2021/44_2021_reuni%25C3%25A3o_evangelistica10.jpeg": "f154642e5bb3b5b5f5350d141fea7bb4",
"assets/images/projeto_ecoar/2021/45_2021_reuni%25C3%25A3o_evangelistica11.jpeg": "4923432665ba2272371aeb76c605e992",
"assets/images/projeto_ecoar/2021/46_2021_reuni%25C3%25A3o_evangelistica12.jpeg": "611f8cc30e67d4b8a46707faf07f9e82",
"assets/images/projeto_ecoar/2021/47_2021_reuni%25C3%25A3o_evangelistica13.jpeg": "17fcd8bb338aa84633a3f7610e4212d3",
"assets/images/projeto_ecoar/2021/48_2021_reuni%25C3%25A3o_evangelistica14.jpeg": "17fcd8bb338aa84633a3f7610e4212d3",
"assets/images/projeto_ecoar/2021/49_2021_butando_piso_casa_pastoral.jpeg": "f0645049b22c32e9613e5e6dafa6a5e6",
"assets/images/projeto_ecoar/2021/4_2021_culto_ao_lado_casa_pastoral4.jpeg": "226d1aa41821443d88bb19d10595f428",
"assets/images/projeto_ecoar/2021/50_2021_comemoracao_dia_das_maes1.jpeg": "e7bfa6d191acc75b149947b2433edd5d",
"assets/images/projeto_ecoar/2021/51_2021_comemoracao_dia_das_maes2.jpeg": "a2029796b2407a16d6ea4e7615e761f9",
"assets/images/projeto_ecoar/2021/52_2021_comemoracao_dia_das_maes3.jpeg": "2083c0cb3272312865ac1ab680508539",
"assets/images/projeto_ecoar/2021/53_2021_comemoracao_dia_das_maes4.jpeg": "79946de19256a154fed7982a9da7301f",
"assets/images/projeto_ecoar/2021/54_2021_comemoracao_dia_das_maes5.jpeg": "c564e5e88dbc315253e7cea70656e683",
"assets/images/projeto_ecoar/2021/55_2021_comemoracao_dia_das_maes6.jpeg": "0cf7fc47bf2449bada2063703e8f23ae",
"assets/images/projeto_ecoar/2021/56_2021_comemoracao_dia_das_maes7.jpeg": "b6675c45debe2bd0809f5e86bf3d9699",
"assets/images/projeto_ecoar/2021/57_2021_comemoracao_dia_das_maes8.jpeg": "62796b1b5b22a05006025f124ca773b1",
"assets/images/projeto_ecoar/2021/58_2021_comemoracao_dia_das_maes9.jpeg": "835ee4ddeb39f88555c6e8480fa5f145",
"assets/images/projeto_ecoar/2021/59_2021_comemoracao_dia_das_maes10.jpeg": "28992a9fe4a5d656455cd602cd97f5f6",
"assets/images/projeto_ecoar/2021/5_2021_culto_ao_lado_casa_pastoral5.jpeg": "d98191c490bacc1ba85b9efabf0124aa",
"assets/images/projeto_ecoar/2021/60_2021_comemoracao_dia_das_maes11.jpeg": "8653d4b003aa096865ed2c68eb94bce6",
"assets/images/projeto_ecoar/2021/61_2021_comemoracao_dia_das_maes12.jpeg": "206ea85178a18b0cc20189d31a02d6ac",
"assets/images/projeto_ecoar/2021/62_2021_batismo_irm%25C3%25A3os1.jpeg": "1e572a52558bbe4cac1d9ffa68a77bfb",
"assets/images/projeto_ecoar/2021/63_2021_batismo_irm%25C3%25A3os2.jpeg": "2b3f5be30337803a7a00a783fa2ade5f",
"assets/images/projeto_ecoar/2021/64_2021_batismo_irm%25C3%25A3os3.jpeg": "f68c6f04a1e9d7507f4c68665eb4f51f",
"assets/images/projeto_ecoar/2021/65_2021_batismo_irm%25C3%25A3os4.jpeg": "3807fd016e2ed3f4e050005d60fd5633",
"assets/images/projeto_ecoar/2021/66_2021_batismo_irm%25C3%25A3os5.jpeg": "b918e20b679f14492e2624db87a46dd2",
"assets/images/projeto_ecoar/2021/67_2021_batismo_irm%25C3%25A3os6.jpeg": "bb055c36484c9e6ab80c4bbbbce6c29a",
"assets/images/projeto_ecoar/2021/68_2021_batismo_irm%25C3%25A3os7.jpeg": "4f3a1fef3e717c09b23065563f061011",
"assets/images/projeto_ecoar/2021/69_2021_batismo_irm%25C3%25A3os8.jpeg": "112da0fe7fe8b7e739d5646624d33d6c",
"assets/images/projeto_ecoar/2021/6_2021_culto_ao_lado_casa_pastoral6.jpeg": "9af0748e263ca1bc1b9394970077375e",
"assets/images/projeto_ecoar/2021/70_2021_batismo_irm%25C3%25A3os9.jpeg": "a5be50c7b9be61d6978a28b42ea4059d",
"assets/images/projeto_ecoar/2021/71_2021_batismo_irm%25C3%25A3os10.jpeg": "97a8a6d7eca2a2c58b5185617339c607",
"assets/images/projeto_ecoar/2021/72_2021_culto_final_de_ano1.jpeg": "89b0e6d1c6a3cb1455875963c8a7c90a",
"assets/images/projeto_ecoar/2021/73_2021_culto_final_de_ano2.jpeg": "84f462140da1dcb0aa774ea6da3b6d3c",
"assets/images/projeto_ecoar/2021/74_2021_culto_final_de_ano3.jpeg": "d7e93864c95e62f40f6d3d62e91fe92e",
"assets/images/projeto_ecoar/2021/75_2021_culto_final_de_ano4.jpeg": "0af11d4730138634363f87cf79051221",
"assets/images/projeto_ecoar/2021/76_2021_culto_final_de_ano5.jpeg": "07980d8c1ca9d01cef3a1685ce9794ce",
"assets/images/projeto_ecoar/2021/77_2021_culto_final_de_ano6.jpeg": "ee1f4bb291827f904ab8d2ba9ead3b97",
"assets/images/projeto_ecoar/2021/78_2021_culto_final_de_ano7.jpeg": "69513deb5c742f8838621e0f80cb8850",
"assets/images/projeto_ecoar/2021/79_2021_culto_final_de_ano8.jpeg": "9f15663ab65ed9364a36ce2971e2b733",
"assets/images/projeto_ecoar/2021/7_2021_culto_ao_lado_casa_pastoral7.jpeg": "00deb899403dbb5ff727cb2b5cfdc7a1",
"assets/images/projeto_ecoar/2021/80_2021_culto_final_de_ano9.jpeg": "751899ababcf87eeaef5f4005ea4f05a",
"assets/images/projeto_ecoar/2021/8_2021_culto_ao_lado_casa_pastoral8.jpeg": "f50782c899ecbb214f01804b974ee1fb",
"assets/images/projeto_ecoar/2021/9_2021_culto_ao_lado_casa_pastoral9.jpeg": "f34ac754018419ebe7b0c54709e47ad3",
"assets/images/projeto_ecoar/2022/10_2022_constru%25C3%25A7%25C3%25A3o_igreja5.jpeg": "e5ec04ee9834699c17e667a00c8cb888",
"assets/images/projeto_ecoar/2022/11_2022_constru%25C3%25A7%25C3%25A3o_igreja6.jpeg": "67565eca446016d01f30747b21b9f246",
"assets/images/projeto_ecoar/2022/12_2022_constru%25C3%25A7%25C3%25A3o_igreja7.jpeg": "5f2b74d2528d1430df9f9195da3d152c",
"assets/images/projeto_ecoar/2022/13_2022_constru%25C3%25A7%25C3%25A3o_igreja8.jpeg": "6743a732dbd34bddd80243409cc6e7d6",
"assets/images/projeto_ecoar/2022/14_2022_constru%25C3%25A7%25C3%25A3o_igreja9.jpeg": "fbe3a59c8f2356f9377586b54f705712",
"assets/images/projeto_ecoar/2022/15_2022_constru%25C3%25A7%25C3%25A3o_igreja10.jpeg": "978351b4ac37a927c77e6e1e2a600c82",
"assets/images/projeto_ecoar/2022/16_2022_constru%25C3%25A7%25C3%25A3o_igreja11.jpeg": "81090c4809c36d802a68787aab8ed3f6",
"assets/images/projeto_ecoar/2022/17_2022_constru%25C3%25A7%25C3%25A3o_igreja12.jpeg": "630159edeecff75a803f697b0b0121e2",
"assets/images/projeto_ecoar/2022/18_2022_constru%25C3%25A7%25C3%25A3o_igreja13.jpeg": "24499e57c72d13f0ab246897de7ab7d2",
"assets/images/projeto_ecoar/2022/19_2022_constru%25C3%25A7%25C3%25A3o_igreja14.jpeg": "4f9304629e9b2b68efb9e0a200865c6d",
"assets/images/projeto_ecoar/2022/1_2022_casa_pastoral1.jpeg": "24090164fa76ade0469b0579627cf5cc",
"assets/images/projeto_ecoar/2022/20_2022_constru%25C3%25A7%25C3%25A3o_igreja15.jpeg": "226262334fad061771c0856151856034",
"assets/images/projeto_ecoar/2022/21_2022_constru%25C3%25A7%25C3%25A3o_igreja16.jpeg": "44aa909144512bf9795ad146f0c5f5a0",
"assets/images/projeto_ecoar/2022/22_2022_constru%25C3%25A7%25C3%25A3o_igreja17.jpeg": "fa63b125e1cacc041161d0d8523609be",
"assets/images/projeto_ecoar/2022/23_2022_constru%25C3%25A7%25C3%25A3o_igreja18.jpeg": "e37a7b57476e2ad0e98d33d8e4854b2a",
"assets/images/projeto_ecoar/2022/24_2022_constru%25C3%25A7%25C3%25A3o_igreja19.jpeg": "3dcf003f507aeb6cb9a0aa87eb551d95",
"assets/images/projeto_ecoar/2022/25_2022_constru%25C3%25A7%25C3%25A3o_igreja20.jpeg": "5a40a87a5d8805f391fb9c681901673f",
"assets/images/projeto_ecoar/2022/26_2022_constru%25C3%25A7%25C3%25A3o_igreja21.jpeg": "838a313d348a2b6c3cfd45afe1ac064a",
"assets/images/projeto_ecoar/2022/27_2022_constru%25C3%25A7%25C3%25A3o_igreja22.jpeg": "eadb009d42c7415007eb4c0ee0b0bc3a",
"assets/images/projeto_ecoar/2022/28_2022_constru%25C3%25A7%25C3%25A3o_igreja23.jpeg": "48e05981a9c3c3fcddec9852d4d97978",
"assets/images/projeto_ecoar/2022/29_2022_constru%25C3%25A7%25C3%25A3o_igreja24.jpeg": "b46f946687073048ea954a4e192bd894",
"assets/images/projeto_ecoar/2022/2_2022_culto_terreno_igreja1.jpeg": "c0baae8696546a608dfcb28b05fddf45",
"assets/images/projeto_ecoar/2022/30_2022_constru%25C3%25A7%25C3%25A3o_igreja25.jpeg": "ec68600a974105c1ccfdfc9e63113e5c",
"assets/images/projeto_ecoar/2022/31_2022_constru%25C3%25A7%25C3%25A3o_igreja26.jpeg": "2b2b60de9353eee824bd6b94f113f494",
"assets/images/projeto_ecoar/2022/32_2022_constru%25C3%25A7%25C3%25A3o_igreja27.jpeg": "ce66a845a2dc89424b2c9545791fd148",
"assets/images/projeto_ecoar/2022/33_2022_constru%25C3%25A7%25C3%25A3o_igreja28.jpeg": "7dbf453aae920478c6d9d41aced33642",
"assets/images/projeto_ecoar/2022/34_2022_constru%25C3%25A7%25C3%25A3o_igreja29.jpeg": "35bc870acb27c0bb69dc49de73f3dddf",
"assets/images/projeto_ecoar/2022/35_2022_constru%25C3%25A7%25C3%25A3o_igreja30.jpeg": "c520021f4fdc68773c9735904aaf508d",
"assets/images/projeto_ecoar/2022/36_2022_constru%25C3%25A7%25C3%25A3o_igreja31.jpeg": "90f859c54e78eb0b668957ac060ab2da",
"assets/images/projeto_ecoar/2022/37_2022_constru%25C3%25A7%25C3%25A3o_igreja32.jpeg": "745aa38ca708f943c71cfd8db258aa00",
"assets/images/projeto_ecoar/2022/38_2022_constru%25C3%25A7%25C3%25A3o_igreja33.jpeg": "199d3e3941087e44bf27faf6bdf105e6",
"assets/images/projeto_ecoar/2022/39_2022_constru%25C3%25A7%25C3%25A3o_igreja34.jpeg": "deff200d4d11d9f4133e105358c742c1",
"assets/images/projeto_ecoar/2022/3_2022_culto_terreno_igreja2.jpeg": "e5c7183d217b35cb65fa81eddfe904e5",
"assets/images/projeto_ecoar/2022/40_2022_constru%25C3%25A7%25C3%25A3o_igreja35.jpeg": "b6ea28d28fd648ce3f8d36ecc52924df",
"assets/images/projeto_ecoar/2022/41_2022_constru%25C3%25A7%25C3%25A3o_igreja36.jpeg": "84dd1d906bc3263bbde7de02472270a7",
"assets/images/projeto_ecoar/2022/42_2022_constru%25C3%25A7%25C3%25A3o_igreja37.jpeg": "b99809c5ccd049fbf34e8c9a9beed5f9",
"assets/images/projeto_ecoar/2022/43_2022_constru%25C3%25A7%25C3%25A3o_igreja38.jpeg": "50c041070a52457ca8efa595e01cad90",
"assets/images/projeto_ecoar/2022/44_2022_constru%25C3%25A7%25C3%25A3o_igreja39.jpeg": "101c76e8fc235a7bc9545b39b7d310d7",
"assets/images/projeto_ecoar/2022/45_2022_constru%25C3%25A7%25C3%25A3o_igreja40.jpeg": "b738038242f63aa25821d4c6c31241d7",
"assets/images/projeto_ecoar/2022/46_2022_constru%25C3%25A7%25C3%25A3o_igreja41.jpeg": "0f03f60539d836b86af119f0369669c6",
"assets/images/projeto_ecoar/2022/47_2022_constru%25C3%25A7%25C3%25A3o_igreja42.jpeg": "1dd43f12af66f1329232c0ae19ea58a8",
"assets/images/projeto_ecoar/2022/48_2022_culto_no_templo1.jpeg": "dc35b7a588c04e253da52fc83db4e912",
"assets/images/projeto_ecoar/2022/49_2022_culto_no_templo2.jpeg": "dcb91c85fbd1ebed6051b02e133e7a8b",
"assets/images/projeto_ecoar/2022/4_2022_culto_terreno_igreja3.jpeg": "497c307de8d35b8251753e6854087122",
"assets/images/projeto_ecoar/2022/50_2022_culto_no_templo3.jpeg": "a3d99d70b1dd2be91041444bfbe158fe",
"assets/images/projeto_ecoar/2022/51_2022_culto_no_templo4.jpeg": "f55b91ff261d8321662830fd4b7b53dd",
"assets/images/projeto_ecoar/2022/52_2022_culto_no_templo5.jpeg": "6ec630547002325118dd13c03d7b5375",
"assets/images/projeto_ecoar/2022/53_2022_culto_no_templo6.jpeg": "0524ba2798214010067e4dfab7ffb150",
"assets/images/projeto_ecoar/2022/54_2022_culto_no_templo7.jpeg": "6583ade78b42e6bc2efcaee0ab1d0953",
"assets/images/projeto_ecoar/2022/55_2022_culto_no_templo8.jpeg": "685eebe29e7a0b08b2d69998348d8ed3",
"assets/images/projeto_ecoar/2022/56_2022_culto_no_templo9.jpeg": "e4e9c8d35d8116fff75165e6320b88b6",
"assets/images/projeto_ecoar/2022/57_2022_culto_no_templo10.jpeg": "802875d71d112f88fabcbbc72b972b7e",
"assets/images/projeto_ecoar/2022/58_2022_culto_no_templo11.jpeg": "65377db6bb60b414eb2ecf92ccd9fdf9",
"assets/images/projeto_ecoar/2022/59_2022_culto_no_templo12.jpeg": "48224c98fe5922be5bb4cd7111aff35f",
"assets/images/projeto_ecoar/2022/5_2022_culto_terreno_igreja4.jpeg": "77dde8c7665505c6b947b855bbfa406e",
"assets/images/projeto_ecoar/2022/60_2022_culto_no_templo13.jpeg": "8c3793de66f702a7df31bd77584d0c7c",
"assets/images/projeto_ecoar/2022/61_2022_culto_no_templo14.jpeg": "185b4cef41eb1625f14f60740a0ca854",
"assets/images/projeto_ecoar/2022/62_2022_culto_no_templo15.jpeg": "65bcbc6794e79116748f211a60ad4f3d",
"assets/images/projeto_ecoar/2022/63_2022_culto_no_templo16.jpeg": "692a02b076568ee8ebbafca0c7de7588",
"assets/images/projeto_ecoar/2022/64_2022_culto_no_templo17.jpeg": "a5b38ff99eb426c29ee622c7b22f257c",
"assets/images/projeto_ecoar/2022/65_2022_reuni%25C3%25A3o_evangelistica1.jpeg": "790b476fde05eb5f1bff5882cdba9bab",
"assets/images/projeto_ecoar/2022/66_2022_reuni%25C3%25A3o_evangelistica2.jpeg": "fe9495284d27b003a0614867474fef2f",
"assets/images/projeto_ecoar/2022/67_2022_reuni%25C3%25A3o_evangelistica3.jpeg": "52551cada01d84b0bfb824336283c884",
"assets/images/projeto_ecoar/2022/68_2022_reuni%25C3%25A3o_evangelistica4.jpeg": "bb43d89f2dfd8794c1a8762569d015ff",
"assets/images/projeto_ecoar/2022/69_2022_reuni%25C3%25A3o_evangelistica5.jpeg": "bcb923191bf0e04492bade4f044c463e",
"assets/images/projeto_ecoar/2022/6_2022_constru%25C3%25A7%25C3%25A3o_igreja1.jpeg": "0ed5d178306069506b77c1fd5913c5c3",
"assets/images/projeto_ecoar/2022/70_2022_reuni%25C3%25A3o_evangelistica6.jpeg": "5ede19917103309b7fc7fe8ad9b048b3",
"assets/images/projeto_ecoar/2022/71_2022_reuni%25C3%25A3o_evangelistica7.jpeg": "186c4568daf41ac2a9df72f6ab0fef5e",
"assets/images/projeto_ecoar/2022/72_2022_reuni%25C3%25A3o_evangelistica8.jpeg": "16e3a086de9079af54cc4bfa27a4b14a",
"assets/images/projeto_ecoar/2022/73_2022_reuni%25C3%25A3o_evangelistica9.jpeg": "dc25a352ad50ee997e83977d46ed6917",
"assets/images/projeto_ecoar/2022/74_2022_reuni%25C3%25A3o_evangelistica10.jpeg": "5b3725850e86f91780f51b988b3fdad7",
"assets/images/projeto_ecoar/2022/75_2022_reuni%25C3%25A3o_evangelistica11.jpeg": "68b202bc1081a09738524575b2ead1f0",
"assets/images/projeto_ecoar/2022/76_2022_reuni%25C3%25A3o_evangelistica12.jpeg": "d10dabc5f507aa3e559f08aab0583a81",
"assets/images/projeto_ecoar/2022/77_2022_reuni%25C3%25A3o_evangelistica13.jpeg": "223d94614cfcfea3ca571cd21f233ab0",
"assets/images/projeto_ecoar/2022/78_2022_reuni%25C3%25A3o_evangelistica14.jpeg": "e28b728f86dcaadbd4838fdecd8669cb",
"assets/images/projeto_ecoar/2022/79_2022_reuni%25C3%25A3o_evangelistica15.jpeg": "e38ae7904ecf1c931d6e9009385aeb2f",
"assets/images/projeto_ecoar/2022/7_2022_constru%25C3%25A7%25C3%25A3o_igreja2.jpeg": "4fb7d51487a6c4526dedabf8b28c0b04",
"assets/images/projeto_ecoar/2022/80_2022_culto_de_natal_na_igreja1.jpeg": "0026f3e7d576a881d58c61d8c0399ed6",
"assets/images/projeto_ecoar/2022/81_2022_culto_de_natal_na_igreja2.jpeg": "946acda5eaf2184fc540769cba0f45f2",
"assets/images/projeto_ecoar/2022/82_2022_culto_de_natal_na_igreja3.jpeg": "b865bd590298464038d85b9b8f2ae4fe",
"assets/images/projeto_ecoar/2022/83_2022_culto_de_natal_na_igreja4.jpeg": "ae01a8b65782d7562756d4ae4dae1383",
"assets/images/projeto_ecoar/2022/8_2022_constru%25C3%25A7%25C3%25A3o_igreja3.jpeg": "54363601954cb5a1f25240ad946942ab",
"assets/images/projeto_ecoar/2022/9_2022_constru%25C3%25A7%25C3%25A3o_igreja4.jpeg": "a84e899967145ad5b4fcf40f82082602",
"assets/images/projeto_ecoar/2023/10_2023_culto_no_templo3.jpeg": "c2bf7b40be5807c6ea68f7a4e30dab73",
"assets/images/projeto_ecoar/2023/11_2023_culto_no_templo4.jpeg": "fec12f3a97275f08a13fd9653387c2e3",
"assets/images/projeto_ecoar/2023/12_2023_culto_no_templo5.jpeg": "213c55a8acdb28161e6d465290603de7",
"assets/images/projeto_ecoar/2023/13_2023_culto_no_templo6.jpeg": "5afdbf4c79f66419d748642d2a1f6d7a",
"assets/images/projeto_ecoar/2023/14_2023_culto_no_templo7.jpeg": "755706281af2fdc60110a876050e089a",
"assets/images/projeto_ecoar/2023/15_2023_culto_no_templo8.jpeg": "ae8a1106c82e250cf13021a133a5f23e",
"assets/images/projeto_ecoar/2023/16_2023_culto_no_templo9.jpeg": "9ed09304ab5b18a1aff545b32f29cd7c",
"assets/images/projeto_ecoar/2023/17_2023_culto_no_templo10.jpeg": "74402cbe69666fb8ecdfe5a087c26553",
"assets/images/projeto_ecoar/2023/18_2023_culto_no_templo11.jpeg": "11280de08061bc998d62c3df69c15adb",
"assets/images/projeto_ecoar/2023/19_2023_culto_no_templo12.jpeg": "d142e8ea4f76872cb9a2d54599a73c3d",
"assets/images/projeto_ecoar/2023/1_2023_constru%25C3%25A7%25C3%25A3o_da_igreja1.jpeg": "8b7c2d24abe586bb829b374383305f44",
"assets/images/projeto_ecoar/2023/20_2023_culto_no_templo13.jpeg": "8f8bbe568a62052b21dcf6239eda0134",
"assets/images/projeto_ecoar/2023/21_2023_culto_no_templo14.jpeg": "7696e7b29b833534f704b964c74152f9",
"assets/images/projeto_ecoar/2023/22_2023_culto_no_templo15.jpeg": "5156bb9057f688e78d8aaab1fcb8388e",
"assets/images/projeto_ecoar/2023/23_2023_culto_no_templo16.jpeg": "b201bbc0b043a3363e011e635edc40b5",
"assets/images/projeto_ecoar/2023/24_2023_culto_no_templo17.jpeg": "2e65f72ec036cf073f414b6f1b6bef50",
"assets/images/projeto_ecoar/2023/25_2023_culto_no_templo18.jpeg": "de42e4c7ce51d82fe96bea80803a0af5",
"assets/images/projeto_ecoar/2023/26_2023_culto_no_templo19.jpeg": "97089ec2e5f847f43b87da992655f3c9",
"assets/images/projeto_ecoar/2023/27_2023_culto_no_templo20.jpeg": "1a6825d4d2660f764d6e568a8b1c1bfa",
"assets/images/projeto_ecoar/2023/28_2023_culto_no_templo21.jpeg": "93d865b1eb3da98d1f0a2fa5818dabe7",
"assets/images/projeto_ecoar/2023/29_2023_reuni%25C3%25A3o_evangelistica1.jpeg": "79289eea91dbd28cb050b419831631fc",
"assets/images/projeto_ecoar/2023/2_2023_constru%25C3%25A7%25C3%25A3o_da_igreja2.jpeg": "dba037f23a46a23a205a015a27bc28fd",
"assets/images/projeto_ecoar/2023/30_2023_reuni%25C3%25A3o_evangelistica2.jpeg": "fc5609e9f501ce87afe4a6c4ae4399d8",
"assets/images/projeto_ecoar/2023/31_2023_reuni%25C3%25A3o_evangelistica3.jpeg": "6ea67494268a4148994f1f095f33b5d4",
"assets/images/projeto_ecoar/2023/32_2023_reuni%25C3%25A3o_evangelistica4.jpeg": "47c74409af2b1aa10165140d6baa0d3b",
"assets/images/projeto_ecoar/2023/33_2023_reuni%25C3%25A3o_evangelistica5.jpeg": "574d7babd4d7580eb77feef3d25a2d3d",
"assets/images/projeto_ecoar/2023/34_2023_reuni%25C3%25A3o_evangelistica6.jpeg": "9dd9f361bf39127e49e0a2dca0fd1453",
"assets/images/projeto_ecoar/2023/35_2023_reuni%25C3%25A3o_evangelistica7.jpeg": "a49e6f5da592815e42018cc9d4f2e79c",
"assets/images/projeto_ecoar/2023/36_2023_reuni%25C3%25A3o_evangelistica8.jpeg": "4ce0a4a5d48e25945d7f54fc3aca35b7",
"assets/images/projeto_ecoar/2023/37_2023_reuni%25C3%25A3o_evangelistica9.jpeg": "476475cf382225889844e9cf06cf3e1b",
"assets/images/projeto_ecoar/2023/38_2023_reuni%25C3%25A3o_evangelistica10.jpeg": "b357dd3ddeeae84f05c9e28df3faca47",
"assets/images/projeto_ecoar/2023/39_2023_reuni%25C3%25A3o_evangelistica11.jpeg": "cf3ef877852a7733091efcd91f9bc027",
"assets/images/projeto_ecoar/2023/3_2023_constru%25C3%25A7%25C3%25A3o_da_igreja3.jpeg": "ef4ed7bd52db33889dc8363cc3c667ea",
"assets/images/projeto_ecoar/2023/40_2023_reuni%25C3%25A3o_evangelistica12.jpeg": "7d9222707669fdd79eb8833ce5f098ac",
"assets/images/projeto_ecoar/2023/41_2023_reuni%25C3%25A3o_evangelistica13.jpeg": "0af993b2bc039c2aec933956e8282d57",
"assets/images/projeto_ecoar/2023/42_2023_reuni%25C3%25A3o_evangelistica14.jpeg": "fe1eea13671cd99a4ac8d3d157a2cc9d",
"assets/images/projeto_ecoar/2023/43_2023_reuni%25C3%25A3o_evangelistica15.jpeg": "1bd76433d51cc00f7f84075b20372141",
"assets/images/projeto_ecoar/2023/44_2023_reuni%25C3%25A3o_evangelistica16.jpeg": "7a402fda9a4b506b5dc8637e2b08fd2f",
"assets/images/projeto_ecoar/2023/45_2023_reuni%25C3%25A3o_evangelistica17.jpeg": "2316c571c81bae9d25f7400e99ce3b88",
"assets/images/projeto_ecoar/2023/46_2023_reuni%25C3%25A3o_pastores1.jpeg": "cc88c9bcc30ed7f22c29c483eba2c88e",
"assets/images/projeto_ecoar/2023/4_2023_constru%25C3%25A7%25C3%25A3o_da_igreja4.jpeg": "b23d3a7cb5b9481d6cfea8e0b8b72b13",
"assets/images/projeto_ecoar/2023/5_2023_constru%25C3%25A7%25C3%25A3o_da_igreja5.jpeg": "f495af9667511bf1d2c2a8ca7d0ceead",
"assets/images/projeto_ecoar/2023/6_2023_constru%25C3%25A7%25C3%25A3o_da_igreja6.jpeg": "5d19ee55053ee1dd9f51c3791df9a1ed",
"assets/images/projeto_ecoar/2023/7_2023_constru%25C3%25A7%25C3%25A3o_da_igreja7.jpeg": "61f553616d39b4208d79c912973e3439",
"assets/images/projeto_ecoar/2023/8_2023_culto_no_templo1.jpeg": "cfe2f0badab2957c0c33b1a2b08f3a17",
"assets/images/projeto_ecoar/2023/9_2023_culto_no_templo2.jpeg": "568c1cb9d6555fd81d5366910b45a781",
"assets/NOTICES": "ba3234862a4bcd6cbba0ea3047d48888",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e04b47d5f6cc76ed198b1d09cadb4cd",
"/": "5e04b47d5f6cc76ed198b1d09cadb4cd",
"main.dart.js": "ed6f01f2566e078dee789b7eaebe5706",
"manifest.json": "7f3305f99cf47e4d755a2f3d9be959fa",
"version.json": "e79987528318b71b7568ca136fb2b943"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
