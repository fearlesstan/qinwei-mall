/* ============================================================
   秦味 QINWEI — 跨境电商演示站 前端逻辑（中英双语版）
   纯原生 JS，无任何外部依赖，双击 index.html 即可运行
   ============================================================ */

/* ---------------- 多语言 ---------------- */

const I18N = {
zh: {
  announce1:'🌍 全球周年庆 · 全场 9 折', announce2:'满 <b>$49</b> 全球包邮', announce3:'新人首单用码 <b>WELCOME5</b> 立减 $5',
  nav_home:'首页', nav_shop:'全部商品', nav_gan:'擀面皮专区', nav_about:'品牌故事', nav_contact:'联系我们',
  search_ph:'搜索擀面皮、油泼辣子…', country:'全球',
  hero_kicker:'QINWEI · 三秦风味出海品牌',
  hero_h1_a:'一碗擀面皮', hero_h1_b:'香飘四大洲',
  hero_sub:'源自陕西宝鸡的 300 年非遗老味道。真空锁鲜，直邮全球 32 国——开袋一拌，就是家乡街头的那个味儿。',
  hero_buy:'立即购买', hero_craft:'看制作工艺',
  hero_n1:'真空锁鲜 · 常温 180 天', hero_n2:'出口 32 国', hero_n3:'48 小时内发货',
  hero_chip1:'🏅 省级非遗技艺', hero_chip2:'🌶 <b>三种口味</b> 可选', hero_chip3:'✈ 直邮 <b>32 国</b>',
  stat1:'出口国家与地区', stat2:'年销份数', stat3:'综合好评率', stat4:'非遗技艺传承',
  sig_kicker:'SIGNATURE · 镇店之宝', sig_title:'宝鸡擀面皮',
  sig_en:'Baoji Gan Mian Pi · 年销 800 万份',
  sig_desc:'从岐山脚下的老作坊，到全球 32 国的餐桌。三代人的非遗擀制技艺，六小时恒温发酵，真空锁鲜装袋——不变的是那一口筋道。',
  sig_no_cook:'免煮即食', sig_shelf:'常温 180 天',
  flash_label:'⚡ 周年庆限时 <b>9 折</b> · 距结束', sig_from:'起 / 6 袋装',
  sig_buy:'立即选购', sig_story:'走进秦味',
  fla_kicker:'FLAVORS', fla_title:'三种风味，总有一款是你的', fla_sub:'酱包独立包装，辣度随心加——不敢吃辣也能尝到面皮的本味。',
  fla_try:'尝尝这一款',
  shopall_kicker:'SHOP ALL', shopall_title:'三秦好物，一站购齐', shopall_sub:'面食、酱料、小吃、礼盒——都是老陕饭桌上的味道。',
  shopall_more:'查看全部商品',
  why_kicker:'WHY QINWEI', why_title:'为什么 32 国的老饕都选秦味',
  logi_kicker:'CROSS-BORDER LOGISTICS', logi_title:'跨境直邮，一站到家', logi_sub:'西安保税仓发货，全程物流可追踪，安心送到门口。',
  gal_kicker:'FROM THE KITCHEN', gal_title:'实拍图鉴 · 真材实料', gal_sub:'没有精修棚拍，都是后厨、街头与老店的真实镜头。',
  rev_kicker:'GLOBAL REVIEWS', rev_title:'全球食客的真实评价',
  rev_sub:'综合评分 4.9 · 好评率 98.6% · 来自 32 个国家和地区的买家秀', rev_verified:'已认证购买',
  story_kicker:'OUR STORY', story_title_a:'从宝鸡街头，', story_title_b:'到世界餐桌',
  story_p1:'1921 年，宝鸡经二路上支起了一间面皮摊。一百年后，这碗面皮从三秦大地出发，漂洋过海登上 32 国的餐桌。',
  story_p2:'变的是包装与物流，不变的是每天早上五点和面、洗面、擀制的笨功夫。',
  story_btn:'走进秦味',
  news_kicker:'NEWSLETTER', news_title:'订阅秦味 · 首单立减 $3',
  news_sub:'每月新品、折扣与海外华人专场，第一时间送达你的邮箱。',
  news_ph:'输入你的邮箱地址', news_btn:'订阅',
  f_about:'关于秦味', f_craft:'制作工艺', f_ship:'全球直邮', f_cert:'品牌资质',
  f_col_brand:'品牌', f_col_service:'服务', f_col_help:'帮助', f_col_contact:'联系我们',
  f_delivery:'配送说明', f_returns:'退换政策', f_damage:'破损包赔', f_faq:'常见问题',
  f_guide:'新手指南', f_customs:'海关与清关', f_pay:'支付方式',
  f_addr:'陕西省宝鸡市高新区食品工业园 88 号', f_hours:'周一至周五 9:00 - 18:00（北京时间）',
  f_pay_union:'银联', f_pay_alipay:'支付宝', f_pay_wechat:'微信支付', f_carrier:'顺丰国际',
  f_desc:'把三秦风味，送到世界的每一个角落。源自宝鸡的百年非遗味道，出口 32 个国家和地区。',
  f_copyright:'© 2026 秦味 QINWEI FOODS · 演示店铺 ｜ 陕ICP备2026-880066号-1 ｜ 公安备案 61003002002666号',
  f_demo:'本网站为跨境电商毕业设计演示项目，所有商品、价格、评价与订单均为模拟数据，不产生真实交易。',
  f_photos:'商品图片来自 Wikimedia Commons（CC BY / CC BY-SA），仅用于教学演示。',
  drawer_title:'购物车', drawer_subtotal:'小计（不含运费）', drawer_note:'国际运费与关税将在结算页计算',
  drawer_checkout:'去结算', drawer_clear:'清空购物车',
  drawer_empty:'购物车还是空的，去挑点好味道吧～',
  ship_progress_free:'🎉 已享全球包邮！', ship_progress_more_a:'再买 ', ship_progress_more_b:' 即享全球包邮',
  shop_title_all:'全部商品', shop_sub:'三秦风味 · 全球直邮 · 满 $49 包邮',
  shop_results:'搜索结果', shop_count_a:'共 ', shop_count_b:' 件商品',
  sort_featured:'综合排序', sort_sales:'销量优先', sort_price_asc:'价格从低到高', sort_price_desc:'价格从高到低',
  shop_empty:'没有找到相关商品，换个关键词试试吧',
  crumb_home:'首页', crumb_all:'全部商品',
  tab_desc:'商品详情', tab_craft:'制作工艺', tab_reviews:'用户评价', tab_faq:'常见问题',
  d_sold_a:'已售 ', d_sold_b:' 份',
  d_flavor:'选择口味', d_flavor_note:'酱包独立包装，辣度随心加',
  d_pack:'选择规格', d_spec:'规格',
  d_stock_a:'海外仓现货 ', d_stock_b:' 件',
  d_add:'加入购物车', d_buy:'立即购买',
  svc1:'正品保障', svc2:'7 天无理由', svc3:'破损包赔', svc4:'全球直邮',
  d_ship:'预计 7-12 个工作日送达美国 / 欧洲 / 澳洲 · 全程物流可追踪',
  d_sale_chip:'周年庆 9 折', d_ship_chip:'满 $49 全球包邮',
  d_cny_a:'≈ 人民币 ¥', d_cny_b:'（汇率按 7.2 估算，仅作参考）',
  d_params:'产品参数', d_nutrition:'营养成分表（每 100g）', d_cert:'出口资质',
  d_demo:'* 本页面商品信息为毕业设计演示数据。',
  d_review_note:'条评价 · 好评率 98.6%', d_review_demo:'* 评价内容为毕业设计演示数据。',
  related_kicker:'YOU MAY ALSO LIKE', related_title:'你可能会喜欢',
  ab_kicker:'OUR STORY · 始于 1921', ab_title_a:'一碗面皮的', ab_title_b:'百年出海记',
  ab_p1:'1921 年，宝鸡经二路上支起了一间没有名字的面皮摊。掌柜每天凌晨四点起来和面、洗面、擀制，一张面皮薄得能透光。',
  ab_p2:'一百年后，这碗面皮从三秦大地出发，登上全球 32 个国家的餐桌。变的是包装与物流，不变的是每天早上五点的笨功夫。',
  ab_cta:'尝尝这碗面皮',
  ab_t1:'秦味食品成立于 2016 年，坐落于陕西省宝鸡市高新区食品工业园。创始人出身面皮世家，祖父的面皮摊在宝鸡老街摆了四十多年。建厂的初衷很简单：让在外漂泊的陕西人，也能随时吃上一口家乡味——后来才发现，想家的人不分国籍。',
  ab_t2:'我们把老手艺搬进了恒温车间：同样的洗面沉淀、同样的发酵时长、同样的手工擀制，只是用真空锁鲜替代了当街叫卖。2019 年，第一批擀面皮从西安港出发，发往新加坡；2026 年，秦味的海外订单已覆盖五大洲的 32 个国家和地区。',
  ab_ml_kicker:'MILESTONES', ab_ml_title:'百年大事记',
  ab_craft_kicker:'CRAFT', ab_craft_title:'六道工序，一道都不能省',
  ab_cert_kicker:'CERTIFICATION', ab_cert_title:'出口级品质背书',
  ab_contact_kicker:'CONTACT', ab_contact_title:'联系我们',
  ab_c1_t:'客服邮箱', ab_c1_d:'service@qinwei-foods.com<br>商务合作：bd@qinwei-foods.com',
  ab_c2_t:'客服热线', ab_c2_d:'+86 917 8888 666<br>海外热线：+86 29 6666 8888',
  ab_c3_t:'公司地址', ab_c3_d:'陕西省宝鸡市高新区食品工业园 88 号<br>工作时间：周一至周五 9:00-18:00',
  ab_street_cap:'西安回民街 · 百年小吃集市',
  co_title:'结算 · Checkout', co_demo:'演示环境：不会产生真实扣款，请放心填写。',
  co_name:'收货人姓名', co_email:'邮箱', co_country:'配送国家 / 地区', co_phone:'电话', co_address:'详细地址',
  co_name_ph:'张三', co_email_ph:'you@example.com', co_country_ph:'请选择', co_phone_ph:'+1 555 000 0000',
  co_address_ph:'街道、门牌号、城市、邮编',
  co_ship:'配送方式', co_std:'标准国际运输', co_std_d:'10-15 个工作日', co_std_free:'满 $49 包邮 · 10-15 个工作日',
  co_exp:'国际加急', co_exp_d:'7-10 个工作日 · DHL 优先', co_free:'免费',
  co_pay:'支付方式（模拟）', co_pay1:'支付宝 / 微信支付', co_pay1d:'推荐中国用户使用',
  co_pay2:'Visa / Mastercard', co_pay2d:'支持美元、欧元结算', co_pay3:'PayPal', co_pay3d:'覆盖 200+ 国家与地区',
  co_submit_a:'提交订单 · ', co_safe:'订单信息加密传输 · 模拟支付不产生真实交易',
  co_summary:'订单摘要', co_code_ph:'优惠码（试试 WELCOME5）', co_apply:'应用',
  co_line_sub:'商品小计', co_line_sale:'周年庆 9 折', co_line_code:'优惠码 WELCOME5', co_line_ship:'国际运费', co_line_total:'应付合计',
  co_err:'请完整填写收货信息', co_processing:'支付处理中…',
  co_ok_title:'下单成功！', co_ok_p:'感谢购买秦味，订单已进入西安保税仓处理流程。',
  co_ok_no:'订单号', co_ok_items_a:'共 ', co_ok_items_b:' 件商品 · 预计 ', co_ok_items_c:' 前送达 ',
  co_ok_demo:'* 本单为毕业设计演示订单，不会产生真实发货与扣款。',
  co_ok_btn:'继续购物', co_ok_btn2:'再逛一圈',
  nf_title:'页面不存在或已被下架', nf_btn:'返回首页', nf_shop:'去逛逛',
  toast_cart:'已加入购物车 ✓', toast_cart_gan:'已加入购物车 ✓（可在详情页换口味）',
  toast_wish:'已加入收藏 ♥', toast_unwish:'已取消收藏', toast_clear:'购物车已清空',
  toast_cart_empty:'购物车还是空的～', toast_cart_was_empty:'购物车本来就是空的',
  toast_search:'请输入想找的商品', toast_sub_ok:'订阅成功！$3 新人券已发放到邮箱 🎁（演示）',
  toast_code_ok:'优惠码已生效：立减 $5 ✓', toast_code_bad:'优惠码无效，试试 WELCOME5', toast_code_empty:'请输入优惠码',
  title_home:'首页', title_shop:'全部商品', title_product:'商品详情', title_about:'品牌故事',
  title_suffix:'秦味 QINWEI｜宝鸡擀面皮 全球直邮',
},
en: {
  announce1:'🌍 Anniversary Sale · 10% Off Sitewide', announce2:'Free Shipping Over <b>$49</b> Worldwide', announce3:'New Customers: Code <b>WELCOME5</b> for $5 Off',
  nav_home:'Home', nav_shop:'Shop All', nav_gan:'Ganmianpi', nav_about:'Our Story', nav_contact:'Contact',
  search_ph:'Search ganmianpi, chili oil…', country:'Global',
  hero_kicker:'QINWEI · SHAANXI FLAVORS, WORLDWIDE',
  hero_h1_a:'A Bowl of Ganmianpi', hero_h1_b:'Loved on Four Continents',
  hero_sub:'A 300-year-old heritage taste from Baoji, Shaanxi — vacuum-sealed and shipped to 32 countries. Open, mix, and it tastes like the street stall back home.',
  hero_buy:'Buy Now', hero_craft:'See How It\'s Made',
  hero_n1:'Vacuum-sealed · 180-day shelf life', hero_n2:'Ships to 32 countries', hero_n3:'Ships within 48 hours',
  hero_chip1:'🏅 Provincial Heritage Craft', hero_chip2:'🌶 <b>3 flavors</b> to choose', hero_chip3:'✈ Delivered to <b>32 countries</b>',
  stat1:'Countries Served', stat2:'Servings a Year', stat3:'Positive Reviews', stat4:'Years of Heritage',
  sig_kicker:'SIGNATURE · BESTSELLER', sig_title:'Baoji Ganmianpi',
  sig_en:'Baoji Gan Mian Pi · 8 Million Servings a Year',
  sig_desc:'From an old workshop at the foot of Qishan Mountain to tables in 32 countries — three generations of heritage technique, six hours of temperature-controlled fermentation, and vacuum-sealed freshness. The one thing that never changed: the chew.',
  sig_no_cook:'No cooking needed', sig_shelf:'180-day shelf life',
  flash_label:'⚡ Anniversary <b>10% OFF</b> · Ends in', sig_from:'from / 6-pack',
  sig_buy:'Shop Now', sig_story:'Our Story',
  fla_kicker:'FLAVORS', fla_title:'Three Flavors, One Home Taste', fla_sub:'Sauce packets come separately — spice it your way, even if you can\'t handle heat.',
  fla_try:'Try This One',
  shopall_kicker:'SHOP ALL', shopall_title:'The Shaanxi Pantry, All in One Place', shopall_sub:'Noodles, sauces, snacks and gift boxes — everything from a Shaanxi dinner table.',
  shopall_more:'View All Products',
  why_kicker:'WHY QINWEI', why_title:'Why Food Lovers in 32 Countries Choose QINWEI',
  logi_kicker:'CROSS-BORDER LOGISTICS', logi_title:'Cross-Border Delivery, Door to Door', logi_sub:'Shipped from our Xi\'an warehouse with full tracking — delivered safely to your door.',
  gal_kicker:'FROM THE KITCHEN', gal_title:'Real Photos, Real Food', gal_sub:'No studio shots — just honest moments from kitchens, street stalls and old shops.',
  rev_kicker:'GLOBAL REVIEWS', rev_title:'Real Reviews from Around the World',
  rev_sub:'Average 4.9 · 98.6% positive · from buyers in 32 countries & regions', rev_verified:'Verified Purchase',
  story_kicker:'OUR STORY', story_title_a:'From a Baoji Street Stall', story_title_b:'to Tables Worldwide',
  story_p1:'In 1921, a noodle stall opened on Jing\'er Road, Baoji. A century later, that bowl of ganmianpi crossed oceans to reach tables in 32 countries.',
  story_p2:'The packaging and logistics changed. The 5 a.m. dough-kneading, starch-washing and rolling never did.',
  story_btn:'Enter QINWEI',
  news_kicker:'NEWSLETTER', news_title:'Subscribe & Get $3 Off', news_sub:'New products, deals and overseas-Chinese specials — delivered to your inbox.',
  news_ph:'Your email address', news_btn:'Subscribe',
  f_about:'About QINWEI', f_craft:'Our Craft', f_ship:'Global Delivery', f_cert:'Certifications',
  f_col_brand:'Brand', f_col_service:'Service', f_col_help:'Help', f_col_contact:'Contact',
  f_delivery:'Shipping Info', f_returns:'Returns Policy', f_damage:'Damage Refund', f_faq:'FAQ',
  f_guide:'Getting Started', f_customs:'Customs & Clearance', f_pay:'Payment Methods',
  f_addr:'No. 88, Food Industrial Park, Hi-Tech Zone, Baoji, Shaanxi, China', f_hours:'Mon-Fri 9:00 - 18:00 (Beijing time)',
  f_pay_union:'UnionPay', f_pay_alipay:'Alipay', f_pay_wechat:'WeChat Pay', f_carrier:'SF International',
  f_desc:'Bringing the flavors of Shaanxi to every corner of the world. A century of heritage taste from Baoji, shipped to 32 countries and regions.',
  f_copyright:'© 2026 QINWEI FOODS · Demo Store ｜ ICP 陕2026-880066-1',
  f_demo:'This is a cross-border e-commerce demo site for a graduation project. All products, prices, reviews and orders are simulated — no real transactions occur.',
  f_photos:'Food photos from Wikimedia Commons (CC BY / CC BY-SA), used for educational demo only.',
  drawer_title:'Cart', drawer_subtotal:'Subtotal (excl. shipping)', drawer_note:'International shipping & duties calculated at checkout',
  drawer_checkout:'Checkout', drawer_clear:'Clear Cart',
  drawer_empty:'Your cart is empty — go find something tasty!',
  ship_progress_free:'🎉 Free worldwide shipping unlocked!', ship_progress_more_a:'Add ', ship_progress_more_b:' more for free worldwide shipping',
  shop_title_all:'All Products', shop_sub:'Shaanxi flavors · Worldwide delivery · Free shipping over $49',
  shop_results:'Results for', shop_count_a:'', shop_count_b:' products',
  sort_featured:'Featured', sort_sales:'Best Selling', sort_price_asc:'Price: Low to High', sort_price_desc:'Price: High to Low',
  shop_empty:'No products found — try another keyword',
  crumb_home:'Home', crumb_all:'All Products',
  tab_desc:'Details', tab_craft:'Craft', tab_reviews:'Reviews', tab_faq:'FAQ',
  d_sold_a:'', d_sold_b:' sold',
  d_flavor:'Choose Flavor', d_flavor_note:'sauce packets separate — spice it your way',
  d_pack:'Choose Pack', d_spec:'Spec',
  d_stock_a:'', d_stock_b:' in stock overseas',
  d_add:'Add to Cart', d_buy:'Buy Now',
  svc1:'Authentic', svc2:'7-Day Returns', svc3:'Damage Covered', svc4:'Worldwide Shipping',
  d_ship:'Estimated delivery to US / EU / AU in 7-12 business days · full tracking',
  d_sale_chip:'Anniversary 10% OFF', d_ship_chip:'Free ship over $49',
  d_cny_a:'≈ ¥', d_cny_b:' CNY (est. rate 7.2, reference only)',
  d_params:'Specifications', d_nutrition:'Nutrition Facts (per 100g)', d_cert:'Export Certifications',
  d_demo:'* Product info on this page is demo data for a graduation project.',
  d_review_note:'reviews · 98.6% positive', d_review_demo:'* Reviews are demo data.',
  related_kicker:'YOU MAY ALSO LIKE', related_title:'You May Also Like',
  ab_kicker:'OUR STORY · SINCE 1921', ab_title_a:'A Century of', ab_title_b:'Going Global',
  ab_p1:'In 1921, a nameless noodle stall opened on Jing\'er Road, Baoji. The owner got up at 4 a.m. every day to knead, wash and roll — each sheet of noodle skin thin enough to see through.',
  ab_p2:'A century later, that bowl crossed oceans to 32 countries. The packaging changed; the 5 a.m. routine never did.',
  ab_cta:'Taste the Bowl',
  ab_t1:'QINWEI Foods was founded in 2016 in the High-Tech Food Industrial Park of Baoji, Shaanxi. The founder comes from a noodle-skin family — his grandfather ran a stall on Baoji\'s old street for over forty years. The mission was simple: let Shaanxi people far from home taste home anytime. Then we discovered that homesickness speaks every language.',
  ab_t2:'We moved the old craft into temperature-controlled workshops: the same starch-washing, the same fermentation time, the same hand-rolling — only vacuum-sealing replaced the street-side stall. In 2019, the first batch of ganmianpi left Xi\'an Port for Singapore. By 2026, QINWEI ships to 32 countries across five continents.',
  ab_ml_kicker:'MILESTONES', ab_ml_title:'A Century of Milestones',
  ab_craft_kicker:'CRAFT', ab_craft_title:'Six Steps, Not One Skipped',
  ab_cert_kicker:'CERTIFICATION', ab_cert_title:'Export-Grade Certifications',
  ab_contact_kicker:'CONTACT', ab_contact_title:'Contact Us',
  ab_c1_t:'Customer Email', ab_c1_d:'service@qinwei-foods.com<br>Partnership: bd@qinwei-foods.com',
  ab_c2_t:'Hotline', ab_c2_d:'+86 917 8888 666<br>Overseas: +86 29 6666 8888',
  ab_c3_t:'Address', ab_c3_d:'No. 88, Food Industrial Park, Hi-Tech Zone, Baoji, Shaanxi, China<br>Mon-Fri 9:00-18:00 (Beijing time)',
  ab_street_cap:'Xi\'an Muslim Street · a century-old food market',
  co_title:'Checkout', co_demo:'Demo environment — no real charge will occur.',
  co_name:'Full Name', co_email:'Email', co_country:'Country / Region', co_phone:'Phone', co_address:'Address',
  co_name_ph:'John Doe', co_email_ph:'you@example.com', co_country_ph:'Select', co_phone_ph:'+1 555 000 0000',
  co_address_ph:'Street, city, postal code',
  co_ship:'Shipping Method', co_std:'Standard International', co_std_d:'10-15 business days', co_std_free:'Free over $49 · 10-15 business days',
  co_exp:'Express International', co_exp_d:'7-10 business days · DHL Priority', co_free:'FREE',
  co_pay:'Payment Method (Simulated)', co_pay1:'Alipay / WeChat Pay', co_pay1d:'Best for users in China',
  co_pay2:'Visa / Mastercard', co_pay2d:'USD & EUR supported', co_pay3:'PayPal', co_pay3d:'200+ countries & regions',
  co_submit_a:'Place Order · ', co_safe:'Encrypted checkout · simulated payment, no real transaction',
  co_summary:'Order Summary', co_code_ph:'Coupon code (try WELCOME5)', co_apply:'Apply',
  co_line_sub:'Subtotal', co_line_sale:'Anniversary 10% Off', co_line_code:'Coupon WELCOME5', co_line_ship:'International Shipping', co_line_total:'Total Due',
  co_err:'Please complete the shipping form', co_processing:'Processing payment…',
  co_ok_title:'Order Placed!', co_ok_p:'Thank you! Your order is now being processed at our Xi\'an warehouse.',
  co_ok_no:'Order No.', co_ok_items_a:'', co_ok_items_b:' items · estimated delivery to ', co_ok_items_c:' by ',
  co_ok_demo:'* This is a demo order for a graduation project — no real shipment or charge will occur.',
  co_ok_btn:'Continue Shopping', co_ok_btn2:'Keep Browsing',
  nf_title:'Page not found or delisted', nf_btn:'Back to Home', nf_shop:'Browse Products',
  toast_cart:'Added to cart ✓', toast_cart_gan:'Added to cart ✓ (switch flavors on product page)',
  toast_wish:'Added to wishlist ♥', toast_unwish:'Removed from wishlist', toast_clear:'Cart cleared',
  toast_cart_empty:'Your cart is empty', toast_cart_was_empty:'Cart is already empty',
  toast_search:'Type a product name', toast_sub_ok:'Subscribed! A $3 coupon is on its way 🎁 (demo)',
  toast_code_ok:'Coupon applied: $5 off ✓', toast_code_bad:'Invalid coupon — try WELCOME5', toast_code_empty:'Please enter a coupon code',
  title_home:'Home', title_shop:'All Products', title_product:'Product', title_about:'Our Story',
  title_suffix:'QINWEI | Baoji Ganmianpi · Worldwide Delivery',
}
};

let LANG = 'zh';
try { LANG = localStorage.getItem('qinwei-lang') === 'en' ? 'en' : 'zh'; } catch(e){}
const t = k => (I18N[LANG] && I18N[LANG][k] != null) ? I18N[LANG][k] : (I18N.zh[k] != null ? I18N.zh[k] : k);
const L = o => (LANG === 'en' && o && o.en !== undefined) ? o.en : o.zh;

/* ---------------- 数据 ---------------- */

const CATS = { all:{zh:'全部',en:'All'}, noodle:{zh:'面食速食',en:'Noodles'}, sauce:{zh:'调味酱料',en:'Sauces'}, snack:{zh:'陕西小吃',en:'Snacks'}, gift:{zh:'礼盒套装',en:'Gift Boxes'} };

const PRODUCTS = [
  {
    id:'ganmianpi',
    name:{zh:'秦味·宝鸡擀面皮', en:'QINWEI Baoji Ganmianpi'},
    sub:{zh:'Baoji Gan Mian Pi · Cold Noodle Skin', en:'Baoji Gan Mian Pi · Cold Noodle Skin'},
    cat:'noodle', price:13.99, orig:16.99,
    unit:{zh:'6 袋装 · 230g×6', en:'6-pack · 230g×6'},
    rating:4.9, reviews:3268, sales:32680,
    sold:{zh:'2.1 万', en:'21k'},
    badge:{zh:'镇店之宝', en:'BESTSELLER'},
    tags:{zh:['非遗工艺','免煮速食','出口品质'], en:['Heritage Craft','No-Cook','Export Grade']},
    photos:[
      {src:'images/photos/ganmianpi-main.jpg', alt:{zh:'一碗地道的宝鸡擀面皮', en:'A bowl of authentic Baoji ganmianpi'}},
      {src:'images/photos/ganmianpi-2.jpg', alt:{zh:'擀面皮实拍', en:'Ganmianpi close-up'}},
      {src:'images/photos/ganmianpi-bowls.jpg', alt:{zh:'三碗凉皮', en:'Three bowls of liangpi'}},
      {src:'images/photos/ganmianpi-3.jpg', alt:{zh:'石河子风味凉皮', en:'Shihezi-style liangpi'}},
      {src:'images/photos/ganmianpi-4.jpg', alt:{zh:'丝路餐厅凉皮', en:'Liangpi at a Silk Road restaurant'}}
    ],
    short:{
      zh:'街边现做的地道宝鸡味，真空锁鲜直邮全球。面皮筋道弹牙，秦椒红油香而不燥。',
      en:'Street-stall taste from Baoji, vacuum-sealed and shipped worldwide. Chewy noodle skin, aromatic Qin-pepper chili oil.'
    },
    flavors:[
      { id:'spicy', name:{zh:'经典香辣',en:'Classic Spicy'}, img:'images/photos/flavor-spicy.jpg', heat:'🌶🌶',
        desc:{zh:'秦椒炼油，香而不燥，微微回甘。', en:'Qin pepper chili oil — aromatic, not overpowering, with a sweet finish.'} },
      { id:'sesame', name:{zh:'秘制麻酱',en:'Sesame Paste'}, img:'images/photos/flavor-sesame.jpg', heat:'🌶',
        desc:{zh:'石磨芝麻酱裹住每根面皮，浓郁醇厚。', en:'Stone-ground sesame paste coats every strand — rich and nutty.'} },
      { id:'sour', name:{zh:'老坛酸辣',en:'Hot & Sour'}, img:'images/photos/flavor-sour.jpg', heat:'🌶🌶🌶',
        desc:{zh:'老陈醋的酸遇上油泼辣子的辣，越拌越开胃。', en:'Aged vinegar meets sizzling chili oil — the more you mix, the more you crave.'} }
    ],
    packs:[
      { id:'p6', name:{zh:'6 袋装',en:'6-Pack'}, price:13.99, note:{zh:'尝鲜首选',en:'Best to start'} },
      { id:'p12', name:{zh:'12 袋装',en:'12-Pack'}, price:23.98, note:{zh:'立省 $4',en:'Save $4'} }
    ],
    detail:{
      zh:['宝鸡擀面皮，是陕西宝鸡的地标性小吃，也是一张可以邮寄的"乡愁名片"。秦味团队与宝鸡老字号面皮世家合作，把街边现做的擀面皮做成了真空锁鲜的常温速食——面皮筋道弹牙，秦椒红油香而不燥，香醋由岐山老醋坊直供，芝麻酱石磨现磨。',
          '免煮免泡：拆袋把面皮抖散，倒入三包酱料，拌开即食。冬天想吃口热的，连袋隔水蒸 3 分钟，口感更软糯。每袋 230g（面皮 150g + 料包 80g），一袋就是一碗。'],
      en:['Ganmianpi is the signature street food of Baoji, Shaanxi — a "postcard of homesickness" that can be mailed anywhere. QINWEI works with a century-old noodle-skin family in Baoji to turn this street-stall classic into a vacuum-sealed, shelf-stable ready meal: chewy noodle skin, aromatic Qin-pepper chili oil, vinegar straight from a Qishan brewery, and stone-ground sesame paste.',
          'No cooking, no soaking: open the pack, loosen the strands, pour in the three sauce packets and mix. Craving something hot in winter? Steam the sealed pack for 3 minutes for an even softer bite. Each pack is 230g (150g noodle skin + 80g sauces) — one pack, one bowl.']
    },
    specs:{
      zh:[['品名','秦味·宝鸡擀面皮'],['净含量','230g × 6 袋（面皮 150g + 料包 80g）'],['原产地','陕西省宝鸡市'],['保质期','常温 180 天'],['储存方法','阴凉干燥避光处，开封后请当日食用'],['食用方法','免煮即食，冬季可连袋隔水蒸 3 分钟'],['生产许可证','SC1061610342（演示编号）'],['出口备案','6100/2019 出口食品生产企业备案']],
      en:[['Product','QINWEI Baoji Ganmianpi'],['Net Weight','230g × 6 (noodle skin 150g + sauces 80g)'],['Origin','Baoji, Shaanxi, China'],['Shelf Life','180 days at room temperature'],['Storage','Cool, dry place away from sunlight; consume on day of opening'],['How to Eat','No cooking needed; steam sealed pack for 3 min in winter'],['Production License','SC1061610342 (demo)'],['Export Registration','6100/2019 (registered food exporter)']]
    },
    nutrition:['能量 Energy','812 kJ','蛋白质 Protein','5.6 g','脂肪 Fat','9.8 g','碳水化合物 Carbohydrate','20.3 g','钠 Sodium','786 mg']
  },
  {
    id:'saozi-mian',
    name:{zh:'岐山臊子面', en:'Qishan Saozi Noodles'},
    sub:{zh:'Qishan Saozi Noodles', en:'Qishan Saozi Noodles'},
    cat:'noodle', price:12.99, orig:14.99,
    unit:{zh:'4 份装 · 手工挂面', en:'4 servings · hand-dried noodles'},
    rating:4.8, reviews:2104, sales:21040,
    sold:{zh:'1.3 万', en:'13k'},
    badge:{zh:'热卖', en:'HOT'},
    tags:{zh:['手工挂面','酸辣鲜香','一包一餐'], en:['Hand-Dried','Sour & Savory','One Pack, One Meal']},
    photos:[
      {src:'images/photos/saozi-main.jpg', alt:{zh:'一碗岐山臊子面', en:'A bowl of Qishan saozi noodles'}},
      {src:'images/photos/saozi-2.jpg', alt:{zh:'巴黎餐厅的岐山面', en:'Qishan noodles at a Paris restaurant'}},
      {src:'images/photos/saozi-3.jpg', alt:{zh:'岐山面特写', en:'Qishan noodles close-up'}}
    ],
    short:{
      zh:'薄筋光、煎稀汪、酸辣香。手工挂面配秘制肉臊子，酸香开胃，一包就是一餐。',
      en:'Thin, chewy, glossy noodles in a sour-spicy broth with slow-cooked pork — a full meal in one pack.'
    },
    detail:{
      zh:['岐山臊子面讲究"薄、筋、光、煎、稀、汪、酸、辣、香"九个字。秦味选用岐山当地手工挂面，配以文火慢炒的猪肉臊子、岐山醋与秦椒红油，复刻关中人待客的那一碗。',
          '面条下锅 3 分钟，臊子汤包隔水加热，浇上即可。加班深夜、异国冬夜，一碗热腾腾的臊子面最能抚胃。'],
      en:['Qishan saozi noodles are judged by nine characters: thin, chewy, glossy, hot, brothy, rich, sour, spicy, fragrant. QINWEI pairs local hand-dried noodles with slow-stir-fried pork cubes, Qishan vinegar and Qin-pepper chili oil to recreate the bowl Guanzhong people serve their guests.',
          'Boil the noodles for 3 minutes, heat the broth pack and pour. Late nights at work or winter evenings abroad — nothing soothes like a hot bowl of saozi noodles.']
    }
  },
  {
    id:'biangbiang',
    name:{zh:'西安 biangbiang 面', en:'Xi\'an Biangbiang Noodles'},
    sub:{zh:'Xi\'an Biangbiang Noodles', en:'Xi\'an Biangbiang Noodles'},
    cat:'noodle', price:13.99, orig:15.99,
    unit:{zh:'5 袋装 · 裤带面', en:'5 packs · belt-wide noodles'},
    rating:4.8, reviews:1896, sales:18960,
    sold:{zh:'1.1 万', en:'11k'},
    badge:{zh:'新品', en:'NEW'},
    tags:{zh:['宽面筋道','油泼辣子','关中一绝'], en:['Belt-Wide','Oil-Splash Chili','Guanzhong Icon']},
    photos:[
      {src:'images/photos/biangbiang-main.jpg', alt:{zh:'biangbiang 面和它的汉字', en:'Biangbiang noodles with its character'}},
      {src:'images/photos/biangbiang-2.jpg', alt:{zh:'biangbiang 面特写', en:'Biangbiang noodles close-up'}},
      {src:'images/photos/biangbiang-3.jpg', alt:{zh:'裤带面和酱汁', en:'Belt noodles and sauce'}},
      {src:'images/photos/biangbiang-4.jpg', alt:{zh:'北京秦唐驿的 biangbiang 面', en:'Biangbiang noodles at a Shaanxi restaurant'}}
    ],
    short:{
      zh:'关中八大怪，面条像裤带。宽面筋道挂汁，油泼辣子一浇，"滋啦"一声，满屋香。',
      en:'One of the Eight Oddities of Guanzhong: noodles as wide as a belt. Splash on hot chili oil — sizzle! — and the room smells amazing.'
    },
    detail:{
      zh:['biangbiang 面是陕西面食的门面：面条宽如裤带，师傅在案板上摔打抻扯，煮熟后泼上一勺滚烫的秦椒辣油，撒上葱花蒜末，香气冲天。',
          '秦味用真空半干面还原宽面口感，配秘制油泼料包。煮 4 分钟，一泼一拌，在家也能还原西安面馆的仪式感。'],
      en:['Biangbiang noodles are the poster child of Shaanxi noodles: wide as a belt, slapped and stretched on the board, then doused with a ladle of smoking Qin-pepper oil and finished with scallions and garlic.',
          'QINWEI recreates the bite with vacuum-packed semi-dried noodles and a secret oil-splash sauce pack. Boil 4 minutes, splash, mix — Xi\'an noodle-house ritual at home.']
    }
  },
  {
    id:'chili-oil',
    name:{zh:'秦味油泼辣子', en:'QINWEI Chili Oil'},
    sub:{zh:'Youpo Chili Oil', en:'Youpo Chili Oil'},
    cat:'sauce', price:9.99, orig:12.99,
    unit:{zh:'210g × 2 瓶', en:'210g × 2 jars'},
    rating:4.9, reviews:2871, sales:28710,
    sold:{zh:'1.8 万', en:'18k'},
    badge:{zh:'口碑爆款', en:'CULT FAVORITE'},
    tags:{zh:['秦岭秦椒','石臼捣制','拌啥都香'], en:['Qinling Peppers','Stone-Ground','Goes with Everything']},
    photos:[
      {src:'images/photos/chilioil-main.jpg', alt:{zh:'餐厅里的油泼辣子', en:'Chili oil at a restaurant'}},
      {src:'images/photos/chilioil-2.jpg', alt:{zh:'辣椒油配红醋', en:'Chili oil with red vinegar'}},
      {src:'images/photos/chilioil-3.jpg', alt:{zh:'兰州面馆的辣椒油', en:'Chili oil at a Lanzhou noodle house'}}
    ],
    short:{
      zh:'只用秦岭北麓的秦椒，石臼捣碎，热油一泼，香辣层次分明。拌面、蘸饺子、炒菜皆宜。',
      en:'First-pick Qin peppers from the northern Qinling range, stone-ground and splashed with hot oil. Mix, dip, stir-fry — it saves any meal.'
    },
    detail:{
      zh:['秦椒，辣椒里的"香型选手"——辣而不烈，香得出奇。秦味只收每年八月的秦岭北麓头茬秦椒，晾晒后石臼捣碎，与白芝麻、花生碎一同淋上菜籽热油。',
          '拌擀面皮、蘸饺子、拌凉菜、夹馍、炒菜……一瓶辣子，能救活一桌饭。出口装采用玻璃瓶 + 真空封口，无惧长途颠簸。'],
      en:['Qin pepper is the "aroma player" of the chili world — flavorful without the burn. QINWEI harvests only the first crop from the northern Qinling range every August, sun-dries, stone-grinds, then splashes with sizzling rapeseed oil, white sesame and crushed peanuts.',
          'Toss with ganmianpi, dip dumplings, dress cold dishes, stuff into flatbread, stir-fry — one jar revives a whole table. Export packs use glass jars with vacuum seals that survive the longest journeys.']
    }
  },
  {
    id:'vinegar',
    name:{zh:'岐山香醋', en:'Qishan Aromatic Vinegar'},
    sub:{zh:'Qishan Aromatic Vinegar', en:'Qishan Aromatic Vinegar'},
    cat:'sauce', price:8.99, orig:10.99,
    unit:{zh:'500ml × 2 瓶', en:'500ml × 2 bottles'},
    rating:4.8, reviews:1633, sales:16330,
    sold:{zh:'9860', en:'9.9k'},
    badge:{zh:'热卖', en:'HOT'},
    tags:{zh:['古法固态发酵','酸香回甘','零添加'], en:['Solid-State Ferment','Sweet Finish','No Additives']},
    photos:[
      {src:'images/photos/vinegar-main.jpg', alt:{zh:'中国香醋', en:'Chinese aromatic vinegar'}},
      {src:'images/photos/vinegar-2.jpg', alt:{zh:'镇江香醋', en:'Zhenjiang-style vinegar'}},
      {src:'images/photos/vinegar-3.jpg', alt:{zh:'饺子配黑醋', en:'Dumplings with black vinegar'}}
    ],
    short:{
      zh:'岐山醋坊古法固态发酵，酸香醇厚回甘，是擀面皮、臊子面的灵魂所在。',
      en:'Traditional solid-state fermentation from Qishan breweries — the soul of ganmianpi and saozi noodles.'
    },
    detail:{
      zh:['西府人常说："没有岐山醋，擀面皮就没了魂。"岐山醋沿用明代古法固态发酵工艺，以小麦、豌豆、麸皮为原料，历经蒸、酵、淋、陈四道大工序，陈放半年以上。',
          '酸中带香，入口回甘，不呛不涩。凉拌、蘸食、烧菜皆宜，一瓶下去就知道和超市白醋的区别。'],
      en:['As the locals say: without Qishan vinegar, ganmianpi loses its soul. Made from wheat, peas and bran through a Ming-dynasty solid-state fermentation — steaming, fermenting, drenching and aging for over half a year.',
          'Fragrant sourness with a sweet finish, never sharp or astringent. Dress, dip, braise — one bottle and you\'ll never go back to plain white vinegar.']
    }
  },
  {
    id:'zenggao',
    name:{zh:'陕西甑糕', en:'Zeng Gao Sticky Rice Cake'},
    sub:{zh:'Zeng Gao Sticky Rice Cake', en:'Zeng Gao Sticky Rice Cake'},
    cat:'snack', price:11.99, orig:13.99,
    unit:{zh:'400g × 2 盒', en:'400g × 2 boxes'},
    rating:4.7, reviews:1245, sales:12450,
    sold:{zh:'7620', en:'7.6k'},
    badge:{zh:'新品', en:'NEW'},
    tags:{zh:['陕北红枣','慢蒸八小时','软糯香甜'], en:['Northern Dates','8-Hour Steam','Soft & Sweet']},
    photos:[
      {src:'images/photos/zenggao-main.jpg', alt:{zh:'带红枣的糯米八宝饭', en:'Glutinous rice cake with dates'}},
      {src:'images/photos/zenggao-2.jpg', alt:{zh:'鼎泰丰的八宝饭', en:'Eight-treasure rice at Din Tai Fung'}},
      {src:'images/photos/zenggao-3.jpg', alt:{zh:'八宝饭', en:'Eight-treasure rice'}}
    ],
    short:{
      zh:'关中传统甜食，糯米与陕北红枣层层相叠，慢火蒸足八小时，软糯香甜。',
      en:'A Guanzhong classic: sticky rice layered with northern Shaanxi dates, slow-steamed for eight hours.'
    },
    detail:{
      zh:['甑（zèng）糕是关中人的童年味道：糯米、陕北滩枣层层铺进木甑，大火烧开，文火慢蒸八个小时，米枣交融，甜香扑鼻。',
          '秦味采用铝箔锁鲜盒包装，开盒即食；想吃热的，连盒蒸 15 分钟，口感如刚出甑。早餐配一碗稠酒，就是老陕的讲究。'],
      en:['Zeng gao is the taste of a Guanzhong childhood: sticky rice and northern Shaanxi jujubes layered into a wooden steamer, brought to a boil, then steamed gently for eight hours until rice and dates melt into each other.',
          'QINWEI packs it in foil-sealed boxes — ready to eat. Prefer it hot? Steam the whole box for 15 minutes. Pair with a cup of choujiu for the full old-Shaanxi breakfast.']
    }
  },
  {
    id:'choujiu',
    name:{zh:'黄桂稠酒', en:'Huanggui Choujiu Rice Wine'},
    sub:{zh:'Huanggui Choujiu Rice Wine', en:'Huanggui Choujiu Rice Wine'},
    cat:'snack', price:15.99, orig:18.99,
    unit:{zh:'500ml × 2 瓶', en:'500ml × 2 bottles'},
    rating:4.8, reviews:987, sales:9870,
    sold:{zh:'6050', en:'6.1k'},
    badge:{zh:'热卖', en:'HOT'},
    tags:{zh:['糯米发酵','低度甜酒','桂香扑鼻'], en:['Sticky-Rice Brew','Low-Alcohol','Osmanthus Aroma']},
    photos:[
      {src:'images/photos/choujiu-main.jpg', alt:{zh:'一碗酒酿', en:'A bowl of fermented rice wine'}},
      {src:'images/photos/choujiu-2.jpg', alt:{zh:'赤豆酒酿元宵', en:'Red-bean jiuniang tangyuan'}},
      {src:'images/photos/choujiu-3.jpg', alt:{zh:'枸杞酒酿丸子', en:'Goji jiuniang rice balls'}}
    ],
    short:{
      zh:'西安黄桂稠酒，糯米发酵的低度甜酒，桂香扑鼻，温饮最抚人心。',
      en:'Xi\'an\'s century-old osmanthus rice wine — under 2% alcohol, sweet and mellow. Warm it up and let it soothe you.'
    },
    detail:{
      zh:['黄桂稠酒是西安的百年名饮，以糯米为原料，加入黄桂酱低温发酵，酒精度不到 2%，甜润稠滑，老人孩子也能抿上一小杯。',
          '冷饮清爽，温饮暖胃。冬日里温到 40℃，配甑糕或擀面皮，是最地道的关中下午茶。'],
      en:['Huanggui choujiu is Xi\'an\'s century-old drink: sticky rice slow-fermented with osmanthus paste to under 2% alcohol — sweet, smooth and gentle enough for the whole family.',
          'Serve chilled for refreshment, or warmed to 40°C in winter. With zeng gao or ganmianpi, it makes the most authentic Guanzhong afternoon tea.']
    }
  },
  {
    id:'giftbox',
    name:{zh:'三秦风味甄选礼盒', en:'Shaanxi Flavor Gift Box'},
    sub:{zh:'Shaanxi Flavor Gift Box', en:'Shaanxi Flavor Gift Box'},
    cat:'gift', price:39.99, orig:49.99,
    unit:{zh:'甄选礼盒 · 手提袋', en:'Gift box · carry bag included'},
    rating:4.9, reviews:1560, sales:15600,
    sold:{zh:'9540', en:'9.5k'},
    badge:{zh:'送礼首选', en:'PERFECT GIFT'},
    tags:{zh:['一站集齐','国潮设计','体面有面'], en:['All in One','China-Chic Design','Gift-Ready']},
    photos:[
      {src:'images/photos/giftbox-main.jpg', alt:{zh:'精美食品礼盒', en:'A beautiful food gift box'}},
      {src:'images/photos/giftbox-2.jpg', alt:{zh:'杏花楼经典礼盒', en:'Xing Hua Lou classic tin box'}},
      {src:'images/photos/giftbox-3.jpg', alt:{zh:'中秋限定礼盒', en:'Mid-autumn limited gift box'}}
    ],
    short:{
      zh:'擀面皮、臊子面、油泼辣子、岐山香醋一站集齐，配国潮礼盒与手提袋，送礼体面。',
      en:'Ganmianpi, saozi noodles, chili oil and Qishan vinegar in one China-chic box with a carry bag — a gift that impresses.'
    },
    detail:{
      zh:['把整个三秦装进一个盒子：宝鸡擀面皮 4 袋、岐山臊子面 2 份、油泼辣子 1 瓶、岐山香醋 1 瓶，外加一盒甑糕作甜点收尾。',
          '礼盒采用国潮插画设计，配手提袋与手写祝福卡（下单可备注留言）。送客户、送长辈、送海外朋友，都是拿得出手的心意。'],
      en:['The whole of Shaanxi in one box: 4 packs of Baoji ganmianpi, 2 servings of Qishan saozi noodles, 1 jar of chili oil, 1 bottle of Qishan vinegar — plus a box of zeng gao to finish sweet.',
          'China-chic illustrated packaging with a carry bag and handwritten greeting card (leave your message at checkout). For clients, elders or friends abroad, it\'s a gift with real thought behind it.']
    }
  }
];

const REVIEWS = [
  { pid:'ganmianpi', name:'Emily Chen', flag:'🇺🇸', loc:{zh:'美国 · 洛杉矶',en:'Los Angeles, USA'}, stars:5, date:'2026-09-18',
    text:{zh:'在西安交换的那学期，每天中午都去学校后门吃凉皮。回国后念念不忘，试过好几家都不对味。这个擀面皮和街头小摊的味道有九成五像，红油特别正，面皮也够筋道。',
          en:'I ate liangpi almost every day during my exchange semester in Xi\'an. Nothing in the US came close — until this. It tastes 95% like the street stall. The chili oil is spot on, and the noodle skin has the right chew.'} },
  { pid:'ganmianpi', name:'佐藤美咲', flag:'🇯🇵', loc:{zh:'日本 · 东京',en:'Tokyo, Japan'}, stars:5, date:'2026-09-02',
    text:{zh:'面皮のもちもちした食感が最高です。中国の同僚にすすめられて買いました。辛さが選べるのも嬉しいポイント。',
          en:'The mochi-like texture of the noodle skin is amazing. My Chinese colleague recommended it, and I love that I can choose the spice level.'} },
  { pid:'ganmianpi', name:'James Wright', flag:'🇬🇧', loc:{zh:'英国 · 伦敦',en:'London, UK'}, stars:5, date:'2026-08-21',
    text:{zh:'Bought it for my wife from Baoji — she says it tastes exactly like home. Shipping to London took 9 days, very well packaged, nothing leaked.',
          en:'Bought it for my wife from Baoji — she says it tastes exactly like home. Shipping to London took 9 days, very well packaged, nothing leaked.'} },
  { pid:'chili-oil', name:'林伟豪', flag:'🇸🇬', loc:{zh:'新加坡',en:'Singapore'}, stars:4, date:'2026-08-09',
    text:{zh:'辣子香而不燥，拌什么都好吃。已经回购第三次了，就是邮费有点肉疼，凑够包邮门槛才划算。',
          en:'Fragrant without the burn — it goes with everything. Third repurchase already. Shipping stings a little, so I always hit the free-shipping threshold.'} },
  { pid:'ganmianpi', name:'Sophie Zhang', flag:'🇦🇺', loc:{zh:'澳大利亚 · 墨尔本',en:'Melbourne, Australia'}, stars:5, date:'2026-07-30',
    text:{zh:'The sesame flavour is our family favourite. Kids love mixing the sauce themselves. 免煮真的很方便，带饭盒去公司当午餐也合适。',
          en:'The sesame flavour is our family favourite. Kids love mixing the sauce themselves. No-cook is so convenient — I pack it for lunch at the office.'} },
  { pid:'giftbox', name:'Lukas M.', flag:'🇩🇪', loc:{zh:'德国 · 柏林',en:'Berlin, Germany'}, stars:4, date:'2026-07-12',
    text:{zh:'First time trying cold noodles — surprisingly refreshing! The gift box is beautiful, bought it as a present for a friend who loves Chinese food.',
          en:'First time trying cold noodles — surprisingly refreshing! The gift box is beautiful, bought it as a present for a friend who loves Chinese food.'} },
  { pid:'saozi-mian', name:'陈嘉怡', flag:'🇨🇦', loc:{zh:'加拿大 · 温哥华',en:'Vancouver, Canada'}, stars:5, date:'2026-06-25',
    text:{zh:'臊子面酸香开胃，一包量很足。温哥华冬天的晚上来一碗，整个人都暖了，跟妈妈说这就是家的味道。',
          en:'Sour, savory, super satisfying — one pack is generous. On a winter night in Vancouver, one bowl warms you right up. I told my mom: this is what home tastes like.'} },
  { pid:'zenggao', name:'박지훈', flag:'🇰🇷', loc:{zh:'韩国 · 首尔',en:'Seoul, South Korea'}, stars:5, date:'2026-06-08',
    text:{zh:'달콤하고 쫀득해서 차와 잘 어울려요. 포장이 아주 정성스럽습니다.（香甜软糯，配茶一绝，包装很用心。）',
          en:'Sweet and chewy — perfect with tea. The packaging is very thoughtful.'} }
];

const FAQS = [
  { q:{zh:'保质期多久？需要冷藏吗？', en:'What is the shelf life? Does it need refrigeration?'},
    a:{zh:'常温 180 天，无需冷藏。请存放在阴凉干燥避光处；开封后请当日食用完。', en:'180 days at room temperature, no refrigeration needed. Store in a cool, dry place away from sunlight; consume on the day of opening.'} },
  { q:{zh:'需要煮吗？怎么吃？', en:'Do I need to cook it? How do I eat it?'},
    a:{zh:'不用煮。拆开真空包装，把面皮抖散，倒入料包拌匀即可。冬天想吃热的，可以连袋隔水蒸 3 分钟，口感更软糯。', en:'No cooking needed. Open the vacuum pack, loosen the strands, add the sauce packets and mix. In winter, steam the sealed pack for 3 minutes for a softer, warmer bite.'} },
  { q:{zh:'能寄到哪些国家？', en:'Which countries do you ship to?'},
    a:{zh:'目前支持全球 32 个国家和地区，包括美国、加拿大、英国、德国、法国、日本、韩国、新加坡、澳大利亚、新西兰等。结算页可以选择配送国家。', en:'We currently ship to 32 countries and regions, including the US, Canada, the UK, Germany, France, Japan, South Korea, Singapore, Australia and New Zealand. Choose your country at checkout.'} },
  { q:{zh:'会被海关扣下吗？', en:'Will customs hold my parcel?'},
    a:{zh:'不会。我们采用具备出口备案资质的合规包装，随箱附英文配料表、生产日期与检验检疫报告，符合目的国食品进口要求，正常通关。', en:'No. All packs meet export-registration standards and include an English ingredient list, production date and inspection report, complying with food import rules in destination countries.'} },
  { q:{zh:'运费怎么算？多久能到？', en:'How much is shipping? How long does it take?'},
    a:{zh:'单笔订单满 $49 全球包邮；不满 $49 标准运费 $9.9 起。美国、欧洲、澳洲一般 7-12 个工作日送达，具体以结算页估算为准。', en:'Free worldwide shipping on orders over $49; otherwise standard shipping starts at $9.9. Delivery to the US, Europe and Australia usually takes 7-12 business days.'} },
  { q:{zh:'辣度可以选吗？能少放辣椒吗？', en:'Can I choose the spice level?'},
    a:{zh:'可以。三种口味辣度不同（麻酱味最温和），且酱包独立包装，可以按自己口味酌量添加。', en:'Yes. The three flavors have different heat levels (Sesame Paste is the mildest), and sauce packets come separately — add as much or as little as you like.'} }
];

const AVATAR_COLORS = ['#B3302A','#C39A3B','#5F7F4E','#7A5C9E','#3E6E8E','#A85D36','#8E4A49','#4E7C6B'];

const GALLERY = [
  { src:'images/photos/ganmianpi-bowls.jpg', cap:{zh:'三碗凉皮，三种心情', en:'Three bowls, three moods'} },
  { src:'images/photos/flavor-sesame.jpg', cap:{zh:'麻酱凉皮 · 巴塞罗那', en:'Sesame liangpi · Barcelona'} },
  { src:'images/photos/biangbiang-main.jpg', cap:{zh:'biangbiang 面 · 面条像裤带', en:'Biangbiang noodles, wide as a belt'} },
  { src:'images/photos/saozi-2.jpg', cap:{zh:'岐山臊子面 · 巴黎', en:'Qishan noodles · Paris'} },
  { src:'images/photos/choujiu-2.jpg', cap:{zh:'赤豆酒酿元宵', en:'Red-bean jiuniang tangyuan'} },
  { src:'images/photos/zenggao-2.jpg', cap:{zh:'八宝饭 · 鼎泰丰', en:'Eight-treasure rice · Din Tai Fung'} },
  { src:'images/photos/giftbox-2.jpg', cap:{zh:'杏花楼经典礼盒', en:'Xing Hua Lou classic tin box'} },
  { src:'images/photos/street-1.jpg', cap:{zh:'西安回民街 · 美食集市', en:'Xi\'an Muslim Street food market'} }
];

/* ---------------- 工具 ---------------- */

const $ = (s, el) => (el || document).querySelector(s);
const fmt = n => '$' + n.toFixed(2);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function stars(r){ const f = Math.round(r); return '<span class="stars">' + '★'.repeat(f) + '☆'.repeat(5 - f) + '</span>'; }
function getProduct(id){ return PRODUCTS.find(p => p.id === id); }

/* ---------------- 购物车 ---------------- */

let cart = [];
try { cart = JSON.parse(localStorage.getItem('qinwei-cart') || '[]'); } catch(e){ cart = []; }
function saveCart(){ try { localStorage.setItem('qinwei-cart', JSON.stringify(cart)); } catch(e){} }
function addToCart(item){
  const hit = cart.find(c => c.key === item.key);
  if (hit) hit.qty += item.qty; else cart.push(item);
  saveCart(); updateCartUI();
}

function updateCartUI(){
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const el = $('#cartCount'); if (el) el.textContent = count > 99 ? '99+' : count;
  const dc = $('#drawerCount'); if (dc) dc.textContent = count + (LANG === 'zh' ? ' 件' : ' items');
  const subEl = $('#drawerSubtotal'); if (subEl) subEl.textContent = fmt(sub);
  const sp = $('#shipProgress');
  if (sp){
    const TH = 49;
    if (sub >= TH) sp.innerHTML = t('ship_progress_free');
    else sp.innerHTML = t('ship_progress_more_a') + '<b>' + fmt(TH - sub) + '</b>' + t('ship_progress_more_b') + '<div class="bar"><i style="width:' + Math.min(100, sub / TH * 100) + '%"></i></div>';
  }
  const di = $('#drawerItems');
  if (di){
    if (!cart.length) di.innerHTML = '<div class="drawer-empty"><svg class="ic"><use href="#i-cart"/></svg><p>' + t('drawer_empty') + '</p></div>';
    else di.innerHTML = cart.map(c => `
      <div class="cart-item">
        <div class="ci-img"><img src="${c.img}" alt="${esc(c.name)}"></div>
        <div class="ci-info">
          <h4>${esc(c.name)}</h4>
          ${c.variant ? '<div class="ci-var">' + esc(c.variant) + '</div>' : ''}
          <div class="ci-row">
            <div class="qty">
              <button class="qty-btn" data-action="cart-minus" data-key="${c.key}" aria-label="-"><svg class="ic"><use href="#i-minus"/></svg></button>
              <input type="text" value="${c.qty}" readonly>
              <button class="qty-btn" data-action="cart-plus" data-key="${c.key}" aria-label="+"><svg class="ic"><use href="#i-plus"/></svg></button>
            </div>
            <span class="ci-price">${fmt(c.price * c.qty)}</span>
          </div>
        </div>
        <button class="ci-remove" data-action="cart-remove" data-key="${c.key}" aria-label="remove"><svg class="ic"><use href="#i-close"/></svg></button>
      </div>`).join('');
  }
}

/* ---------------- 心愿单 / Toast ---------------- */

let wishlist = [];
try { wishlist = JSON.parse(localStorage.getItem('qinwei-wish') || '[]'); } catch(e){ wishlist = []; }
function toggleWish(id){
  const i = wishlist.indexOf(id);
  if (i >= 0){ wishlist.splice(i, 1); toast(t('toast_unwish')); }
  else { wishlist.push(id); toast(t('toast_wish')); }
  try { localStorage.setItem('qinwei-wish', JSON.stringify(wishlist)); } catch(e){}
  refreshWishBtns();
}
function refreshWishBtns(){
  document.querySelectorAll('.wish').forEach(b => b.classList.toggle('on', wishlist.includes(b.dataset.id)));
}

let toastTimer;
function toast(msg){
  const el = $('#toast');
  el.innerHTML = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

/* ---------------- 路由 ---------------- */

function parseHash(){
  const parts = location.hash.split('#');
  const path = (parts[1] || '').replace(/^\/?/, '');
  const anchor = parts[2] || '';
  const [pathOnly, query = ''] = path.split('?');
  const seg = pathOnly.split('/').filter(Boolean);
  return { route: seg[0] || 'home', id: seg[1] || '', params: new URLSearchParams(query), anchor };
}

function router(){
  const { route, id, params, anchor } = parseHash();
  const app = $('#app');
  let html = '';
  if (route === 'home') html = homeHTML();
  else if (route === 'shop') html = shopHTML(params);
  else if (route === 'product') html = id ? productHTML(id) : shopHTML(params);
  else if (route === 'about') html = aboutHTML();
  else html = '<section class="nf container"><h1>404</h1><p>' + t('nf_title') + '</p><a class="btn btn-red" href="#/">' + t('nf_btn') + '</a></section>';
  app.innerHTML = html;
  refreshWishBtns();
  const titleKey = route === 'home' ? '' : (route === 'shop' ? t('title_shop') : route === 'product' ? t('title_product') : t('title_about')) + ' - ';
  document.title = titleKey + t('title_suffix');
  if (!anchor) window.scrollTo({ top: 0, behavior: 'auto' });
  document.querySelectorAll('#mainNav a').forEach(a => {
    const n = a.dataset.nav;
    const active = n === route || (n === 'ganmianpi' && route === 'product' && id === 'ganmianpi');
    a.classList.toggle('active', active);
  });
  initCountdown();
  observeReveals();
  if (anchor) setTimeout(() => {
    if (anchor === 'faq'){ const tb = document.querySelector('[data-tab="faq"]'); if (tb) activateTab('faq'); }
    const el = document.getElementById(anchor) || $('#dTabs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 80);
}
window.addEventListener('hashchange', router);

/* ---------------- 静态文案（data-i18n） ---------------- */

function applyStaticI18n(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('#langBtn span').forEach(s => s.classList.toggle('on', s.dataset.lang === LANG));
}

/* ---------------- 商品卡片 ---------------- */

function cardHTML(p, i = 0){
  const cat = L(CATS[p.cat]);
  const delay = (i % 4) * 70;
  const badge = L(p.badge);
  const badgeCls = p.id === 'ganmianpi' ? 'badge' : p.id === 'giftbox' ? 'badge gold' : 'badge';
  return `
  <div class="card reveal" style="transition-delay:${delay}ms">
    <div class="card-img">
      <a href="#/product/${p.id}" aria-label="${esc(L(p.name))}"><img src="${p.photos[0].src}" alt="${esc(L(p.photos[0].alt))}" loading="lazy"></a>
      <span class="${badgeCls}">${badge}</span>
      <button class="wish" data-action="wish" data-id="${p.id}" aria-label="wishlist"><svg class="ic"><use href="#i-heart"/></svg></button>
    </div>
    <div class="card-body">
      <div class="cat">${cat}</div>
      <h3><a href="#/product/${p.id}">${esc(L(p.name))}</a><span class="en">${esc(L(p.sub))}</span></h3>
      <div class="rate">${stars(p.rating)}<span>${p.rating} · ${p.reviews} ${LANG === 'zh' ? '条评价' : 'reviews'}</span></div>
      <div class="price-row">
        <span class="price">${fmt(p.price)}</span>
        <span class="orig">${fmt(p.orig)}</span>
        <span class="unit">/ ${esc(L(p.unit).split('·')[0].trim())}</span>
      </div>
      <button class="add-btn" data-action="add-card" data-id="${p.id}"><svg class="ic"><use href="#i-cart"/></svg>${t('d_add')}</button>
    </div>
  </div>`;
}

/* ---------------- 首页 ---------------- */

function homeHTML(){
  const p = PRODUCTS[0];
  const revs = REVIEWS.slice(0, 6);
  return `
  <!-- Hero（真实照片背景） -->
  <section class="hero">
    <div class="hero-bg"><img src="images/photos/flavor-spicy.jpg" alt="${esc(L(p.photos[0].alt))}"><div class="hero-veil"></div></div>
    <div class="container hero-in">
      <div class="hero-copy reveal">
        <div class="kicker">${t('hero_kicker')}</div>
        <h1>${t('hero_h1_a')}<br><em>${t('hero_h1_b')}</em></h1>
        <p class="sub">${t('hero_sub')}</p>
        <div class="cta-row">
          <a class="btn btn-red" href="#/product/ganmianpi">${t('hero_buy')} <svg class="ic"><use href="#i-arrow"/></svg></a>
          <a class="btn btn-hero-ghost" href="#/about#craft">${t('hero_craft')}</a>
        </div>
        <ul class="hero-notes">
          <li>${t('hero_n1')}</li><li>${t('hero_n2')}</li><li>${t('hero_n3')}</li>
        </ul>
      </div>
      <div class="hero-art reveal" style="transition-delay:150ms">
        <span class="stamp">${LANG === 'zh' ? '老味道' : 'EST. 1921'}</span>
        <span class="chip chip-1">${t('hero_chip1')}</span>
        <span class="chip chip-2">${t('hero_chip2')}</span>
        <span class="chip chip-3">${t('hero_chip3')}</span>
      </div>
    </div>
    <div class="container hero-stats">
      <div class="stat reveal"><b>32+</b><span>${t('stat1')}</span></div>
      <div class="stat reveal" style="transition-delay:80ms"><b>${LANG === 'zh' ? '800万' : '8M'}</b><span>${t('stat2')}</span></div>
      <div class="stat reveal" style="transition-delay:160ms"><b>98.6%</b><span>${t('stat3')}</span></div>
      <div class="stat reveal" style="transition-delay:240ms"><b>300</b><span>${t('stat4')}</span></div>
    </div>
  </section>

  <div class="marquee"><div class="marquee-track">
    ${'<span>FREE SHIPPING OVER $49</span><span>' + (LANG === 'zh' ? '全球满 $49 包邮' : 'FREE SHIP OVER $49') + '</span><span>' + (LANG === 'zh' ? '真空锁鲜' : 'VACUUM SEALED') + '</span><span>' + (LANG === 'zh' ? '非遗工艺' : 'HERITAGE CRAFT') + '</span><span>WORLDWIDE DELIVERY</span><span>' + (LANG === 'zh' ? '出口 32 国' : '32 COUNTRIES') + '</span><span>48H SHIPPING</span>'.repeat(2)}
  </div></div>

  <!-- 镇店之宝 -->
  <section class="section">
    <div class="container">
      <div class="spotlight reveal">
        <div class="spot-in">
          <div class="spot-img"><img src="${p.photos[0].src}" alt="${esc(L(p.photos[0].alt))}"></div>
          <div class="spot-copy">
            <div class="kicker">${t('sig_kicker')}</div>
            <h2>${t('sig_title')}</h2>
            <div class="en">${t('sig_en')}</div>
            <p>${t('sig_desc')}</p>
            <div class="fchips">
              ${p.flavors.map(f => `<a class="fchip" href="#/product/ganmianpi">${f.heat} ${L(f.name)}</a>`).join('')}
              <span class="fchip">${t('sig_no_cook')}</span><span class="fchip">${t('sig_shelf')}</span>
            </div>
            <div class="flash">
              <span class="flash-label">${t('flash_label')}</span>
              <div class="count" id="flashCount"></div>
            </div>
            <div class="spot-price">
              <span class="price">${fmt(p.price)}</span><span class="orig">${fmt(p.orig)}</span><span class="unit" style="color:#CDBCA4">${t('sig_from')}</span>
            </div>
            <div class="spot-cta">
              <a class="btn btn-gold" href="#/product/ganmianpi">${t('sig_buy')} <svg class="ic"><use href="#i-arrow"/></svg></a>
              <a class="btn btn-ghost" href="#/about">${t('sig_story')}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 三种风味 -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="sec-head reveal">
        <div class="kicker">${t('fla_kicker')}</div>
        <h2>${t('fla_title')}</h2>
        <p>${t('fla_sub')}</p>
      </div>
      <div class="flavor-grid">
        ${p.flavors.map((f, i) => `
        <div class="flavor-card reveal" style="transition-delay:${i * 90}ms">
          <div class="fimg"><img src="${f.img}" alt="${esc(L(f.name))}"></div>
          <div class="fb">
            <h3>${L(f.name)}</h3>
            <div class="heat">${f.heat}</div>
            <p>${L(f.desc)}</p>
            <a class="flink" href="#/product/ganmianpi">${t('fla_try')} <svg class="ic" style="width:13px;height:13px;vertical-align:-2px"><use href="#i-arrow"/></svg></a>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- 全场商品 -->
  <section class="section" style="background:var(--paper-2);padding:84px 0">
    <div class="container">
      <div class="sec-head reveal">
        <div class="kicker">${t('shopall_kicker')}</div>
        <h2>${t('shopall_title')}</h2>
        <p>${t('shopall_sub')}</p>
      </div>
      <div class="cards-grid">${PRODUCTS.map((x, i) => cardHTML(x, i)).join('')}</div>
      <div style="text-align:center;margin-top:44px" class="reveal">
        <a class="btn btn-ghost" href="#/shop">${t('shopall_more')} <svg class="ic"><use href="#i-arrow"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 实拍图鉴 -->
  <section class="section">
    <div class="container">
      <div class="sec-head reveal">
        <div class="kicker">${t('gal_kicker')}</div>
        <h2>${t('gal_title')}</h2>
        <p>${t('gal_sub')}</p>
      </div>
      <div class="photo-wall">
        ${GALLERY.map((g, i) => `
        <figure class="pw-item reveal" style="transition-delay:${(i % 3) * 90}ms">
          <img src="${g.src}" alt="${esc(L(g.cap))}" loading="lazy">
          <figcaption>${L(g.cap)}</figcaption>
        </figure>`).join('')}
      </div>
    </div>
  </section>

  <!-- 为什么选秦味 -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="sec-head reveal">
        <div class="kicker">${t('why_kicker')}</div>
        <h2>${t('why_title')}</h2>
      </div>
      <div class="why-grid">
        ${[
          ['i-leaf',{zh:'非遗工艺',en:'Heritage Craft'},{zh:'沿用宝鸡老字号三代传承的发酵与擀制技法，2023 年入选省级非遗名录。',en:'Fermentation and rolling techniques passed down three generations; listed as provincial intangible cultural heritage in 2023.'}],
          ['i-shield',{zh:'出口级质检',en:'Export-Grade QA'},{zh:'通过 ISO 22000 与 HACCP 认证，完成美国 FDA 出口备案，每一批都有检验报告。',en:'ISO 22000 & HACCP certified, FDA-registered for export; every batch comes with inspection reports.'}],
          ['i-plane',{zh:'全球直邮',en:'Global Delivery'},{zh:'与 DHL、顺丰国际深度合作，真空锁鲜 + 防撞包装，欧美澳 7-12 天送达。',en:'Partners with DHL & SF International; vacuum-sealed, shock-proof packaging; 7-12 days to US/EU/AU.'}],
          ['i-refresh',{zh:'破损包赔',en:'Damage Refund'},{zh:'包裹签收 48 小时内发现破损或漏气，拍照即赔，不扯皮。',en:'Broken or leaking parcel? Snap a photo within 48 hours of delivery — instant refund, no questions asked.'}]
        ].map((x, i) => `
        <div class="why-card reveal" style="transition-delay:${i * 80}ms">
          <div class="why-ic"><svg class="ic"><use href="#${x[0]}"/></svg></div>
          <h4>${L(x[1])}</h4><p>${L(x[2])}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- 跨境物流 -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="logi-band reveal">
        <div class="sec-head" style="margin-bottom:44px">
          <div class="kicker">${t('logi_kicker')}</div>
          <h2>${t('logi_title')}</h2>
          <p>${t('logi_sub')}</p>
        </div>
        <div class="steps-row">
          ${[
            ['i-clock',{zh:'下单支付',en:'Place Order'},{zh:'在线安全支付',en:'Secure online payment'}],
            ['i-box',{zh:'西安仓打包',en:'Xi\'an Warehouse'},{zh:'48 小时内出库',en:'Ships within 48h'}],
            ['i-plane',{zh:'国际干线',en:'International Flight'},{zh:'空运直达目的国',en:'Air freight, direct'}],
            ['i-shield',{zh:'海关清关',en:'Customs Clearance'},{zh:'合规申报放行',en:'Compliant declaration'}],
            ['i-pin',{zh:'门到门签收',en:'Doorstep Delivery'},{zh:'全程可追踪',en:'Full tracking'}]
          ].map(x => `
          <div class="step">
            <div class="step-ic"><svg class="ic"><use href="#${x[0]}"/></svg></div>
            <h4>${L(x[1])}</h4><p>${L(x[2])}</p>
          </div>`).join('')}
        </div>
        <div class="pay-row">
          <span class="pay-chip">VISA</span><span class="pay-chip">Mastercard</span><span class="pay-chip">PayPal</span>
          <span class="pay-chip">${LANG === 'zh' ? '银联' : 'UnionPay'}</span><span class="pay-chip">${LANG === 'zh' ? '支付宝' : 'Alipay'}</span><span class="pay-chip">${LANG === 'zh' ? '微信支付' : 'WeChat Pay'}</span>
          <span class="pay-chip carrier">DHL</span><span class="pay-chip carrier">FedEx</span><span class="pay-chip carrier">EMS</span><span class="pay-chip carrier">${LANG === 'zh' ? '顺丰国际' : 'SF International'}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 全球评价 -->
  <section class="section" style="background:var(--paper-2)">
    <div class="container">
      <div class="sec-head reveal">
        <div class="kicker">${t('rev_kicker')}</div>
        <h2>${t('rev_title')}</h2>
        <p>${t('rev_sub')}</p>
      </div>
      <div class="rev-grid">
        ${revs.map((r, i) => reviewCardHTML(r, i)).join('')}
      </div>
    </div>
  </section>

  <!-- 品牌故事预览 -->
  <section class="section">
    <div class="container story-prev">
      <div class="story-copy reveal">
        <div class="kicker">${t('story_kicker')}</div>
        <h2>${t('story_title_a')}<br>${t('story_title_b')}</h2>
        <p>${t('story_p1')}</p>
        <p>${t('story_p2')}</p>
        <a class="btn btn-ghost" href="#/about">${t('story_btn')} <svg class="ic"><use href="#i-arrow"/></svg></a>
      </div>
      <div class="story-img reveal" style="transition-delay:120ms">
        <img src="images/photos/street-1.jpg" alt="${esc(t('ab_street_cap'))}">
      </div>
    </div>
  </section>

  <!-- 订阅 -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="news-band reveal">
        <div class="kicker" style="color:#F3D98B">${t('news_kicker')}</div>
        <h2>${t('news_title')}</h2>
        <p>${t('news_sub')}</p>
        <form class="news-form" id="newsForm">
          <input type="email" required placeholder="${t('news_ph')}">
          <button class="btn" type="submit">${t('news_btn')}</button>
        </form>
      </div>
    </div>
  </section>`;
}

function reviewCardHTML(r, i){
  const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
  const prod = PRODUCTS.find(p => p.id === r.pid);
  return `
  <div class="rev-card reveal" style="transition-delay:${(i % 2) * 90}ms">
    <div class="rev-q">"</div>
    <div class="rev-head">
      <div class="rev-ava" style="background:${color}">${esc(r.name.trim()[0])}</div>
      <div class="rev-meta"><b>${esc(r.name)}</b><span>${r.flag} ${esc(L(r.loc))} · ${t('rev_verified')}</span></div>
    </div>
    <div class="rate" style="margin-bottom:8px">${stars(r.stars)}</div>
    <p class="rev-text">${esc(L(r.text))}</p>
    <div class="rev-foot">
      <span class="rev-tag">${esc(prod ? L(prod.name) : 'QINWEI')}</span>
      <span class="rev-date">${r.date}</span>
    </div>
  </div>`;
}

/* ---------------- 全部商品页 ---------------- */

function shopHTML(params){
  const q = (params.get('q') || '').trim();
  const cat = params.get('cat') || 'all';
  let list = PRODUCTS.filter(p => cat === 'all' || p.cat === cat);
  let searched = false;
  if (q){
    searched = true;
    const k = q.toLowerCase();
    list = list.filter(p => (p.name.zh + p.name.en + p.sub.zh + p.sub.en + p.tags.zh.join('') + p.tags.en.join('') + L(CATS[p.cat])).toLowerCase().includes(k));
  }
  return `
  <div class="shop-head container">
    <div class="kicker">SHOP</div>
    <h1>${searched ? t('shop_results') + ' "' + esc(q) + '"' : t('shop_title_all')}</h1>
    <p>${t('shop_sub')}</p>
  </div>
  <div class="container">
    <div class="cat-tabs" id="catTabs">
      ${Object.entries(CATS).map(([k, v]) => `<button class="cat-tab${k === cat ? ' on' : ''}" data-action="cat" data-cat="${k}">${L(v)}</button>`).join('')}
    </div>
    <div class="sort-row">
      <span class="result-count">${t('shop_count_a')}<b>${list.length}</b>${t('shop_count_b')}</span>
      <select class="sort-select" id="sortSelect" aria-label="sort">
        <option value="featured">${t('sort_featured')}</option>
        <option value="sales">${t('sort_sales')}</option>
        <option value="price-asc">${t('sort_price_asc')}</option>
        <option value="price-desc">${t('sort_price_desc')}</option>
      </select>
    </div>
    <div id="shopGrid">
      ${list.length ? '<div class="cards-grid" style="padding-bottom:90px">' + list.map((x, i) => cardHTML(x, i)).join('') + '</div>'
        : '<div class="shop-empty"><svg class="ic"><use href="#i-search"/></svg><p>' + t('shop_empty') + '</p></div>'}
    </div>
  </div>`;
}

function sortList(list, mode){
  const arr = [...list];
  if (mode === 'sales') arr.sort((a, b) => b.sales - a.sales);
  else if (mode === 'price-asc') arr.sort((a, b) => a.price - b.price);
  else if (mode === 'price-desc') arr.sort((a, b) => b.price - a.price);
  return arr;
}

/* ---------------- 商品详情页 ---------------- */

let dState = { img: 0, flavor: 'spicy', pack: 'p6', qty: 1 };
let dPhotos = [];

function productHTML(id){
  const p = getProduct(id);
  if (!p) return '<section class="nf container"><h1>404</h1><p>' + t('nf_title') + '</p><a class="btn btn-red" href="#/shop">' + t('nf_shop') + '</a></section>';
  dState = { img: 0, flavor: (p.flavors ? p.flavors[0].id : ''), pack: (p.packs ? p.packs[0].id : ''), qty: 1 };
  dPhotos = p.photos.map(x => x);
  if (p.flavors) p.flavors.forEach(f => dPhotos.push({ src: f.img, alt: { zh: L(f.name), en: L(f.name) } }));
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const revs = REVIEWS.filter(r => r.pid === id);
  return `
  <div class="container">
    <nav class="crumbs">
      <a href="#/">${t('crumb_home')}</a><span class="sep">›</span>
      <a href="#/shop">${t('crumb_all')}</a><span class="sep">›</span>
      <a href="#/shop?cat=${p.cat}">${L(CATS[p.cat])}</a><span class="sep">›</span>
      <span>${esc(L(p.name))}</span>
    </nav>

    <div class="detail">
      <div class="gallery">
        <div class="g-main"><img id="gMainImg" src="${dPhotos[0].src}" alt="${esc(L(p.name))}"></div>
        ${dPhotos.length > 1 ? `<div class="thumbs">${dPhotos.map((ph, i) => `<button class="thumb${i === 0 ? ' on' : ''}" data-action="thumb" data-i="${i}" aria-label="photo ${i + 1}"><img src="${ph.src}" alt=""></button>`).join('')}</div>` : ''}
      </div>
      <div class="d-info" id="dInfo">${dInfoHTML(p)}</div>
    </div>

    <div class="d-tabs" id="dTabs">
      <button class="tab on" data-tab="desc">${t('tab_desc')}</button>
      ${p.flavors ? '<button class="tab" data-tab="craft">' + t('tab_craft') + '</button>' : ''}
      <button class="tab" data-tab="reviews">${t('tab_reviews')}（${revs.length}）</button>
      <button class="tab" data-tab="faq">${t('tab_faq')}</button>
    </div>

    <div class="tab-panel on" id="panel-desc">
      <div class="d-prose">
        ${L(p.detail).map(x => '<p>' + x + '</p>').join('')}
        ${p.specs ? `
          <h3>${t('d_params')}</h3>
          <table class="spec-table"><tbody>
            ${L(p.specs).map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('')}
          </tbody></table>
          <h3>${t('d_nutrition')}</h3>
          <table class="spec-table"><tbody>
            <tr><td>${p.nutrition[0]}</td><td>${p.nutrition[1]}</td><td>${p.nutrition[2]}</td><td>${p.nutrition[3]}</td></tr>
            <tr><td>${p.nutrition[4]}</td><td>${p.nutrition[5]}</td><td>${p.nutrition[6]}</td><td>${p.nutrition[7]}</td></tr>
          </tbody></table>
          <h3>${t('d_cert')}</h3>
          <div class="cert-row"><span>ISO 22000</span><span>HACCP</span><span>${LANG === 'zh' ? '美国 FDA 出口备案' : 'US FDA Registration'}</span><span>${LANG === 'zh' ? '海关出口备案企业' : 'Registered Exporter'}</span></div>
        ` : ''}
        <p style="margin-top:18px;color:var(--ink-3);font-size:12.5px">${t('d_demo')}</p>
      </div>
    </div>

    ${p.flavors ? `
    <div class="tab-panel" id="panel-craft">
      <div class="d-prose" style="max-width:940px">
        <div class="craft-grid">
          ${[
            ['i-wheat','01',{zh:'精选原料',en:'Select Wheat'},{zh:'秦岭北麓冬小麦，石磨轻研，保留麦香。',en:'Winter wheat from the northern Qinling range, stone-milled for aroma.'}],
            ['i-snow','02',{zh:'清水洗面',en:'Wash the Starch'},{zh:'清水洗面，淀粉沉淀 8 小时，取浆留筋。',en:'Washed in clear water, starch settles for 8 hours.'}],
            ['i-clock','03',{zh:'恒温发酵',en:'Controlled Ferment'},{zh:'28℃ 恒温发酵 6 小时，自然增香，微酸回甘。',en:'6 hours at 28°C for natural aroma and a subtle sour finish.'}],
            ['i-leaf','04',{zh:'手工擀制',en:'Hand-Rolled'},{zh:'擀成薄如纸的面皮，上笼蒸制，筋道透亮。',en:'Rolled paper-thin and steamed — chewy and translucent.'}],
            ['i-flame','05',{zh:'切条配汁',en:'Cut & Dress'},{zh:'冷却切条，配秦椒红油与岐山老醋。',en:'Cut into strips, dressed with Qin-pepper oil and Qishan vinegar.'}],
            ['i-box','06',{zh:'真空锁鲜',en:'Vacuum-Sealed'},{zh:'真空锁鲜装袋，48 小时内出口发运。',en:'Vacuum-sealed and shipped within 48 hours.'}]
          ].map(s => `
          <div class="craft-card">
            <div class="craft-ic"><svg class="ic"><use href="#${s[0]}"/></svg></div>
            <div class="craft-num">${s[1]}</div>
            <h4>${L(s[2])}</h4><p>${L(s[3])}</p>
          </div>`).join('')}
        </div>
      </div>
    </div>` : ''}

    <div class="tab-panel" id="panel-reviews">
      <div class="rev-agg-wrap">
        <div class="rev-agg">
          <div class="agg-score">${p.rating}</div>
          <div class="agg-stars">${stars(p.rating)}</div>
          <div class="agg-note">${p.reviews} ${t('d_review_note')}</div>
        </div>
        <div>
          <div class="bar-row"><span>5</span><div class="bar"><i style="width:92%"></i></div><span>92%</span></div>
          <div class="bar-row"><span>4</span><div class="bar"><i style="width:5%"></i></div><span>5%</span></div>
          <div class="bar-row"><span>3</span><div class="bar"><i style="width:2%"></i></div><span>2%</span></div>
          <div class="bar-row"><span>2</span><div class="bar"><i style="width:1%"></i></div><span>1%</span></div>
          <div class="bar-row"><span>1</span><div class="bar"><i style="width:0%"></i></div><span>0%</span></div>
        </div>
      </div>
      <div class="rev-list" style="max-width:900px;margin:34px auto 0">
        ${(revs.length ? revs : REVIEWS.slice(0, 3)).map((r, i) => reviewCardHTML(r, i)).join('')}
      </div>
      <p style="text-align:center;margin-top:26px;color:var(--ink-3);font-size:12.5px">${t('d_review_demo')}</p>
    </div>

    <div class="tab-panel" id="panel-faq">
      <div class="faq">
        ${FAQS.map((f, i) => `
        <div class="faq-item">
          <button class="faq-q" data-action="faq" data-i="${i}"><span>${L(f.q)}</span><span class="faq-ic"><svg class="ic"><use href="#i-chev"/></svg></span></button>
          <div class="faq-a"><p>${L(f.a)}</p></div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <section class="section container" style="padding-top:0">
    <div class="sec-head"><div class="kicker">${t('related_kicker')}</div><h2>${t('related_title')}</h2></div>
    <div class="cards-grid">${related.map((x, i) => cardHTML(x, i)).join('')}</div>
  </section>`;
}

function dInfoHTML(p){
  const hasOpts = !!(p.flavors && p.packs);
  const f = hasOpts ? p.flavors.find(x => x.id === dState.flavor) : null;
  const pk = hasOpts ? p.packs.find(x => x.id === dState.pack) : null;
  const price = hasOpts ? pk.price : p.price;
  return `
  <div class="d-badges">
    <span class="badge">${L(p.badge)}</span>
    ${L(p.tags).map(x => `<span class="tag-chip">${x}</span>`).join('')}
  </div>
  <h1 class="d-title">${esc(L(p.name))}</h1>
  <div class="d-en">${esc(L(p.sub))}</div>
  <div class="d-rate">
    ${stars(p.rating)}<b>${p.rating}</b>
    <span>${p.reviews} ${LANG === 'zh' ? '条评价' : 'reviews'}</span><span>·</span><span>${t('d_sold_a')}${L(p.sold)}${t('d_sold_b')}</span>
  </div>
  <div class="price-box">
    <span class="price">${fmt(price)}</span>
    <span class="orig">${fmt(hasOpts ? (pk.price + 3) : p.orig)}</span>
    <span class="save-chip">${t('d_sale_chip')}</span>
    <span class="ship-chip">${t('d_ship_chip')}</span>
    <span class="cny">${t('d_cny_a')}${(price * 7.2).toFixed(0)}${t('d_cny_b')}</span>
  </div>
  ${hasOpts ? `
  <div class="opt-label">${t('d_flavor')} <em>· ${t('d_flavor_note')}</em></div>
  <div class="flavor-opts">
    ${p.flavors.map(x => `
    <div class="fopt${x.id === dState.flavor ? ' on' : ''}" data-action="flavor" data-id="${x.id}">
      <img src="${x.img}" alt="${esc(L(x.name))}"><b>${L(x.name)}</b><span>${x.heat} ${L(x.desc).slice(0, 16)}…</span>
    </div>`).join('')}
  </div>
  <div class="opt-label">${t('d_pack')}</div>
  <div class="pack-opts">
    ${p.packs.map(x => `
    <div class="popt${x.id === dState.pack ? ' on' : ''}" data-action="pack" data-id="${x.id}">
      <b>${L(x.name)}</b><span class="pp"> ${fmt(x.price)}</span><br><span>${L(x.note)}</span>
    </div>`).join('')}
  </div>` : `<div class="opt-label">${t('d_spec')} <em>· ${esc(L(p.unit))}</em></div>`}
  <div class="qty-row">
    <div class="qty">
      <button class="qty-btn" data-action="qty-minus" aria-label="-"><svg class="ic"><use href="#i-minus"/></svg></button>
      <input type="text" value="${dState.qty}" readonly>
      <button class="qty-btn" data-action="qty-plus" aria-label="+"><svg class="ic"><use href="#i-plus"/></svg></button>
    </div>
    <span class="stock">${t('d_stock_a')}<b>${876 - dState.qty > 0 ? 876 - dState.qty : 0}</b>${t('d_stock_b')}</span>
  </div>
  <div class="buy-row">
    <button class="btn btn-ghost" data-action="add-detail"><svg class="ic"><use href="#i-cart"/></svg>${t('d_add')}</button>
    <button class="btn btn-red" data-action="buy-now">${t('d_buy')} <svg class="ic"><use href="#i-arrow"/></svg></button>
  </div>
  <div class="service-row">
    <div><svg class="ic"><use href="#i-shield"/></svg>${t('svc1')}</div>
    <div><svg class="ic"><use href="#i-refresh"/></svg>${t('svc2')}</div>
    <div><svg class="ic"><use href="#i-box"/></svg>${t('svc3')}</div>
    <div><svg class="ic"><use href="#i-plane"/></svg>${t('svc4')}</div>
  </div>
  <div class="ship-line"><svg class="ic"><use href="#i-truck"/></svg>${t('d_ship')}</div>`;
}

function detailCartItem(p){
  const hasOpts = !!(p.flavors && p.packs);
  const f = hasOpts ? p.flavors.find(x => x.id === dState.flavor) : null;
  const pk = hasOpts ? p.packs.find(x => x.id === dState.pack) : null;
  return {
    key: hasOpts ? p.id + '|' + f.id + '|' + pk.id : p.id,
    name: L(p.name),
    variant: hasOpts ? L(f.name) + ' · ' + L(pk.name) : L(p.unit),
    price: hasOpts ? pk.price : p.price,
    qty: dState.qty,
    img: hasOpts ? f.img : p.photos[0].src
  };
}

/* ---------------- 品牌故事页 ---------------- */

function aboutHTML(){
  return `
  <section class="container about-hero">
    <div class="reveal">
      <div class="kicker">${t('ab_kicker')}</div>
      <h1>${t('ab_title_a')}<br><em>${t('ab_title_b')}</em></h1>
      <p>${t('ab_p1')}</p>
      <p>${t('ab_p2')}</p>
      <a class="btn btn-red" href="#/product/ganmianpi">${t('ab_cta')} <svg class="ic"><use href="#i-arrow"/></svg></a>
    </div>
    <div class="about-img reveal" style="transition-delay:120ms">
      <img src="images/photos/street-2.jpg" alt="${esc(t('ab_street_cap'))}">
      <div class="img-cap">${t('ab_street_cap')}</div>
    </div>
  </section>

  <div class="about-text container">
    <p>${t('ab_t1')}</p>
    <p>${t('ab_t2')}</p>
  </div>

  <section class="section container" style="padding-top:20px">
    <div class="sec-head"><div class="kicker">${t('ab_ml_kicker')}</div><h2>${t('ab_ml_title')}</h2></div>
    <div class="timeline">
      ${[
        ['1921',{zh:'老店创立',en:'The First Stall'},{zh:'宝鸡经二路老面皮摊开张，一碗一碗擀出了名气。',en:'A noodle-skin stall opens on Jing\'er Road, Baoji, winning fame bowl by bowl.'}],
        ['2016',{zh:'建厂标准化',en:'Factory & Standards'},{zh:'恒温车间与真空锁鲜工艺上线，老味道有了新包装。',en:'Temperature-controlled workshops and vacuum-sealing go online.'}],
        ['2019',{zh:'首单出海',en:'First Export'},{zh:'第一批货从西安港发往新加坡，海外版图从这里开始。',en:'The first batch ships from Xi\'an Port to Singapore.'}],
        ['2021',{zh:'年出口百万份',en:'A Million a Year'},{zh:'年出口量突破 100 万份，海外回头客超过六成。',en:'Annual exports top 1 million servings; 60% of overseas buyers return.'}],
        ['2023',{zh:'入选省级非遗',en:'Provincial Heritage'},{zh:'擀面皮制作技艺列入省级非物质文化遗产名录。',en:'Ganmianpi craft is listed as provincial intangible cultural heritage.'}],
        ['2026',{zh:'覆盖 32 国',en:'32 Countries'},{zh:'海外仓与本地客服落地，全球直邮网络成形。',en:'Overseas warehouses and local support land; the global network is complete.'}]
      ].map(x => `
      <div class="tl-item reveal">
        <div class="tl-dot"></div>
        <div class="tl-year">${x[0]}</div>
        <h4>${L(x[1])}</h4><p>${L(x[2])}</p>
      </div>`).join('')}
    </div>
  </section>

  <section class="section container" id="craft" style="background:var(--paper-2);padding:72px 28px;border-radius:26px;max-width:1200px">
    <div class="sec-head"><div class="kicker">${t('ab_craft_kicker')}</div><h2>${t('ab_craft_title')}</h2></div>
    <div class="craft-grid">
      ${[
        ['i-wheat','01',{zh:'精选原料',en:'Select Wheat'},{zh:'秦岭北麓冬小麦，石磨轻研，保留麦香。',en:'Winter wheat from the northern Qinling range, stone-milled for aroma.'}],
        ['i-snow','02',{zh:'清水洗面',en:'Wash the Starch'},{zh:'清水洗面，淀粉沉淀 8 小时，取浆留筋。',en:'Washed in clear water, starch settles for 8 hours.'}],
        ['i-clock','03',{zh:'恒温发酵',en:'Controlled Ferment'},{zh:'28℃ 恒温发酵 6 小时，自然增香，微酸回甘。',en:'6 hours at 28°C for natural aroma and a subtle sour finish.'}],
        ['i-leaf','04',{zh:'手工擀制',en:'Hand-Rolled'},{zh:'擀成薄如纸的面皮，上笼蒸制，筋道透亮。',en:'Rolled paper-thin and steamed — chewy and translucent.'}],
        ['i-flame','05',{zh:'切条配汁',en:'Cut & Dress'},{zh:'冷却切条，配秦椒红油与岐山老醋。',en:'Cut into strips, dressed with Qin-pepper oil and Qishan vinegar.'}],
        ['i-box','06',{zh:'真空锁鲜',en:'Vacuum-Sealed'},{zh:'真空锁鲜装袋，48 小时内出口发运。',en:'Vacuum-sealed and shipped within 48 hours.'}]
      ].map(s => `
      <div class="craft-card">
        <div class="craft-ic"><svg class="ic"><use href="#${s[0]}"/></svg></div>
        <div class="craft-num">${s[1]}</div>
        <h4>${L(s[2])}</h4><p>${L(s[3])}</p>
      </div>`).join('')}
    </div>
  </section>

  <section class="section container" id="cert">
    <div class="sec-head"><div class="kicker">${t('ab_cert_kicker')}</div><h2>${t('ab_cert_title')}</h2></div>
    <div class="cert-grid">
      ${[
        ['i-shield',{zh:'ISO 22000',en:'ISO 22000'},{zh:'食品安全管理体系认证',en:'Food Safety Management'}],
        ['i-check',{zh:'HACCP',en:'HACCP'},{zh:'危害分析与关键控制点认证',en:'Hazard Analysis & Critical Control'}],
        ['i-globe',{zh:'FDA 出口备案',en:'FDA Registration'},{zh:'美国食品药品监督管理局备案',en:'US Food & Drug Administration'}],
        ['i-box',{zh:'海关备案企业',en:'Registered Exporter'},{zh:'出口食品生产企业备案 6100/2019',en:'Export food producer 6100/2019'}]
      ].map(c => `
      <div class="cert-card reveal">
        <svg class="ic"><use href="#${c[0]}"/></svg>
        <b>${L(c[1])}</b><span>${L(c[2])}</span>
      </div>`).join('')}
    </div>
  </section>

  <section class="section container" id="contact" style="padding-top:20px">
    <div class="sec-head"><div class="kicker">${t('ab_contact_kicker')}</div><h2>${t('ab_contact_title')}</h2></div>
    <div class="contact-grid">
      <div class="contact-card reveal">
        <svg class="ic"><use href="#i-mail"/></svg>
        <h4>${t('ab_c1_t')}</h4><p>${t('ab_c1_d')}</p>
      </div>
      <div class="contact-card reveal" style="transition-delay:80ms">
        <svg class="ic"><use href="#i-phone"/></svg>
        <h4>${t('ab_c2_t')}</h4><p>${t('ab_c2_d')}</p>
      </div>
      <div class="contact-card reveal" style="transition-delay:160ms">
        <svg class="ic"><use href="#i-pin"/></svg>
        <h4>${t('ab_c3_t')}</h4><p>${t('ab_c3_d')}</p>
      </div>
    </div>
  </section>`;
}

/* ---------------- 结算 ---------------- */

const COUNTRIES = ['美国 United States','加拿大 Canada','英国 United Kingdom','德国 Germany','法国 France','意大利 Italy','西班牙 Spain','荷兰 Netherlands','澳大利亚 Australia','新西兰 New Zealand','日本 Japan','韩国 South Korea','新加坡 Singapore','马来西亚 Malaysia','泰国 Thailand'];

function openCheckout(){
  if (!cart.length){ toast(t('toast_cart_empty')); return; }
  document.body.classList.add('modal-open', 'overlay-on');
  $('#checkoutModal').setAttribute('aria-hidden', 'false');
  renderCheckoutForm();
}

function renderCheckoutForm(){
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const sale = sub * 0.1;
  let ship = 9.9;
  if (sub >= 49) ship = 0;
  const total = sub - sale - 5 + ship;
  $('#checkoutBody').innerHTML = `
  <div class="co-grid">
    <div class="co-form">
      <h3>${t('co_title')}</h3>
      <p class="co-sub">${t('co_demo')}</p>
      <form id="coForm" novalidate>
        <div class="field-row">
          <div class="field"><label>${t('co_name')} <i>*</i></label><input name="name" required placeholder="${t('co_name_ph')}"></div>
          <div class="field"><label>${t('co_email')} <i>*</i></label><input name="email" type="email" required placeholder="${t('co_email_ph')}"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>${t('co_country')} <i>*</i></label>
            <select name="country" required><option value="">${t('co_country_ph')}</option>${COUNTRIES.map(c => `<option>${c}</option>`).join('')}</select>
          </div>
          <div class="field"><label>${t('co_phone')} <i>*</i></label><input name="phone" required placeholder="${t('co_phone_ph')}"></div>
        </div>
        <div class="field"><label>${t('co_address')} <i>*</i></label><input name="address" required placeholder="${t('co_address_ph')}"></div>

        <div class="opt-block">
          <div class="opt-label"><svg class="ic"><use href="#i-plane"/></svg>${t('co_ship')}</div>
          <label class="radio-card on" id="shipStd">
            <input type="radio" name="ship" value="std" checked>
            <span><b>${t('co_std')}</b><span>${sub >= 49 ? t('co_std_free') : t('co_std_d')}</span></span>
            <span class="rc-price">${sub >= 49 ? t('co_free') : fmt(9.9)}</span>
          </label>
          <label class="radio-card" id="shipExp">
            <input type="radio" name="ship" value="exp">
            <span><b>${t('co_exp')}</b><span>${t('co_exp_d')}</span></span>
            <span class="rc-price">${fmt(19.9)}</span>
          </label>
        </div>

        <div class="opt-block">
          <div class="opt-label"><svg class="ic"><use href="#i-shield"/></svg>${t('co_pay')}</div>
          <label class="radio-card on"><input type="radio" name="pay" checked><span><b>${t('co_pay1')}</b><span>${t('co_pay1d')}</span></span></label>
          <label class="radio-card"><input type="radio" name="pay"><span><b>${t('co_pay2')}</b><span>${t('co_pay2d')}</span></span></label>
          <label class="radio-card"><input type="radio" name="pay"><span><b>${t('co_pay3')}</b><span>${t('co_pay3d')}</span></span></label>
        </div>

        <button class="btn btn-red block" type="submit" id="coSubmit">${t('co_submit_a')}${fmt(total)}</button>
        <div class="co-safe"><svg class="ic"><use href="#i-shield"/></svg>${t('co_safe')}</div>
      </form>
    </div>
    <div class="co-summary">
      <h4>${t('co_summary')}</h4>
      <div class="co-items">
        ${cart.map(c => `
        <div class="co-item">
          <img src="${c.img}" alt="">
          <div><div class="nm">${esc(c.name)}</div><div class="vr">${esc(c.variant || '')} × ${c.qty}</div></div>
          <div class="pr">${fmt(c.price * c.qty)}</div>
        </div>`).join('')}
      </div>
      <div class="code-row">
        <input id="codeInput" placeholder="${t('co_code_ph')}">
        <button class="btn btn-ghost btn-sm" type="button" data-action="apply-code">${t('co_apply')}</button>
      </div>
      <div class="co-line"><span>${t('co_line_sub')}</span><span>${fmt(sub)}</span></div>
      <div class="co-line"><span>${t('co_line_sale')}</span><span style="color:var(--red)">- ${fmt(sale)}</span></div>
      <div class="co-line"><span>${t('co_line_code')}</span><span style="color:var(--red)">- $5.00</span></div>
      <div class="co-line"><span>${t('co_line_ship')}</span><span id="coShipLine">${ship === 0 ? t('co_free') : fmt(9.9)}</span></div>
      <div class="co-line total"><span>${t('co_line_total')}</span><b id="coTotal">${fmt(total)}</b></div>
    </div>
  </div>`;
  $('#checkoutBody').querySelectorAll('input[name="ship"]').forEach(r => {
    r.addEventListener('change', () => {
      const exp = r.value === 'exp';
      const s = exp ? 19.9 : (sub >= 49 ? 0 : 9.9);
      const tt = sub - sale - 5 + s;
      $('#coShipLine').textContent = s === 0 ? t('co_free') : fmt(s);
      $('#coTotal').textContent = fmt(tt);
      $('#coSubmit').textContent = t('co_submit_a') + fmt(tt);
      r.closest('.opt-block').querySelectorAll('.radio-card').forEach(c => c.classList.remove('on'));
      r.closest('.radio-card').classList.add('on');
    });
  });
  $('#checkoutBody').querySelectorAll('input[name="pay"]').forEach(r => {
    r.addEventListener('change', () => {
      document.querySelectorAll('input[name="pay"]').forEach(x => x.closest('.radio-card').classList.remove('on'));
      r.closest('.radio-card').classList.add('on');
    });
  });
  $('#coForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    if (!f.reportValidity()){ toast(t('co_err')); return; }
    const btn = $('#coSubmit');
    btn.disabled = true; btn.textContent = t('co_processing');
    setTimeout(() => {
      const no = 'QW' + Date.now().toString().slice(-8);
      const eta = new Date(Date.now() + 10 * 864e5);
      const etaStr = eta.getFullYear() + '-' + String(eta.getMonth() + 1).padStart(2, '0') + '-' + String(eta.getDate()).padStart(2, '0');
      const cnt = cart.reduce((s, c) => s + c.qty, 0);
      cart = []; saveCart(); updateCartUI();
      $('#checkoutBody').innerHTML = `
      <div class="success-view">
        <div class="success-circle"><svg class="ic"><use href="#i-check"/></svg></div>
        <h3>${t('co_ok_title')}</h3>
        <p>${t('co_ok_p')}</p>
        <div class="order-no">${t('co_ok_no')} ${no}</div>
        <p>${t('co_ok_items_a')}${cnt}${t('co_ok_items_b')}${esc(f.country.value)}${t('co_ok_items_c')}${etaStr}</p>
        <p style="font-size:12px;color:var(--ink-3)">${t('co_ok_demo')}</p>
        <div class="success-cta">
          <button class="btn btn-red" data-action="close-checkout">${t('co_ok_btn')}</button>
          <a class="btn btn-ghost" href="#/shop">${t('co_ok_btn2')}</a>
        </div>
      </div>`;
    }, 1200);
  });
}

function closeCheckout(){
  document.body.classList.remove('modal-open');
  $('#checkoutModal').setAttribute('aria-hidden', 'true');
  if (!document.body.classList.contains('drawer-open')) document.body.classList.remove('overlay-on');
}

/* ---------------- Tab / 倒计时 / 动效 ---------------- */

function activateTab(name){
  document.querySelectorAll('.tab').forEach(tb => tb.classList.toggle('on', tb.dataset.tab === name));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('on', p.id === 'panel-' + name));
}

function initCountdown(){
  const box = $('#flashCount');
  if (!box) return;
  if (window._countTimer) clearInterval(window._countTimer);
  const tick = () => {
    const d = new Date();
    const end = new Date(); end.setHours(24, 0, 0, 0);
    let s = Math.max(0, Math.floor((end - d) / 1000));
    const hh = String(Math.floor(s / 3600)).padStart(2, '0');
    const mm = String(Math.floor(s % 3600 / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    const h = LANG === 'zh' ? '时' : 'h', m = LANG === 'zh' ? '分' : 'm', sec = LANG === 'zh' ? '秒' : 's';
    box.innerHTML = `
      <div class="count-box"><span class="count-num">${hh}</span><span class="count-lab">${h}</span></div>
      <div class="count-box"><span class="count-num">${mm}</span><span class="count-lab">${m}</span></div>
      <div class="count-box"><span class="count-num">${ss}</span><span class="count-lab">${sec}</span></div>`;
  };
  tick();
  window._countTimer = setInterval(tick, 1000);
}

let io;
function observeReveals(){
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)){ els.forEach(el => el.classList.add('in')); return; }
  if (!io) io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .1 });
  els.forEach(el => io.observe(el));
}

/* ---------------- 全局事件 ---------------- */

document.addEventListener('click', e => {
  const tgt = e.target.closest('[data-action], [data-close-drawer], [data-close-checkout], [data-tab], [data-lang]');
  if (!tgt) return;
  if (tgt.hasAttribute('data-lang')){
    LANG = tgt.dataset.lang;
    try { localStorage.setItem('qinwei-lang', LANG); } catch(e){}
    applyStaticI18n();
    router();
    updateCartUI();
    return;
  }
  if (tgt.hasAttribute('data-close-drawer')){
    document.body.classList.remove('drawer-open', 'overlay-on');
    return;
  }
  if (tgt.hasAttribute('data-close-checkout')){ closeCheckout(); return; }
  if (tgt.dataset.tab){ activateTab(tgt.dataset.tab); return; }

  const act = tgt.dataset.action;
  if (act === 'wish'){ toggleWish(tgt.dataset.id); return; }
  if (act === 'clear-cart'){ cart = []; saveCart(); updateCartUI(); toast(t('toast_clear')); return; }
  if (act === 'checkout'){ openCheckout(); return; }
  if (act === 'cart-plus'){ const c = cart.find(x => x.key === tgt.dataset.key); if (c){ c.qty++; saveCart(); updateCartUI(); } return; }
  if (act === 'cart-minus'){
    const c = cart.find(x => x.key === tgt.dataset.key);
    if (c){ c.qty--; if (c.qty <= 0) cart = cart.filter(x => x !== c); saveCart(); updateCartUI(); }
    return;
  }
  if (act === 'cart-remove'){ cart = cart.filter(x => x.key !== tgt.dataset.key); saveCart(); updateCartUI(); return; }
  if (act === 'apply-code'){
    const v = ($('#codeInput').value || '').trim().toUpperCase();
    if (v === 'WELCOME5') toast(t('toast_code_ok'));
    else toast(v ? t('toast_code_bad') : t('toast_code_empty'));
    return;
  }
  if (act === 'cat'){
    const q = parseHash().params.get('q') || '';
    location.hash = '#/shop?cat=' + tgt.dataset.cat + (q ? '&q=' + encodeURIComponent(q) : '');
    return;
  }
  if (act === 'thumb'){
    dState.img = +tgt.dataset.i;
    $('#gMainImg').src = dPhotos[dState.img].src;
    $('#gMainImg').style.animation = 'none';
    requestAnimationFrame(() => $('#gMainImg').style.animation = '');
    document.querySelectorAll('.thumb').forEach((x, i) => x.classList.toggle('on', i === dState.img));
    return;
  }
  if (act === 'flavor'){
    dState.flavor = tgt.dataset.id;
    const p = getProduct(parseHash().id);
    $('#dInfo').innerHTML = dInfoHTML(p);
    return;
  }
  if (act === 'pack'){
    dState.pack = tgt.dataset.id;
    const p = getProduct(parseHash().id);
    $('#dInfo').innerHTML = dInfoHTML(p);
    return;
  }
  if (act === 'qty-plus'){ dState.qty = Math.min(99, dState.qty + 1); refreshQty(); return; }
  if (act === 'qty-minus'){ dState.qty = Math.max(1, dState.qty - 1); refreshQty(); return; }
  if (act === 'add-card'){
    const p = getProduct(tgt.dataset.id);
    const item = p.id === 'ganmianpi'
      ? { key:'ganmianpi|spicy|p6', name:L(p.name), variant:L(p.flavors[0].name) + ' · ' + L(p.packs[0].name), price:13.99, qty:1, img:'images/photos/flavor-spicy.jpg' }
      : { key:p.id, name:L(p.name), variant:L(p.unit), price:p.price, qty:1, img:p.photos[0].src };
    addToCart(item);
    toast(p.id === 'ganmianpi' ? t('toast_cart_gan') : t('toast_cart'));
    return;
  }
  if (act === 'add-detail'){
    const p = getProduct(parseHash().id);
    if (!p) return;
    addToCart(detailCartItem(p));
    toast(t('toast_cart'));
    return;
  }
  if (act === 'buy-now'){
    const p = getProduct(parseHash().id);
    if (!p) return;
    addToCart(detailCartItem(p));
    closeCheckout();
    openCheckout();
    document.body.classList.remove('drawer-open');
    return;
  }
  if (act === 'faq'){
    const item = tgt.closest('.faq-item');
    const a = item.querySelector('.faq-a');
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(x => {
      x.classList.remove('open');
      x.querySelector('.faq-a').style.maxHeight = '0px';
    });
    if (!open){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
    return;
  }
});

function refreshQty(){
  const p = getProduct(parseHash().id);
  if (!p) return;
  $('#dInfo').innerHTML = dInfoHTML(p);
}

/* 抽屉 / 遮罩 */
$('#cartBtn').addEventListener('click', () => document.body.classList.add('drawer-open', 'overlay-on'));
$('#checkoutBtn').addEventListener('click', () => { document.body.classList.remove('drawer-open'); openCheckout(); });
$('#clearCartBtn').addEventListener('click', () => {
  if (!cart.length){ toast(t('toast_cart_was_empty')); return; }
  cart = []; saveCart(); updateCartUI(); toast(t('toast_clear'));
});
$('#overlay').addEventListener('click', () => {
  document.body.classList.remove('drawer-open', 'modal-open', 'overlay-on');
  $('#checkoutModal').setAttribute('aria-hidden', 'true');
});

/* 搜索 */
$('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('#searchInput').value.trim();
  if (!v){ toast(t('toast_search')); return; }
  location.hash = '#/shop?q=' + encodeURIComponent(v);
  $('#searchInput').value = '';
});

/* 订阅 */
document.addEventListener('submit', e => {
  if (e.target && e.target.id === 'newsForm'){
    e.preventDefault();
    toast(t('toast_sub_ok'));
    e.target.reset();
  }
});

/* 排序 */
document.addEventListener('change', e => {
  if (e.target && e.target.id === 'sortSelect'){
    const { params } = parseHash();
    const q = (params.get('q') || '').trim();
    const cat = params.get('cat') || 'all';
    let list = PRODUCTS.filter(p => cat === 'all' || p.cat === cat);
    if (q){
      const k = q.toLowerCase();
      list = list.filter(p => (p.name.zh + p.name.en + p.sub.zh + p.sub.en + p.tags.zh.join('') + p.tags.en.join('')).toLowerCase().includes(k));
    }
    list = sortList(list, e.target.value);
    $('#shopGrid').innerHTML = '<div class="cards-grid" style="padding-bottom:90px">' + list.map((x, i) => cardHTML(x, i)).join('') + '</div>';
    observeReveals();
  }
});

/* 返回顶部 */
const backTop = $('#backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 600);
  $('#siteHeader').classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ESC 关闭 */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.body.classList.remove('drawer-open', 'modal-open', 'overlay-on');
});

/* ---------------- 启动 ---------------- */
applyStaticI18n();
updateCartUI();
refreshWishBtns();
router();
