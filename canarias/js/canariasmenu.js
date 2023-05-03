//Menu object creation
oCMenu=new makeCM("oCMenu") //Making the menu object. Argument: menuname

//Menu properties   
oCMenu.pxBetween=2
oCMenu.fromLeft=15 
oCMenu.fromTop=130  
oCMenu.rows=0 
oCMenu.menuPlacement=0

oCMenu.offlineRoot="file:///C|/Mis documentos/Abrakadabra/Web Pages/Savic-com 2002/canarias/js/" 
oCMenu.onlineRoot="/" 
oCMenu.resizeCheck=1 
oCMenu.wait=200
oCMenu.fillImg="/canarias/js/cm_fill.gif"
oCMenu.zIndex=0

//Background bar properties
oCMenu.useBar=0

//Level properties - ALL properties have to be spesified in level 0
oCMenu.level[0]=new cm_makeLevel() //Add this for each new level
oCMenu.level[0].width=120
oCMenu.level[0].height=13
oCMenu.level[0].regClass="clLevel0"
oCMenu.level[0].overClass="clLevel0over"
oCMenu.level[0].borderX=1 
oCMenu.level[0].borderY=1
oCMenu.level[0].borderClass=0
oCMenu.level[0].offsetX=2 
oCMenu.level[0].offsetY=0
oCMenu.level[0].rows=0
oCMenu.level[0].align="right" 




/******************************************
Menu item creation:
myCoolMenu.makeMenu(name, parent_name, text, link, target, width, height, regImage, overImage, regClass, overClass , align, rows, nolink, onclick, onmouseover, onmouseout) 
*************************************/
oCMenu.makeMenu('top0','','&nbsp;HISTORY')
	oCMenu.makeMenu('sub00','top0','&nbsp;Home','canarias/history/home.htm')
	oCMenu.makeMenu('sub01','top0','&nbsp;Aborigines')
		oCMenu.makeMenu('sub011','sub01','&nbsp;Aborigines 1','canarias/history/aborigines1.htm')
		oCMenu.makeMenu('sub012','sub01','&nbsp;Aborigines 2','canarias/history/aborigines2.htm')
		oCMenu.makeMenu('sub013','sub01','&nbsp;Aborigines 3','canarias/history/aborigines3.htm')
	oCMenu.makeMenu('sub02','top0','&nbsp;Colonization','canarias/history/colonization.htm')
	oCMenu.makeMenu('sub03','top0','&nbsp;Modern Age','canarias/history/modernage.htm')
	
oCMenu.makeMenu('top1','','&nbsp;CULTURE')
	oCMenu.makeMenu('sub10','top1','&nbsp;Home','canarias/culture/home.htm')
	oCMenu.makeMenu('sub11','top1','&nbsp;Handwork','canarias/culture/handwork.htm')
	oCMenu.makeMenu('sub12','top1','&nbsp;Artwork','canarias/culture/artwork.htm')
	oCMenu.makeMenu('sub13','top1','&nbsp;Fiestas','canarias/culture/fiestas.htm')
	oCMenu.makeMenu('sub14','top1','&nbsp;Religion','canarias/culture/religion.htm')
	
oCMenu.makeMenu('top2','','&nbsp;CLIME')
	oCMenu.makeMenu('sub21','top2','&nbsp;Home','canarias/clime/home.htm')
	oCMenu.makeMenu('sub22','top2','&nbsp;In General','canarias/clime/general.htm')
	oCMenu.makeMenu('sub23','top2','&nbsp;Local Specialites','canarias/clime/local.htm')

oCMenu.makeMenu('top3','','&nbsp;GEOGRAPHY')
	oCMenu.makeMenu('sub30','top3','&nbsp;Home','canarias/geography/home.htm')
	oCMenu.makeMenu('sub31','top3','&nbsp;General Data','canarias/geography/general.htm')
	oCMenu.makeMenu('sub32','top3','&nbsp;Origin of Islands','canarias/geography/origin.htm')
	oCMenu.makeMenu('sub33','top3','&nbsp;Relief on Canarias','canarias/geography/relief.htm')

oCMenu.makeMenu('top4','','&nbsp;GOVERNMENT','canarias/government/index.htm')

oCMenu.makeMenu('top5','','&nbsp;BEACHES')
	oCMenu.makeMenu('sub50','top5','&nbsp;Home','canarias/beaches/home.htm')
	oCMenu.makeMenu('sub51','top5','&nbsp;The BIG ones','canarias/beaches/big.htm')
	oCMenu.makeMenu('sub52','top5','&nbsp;THE small ONES','canarias/beaches/small.htm')
	oCMenu.makeMenu('sub53','top5','&nbsp;Secret Beaches ...','canarias/beaches/secret.htm')

oCMenu.makeMenu('top6','','&nbsp;FOOD & DRINKS')
	oCMenu.makeMenu('sub60','top6','&nbsp;Restaurants','canarias/fooddrinks/restaurants.htm')
	oCMenu.makeMenu('sub61','top6','&nbsp;Canary Food','canarias/fooddrinks/canaryfood.htm')
	oCMenu.makeMenu('sub62','top6','&nbsp;Canary Drinks','canarias/fooddrinks/canarydrinks.htm')

oCMenu.makeMenu('top7','','&nbsp;TRANSPORTATION')
	oCMenu.makeMenu('sub70','top7','&nbsp;How to get here','canarias/transportation/gethere.htm')
	oCMenu.makeMenu('sub71','top7','&nbsp;How to move here','canarias/transportation/movehere.htm')

oCMenu.makeMenu('top8','','&nbsp;F.A. QUESTIONS')
	oCMenu.makeMenu('sub80','top8','&nbsp;Health FAQ','canarias/faqs/health.htm')
	oCMenu.makeMenu('sub81','top8','&nbsp;Telephony FAQ','canarias/faqs/telephony.htm')
	oCMenu.makeMenu('sub82','top8','&nbsp;Money FAQ','canarias/faqs/money.htm')

oCMenu.makeMenu('top9','','&nbsp;SPORT')
	oCMenu.makeMenu('sub90','top9','&nbsp;Water','canarias/sport/water.htm')
	oCMenu.makeMenu('sub91','top9','&nbsp;Earth&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ---->>','canarias/sport/land.htm')
		oCMenu.makeMenu('sub901','sub91','&nbsp;Mountain Bike Spec.','canarias/sport/bikespecial/index.htm')
	oCMenu.makeMenu('sub92','top9','&nbsp;Air','canarias/sport/air.htm')

oCMenu.makeMenu('top10','','&nbsp;SHOPPING')
	oCMenu.makeMenu('sub100','top10','&nbsp;Shopping Centers','canarias/shopping/shoppingcenters.htm')
	oCMenu.makeMenu('sub101','top10','&nbsp;Street Vendors','canarias/shopping/streetvendors.htm')
	oCMenu.makeMenu('sub102','top10','&nbsp;Luxury Staf','canarias/shopping/luxury.htm')
	oCMenu.makeMenu('sub103','top10','&nbsp;Cloth & Shoes','canarias/shopping/clothshoes.htm')

oCMenu.makeMenu('top11','','&nbsp;NIGHT LIFE','canarias/nightlife/nightlife.htm')

oCMenu.makeMenu('top12','','&nbsp;WHERE TO GO')
	oCMenu.makeMenu('sub120','top12','&nbsp;Shows, Attractions','canarias/wheretogo/part1.htm')
	oCMenu.makeMenu('sub121','top12','&nbsp;With car...','canarias/wheretogo/part2.htm')

oCMenu.makeMenu('top13','','&nbsp;EXTRA INFO (PAY)','canarias/protected/index.htm')

oCMenu.makeMenu('top14','','&nbsp;REAL ESTATE, BIZ.')
	oCMenu.makeMenu('sub140','top14','&nbsp;Real Estate','canarias/business/realestate.htm')
	oCMenu.makeMenu('sub141','top14','&nbsp;Business Oport.','canarias/business/boportinities.htm')

oCMenu.makeMenu('top15','','&nbsp;MAPS & IMAGES')
	oCMenu.makeMenu('sub150','top15','&nbsp;Photo Tour')
		oCMenu.makeMenu('sub1501','sub150','&nbsp;Local Places','canarias/protected/index.htm')
		oCMenu.makeMenu('sub1502','sub150','&nbsp;Tullio Gatti','canarias/protected/index.htm')
	oCMenu.makeMenu('sub151','top15','&nbsp;Playa del Ingles','canarias/protected/index.htm')
	oCMenu.makeMenu('sub152','top15','&nbsp;Puerto Rico','canarias/protected/index.htm')
	oCMenu.makeMenu('sub153','top15','&nbsp;Island','canarias/protected/index.htm')
	oCMenu.makeMenu('sub154','top15','&nbsp;Las Palmas','canarias/protected/index.htm')

oCMenu.makeMenu('top16','','&nbsp;ADVICE´S')
	oCMenu.makeMenu('sub160','top16','&nbsp;Security, Insects','canarias/advices/part1.htm')
	oCMenu.makeMenu('sub161','top16','&nbsp;Helth insurance, PR','canarias/advices/part2.htm')

oCMenu.makeMenu('top17','','&nbsp;TIPS & TRICKS')
	oCMenu.makeMenu('sub170','top17','&nbsp;Part 1','canarias/tipstricks/part1.htm')
	oCMenu.makeMenu('sub171','top17','&nbsp;Part 2','canarias/tipstricks/part2.htm')
	oCMenu.makeMenu('sub172','top17','&nbsp;Part 3','canarias/tipstricks/part3.htm')
	oCMenu.makeMenu('sub173','top17','&nbsp;Part 4','canarias/tipstricks/part4.htm')
	oCMenu.makeMenu('sub174','top17','&nbsp;Part 5','canarias/tipstricks/part5.htm')

//Leave this line - it constructs the menu
oCMenu.construct()