module.exports = [
{
n:9, title:"Ich möchte was essen, Onkel Harry.", topic:"Ăn uống, bữa sáng, gọi món, lời mời",
goals:["Nói về thói quen ăn uống","Dùng mögen và möchte","Mời và nhận / từ chối đồ ăn"],
grammar:[
{h:"mögen và möchte",
p:"<b>mögen</b> = thích (thường đi với danh từ). <b>möchte</b> = muốn, lịch sự (đi với danh từ hoặc động từ nguyên mẫu cuối câu). ich và er/sie có cùng dạng.",
tbl:[["","mögen","möchte"],["ich","mag","möchte"],["du","magst","möchtest"],["er/es/sie","mag","möchte"],["wir","mögen","möchten"],["ihr","mögt","möchtet"],["sie/Sie","mögen","möchten"]],
ex:[["Ich mag keinen Käse.","Tôi không thích phô mai."],["Ich möchte etwas essen.","Tôi muốn ăn gì đó."]]},
{h:"möchte trong câu",
p:"Giống các động từ khuyết thiếu: möchte ở vị trí 2, động từ nguyên mẫu ở cuối câu.",
tbl:[["Vị trí 1","Vị trí 2","…","Cuối câu"],["Ich","möchte","etwas","essen."]]},
{h:"Danh từ ghép: Danh từ + Danh từ",
p:"Danh từ ghép lấy <b>mạo từ của danh từ cuối cùng</b>. Đôi khi thêm -n- hoặc -s- ở giữa.",
tbl:[["Danh từ ghép","=","Thành phần"],["der Schokoladenkuchen","=","die Schokolade + der Kuchen"],["die Fischsuppe","=","der Fisch + die Suppe"],["der Orangensaft","=","die Orange + der Saft"]]},
{h:"gern: thích làm gì",
p:"Động từ + <b>gern</b> = thích làm việc đó. Ich mag Obst = Ich esse gern Obst."}
],
phrases:[["Was isst du gern zum Frühstück? Und du?","Bạn thích ăn gì vào bữa sáng? Còn bạn?"],["Ich esse gern Käsebrötchen.","Tôi thích ăn bánh mì kẹp phô mai."],["Ich mag keinen Käse, aber Müsli esse ich gern.","Tôi không thích phô mai, nhưng thích ăn ngũ cốc."],["Wann frühstückst du?","Bạn ăn sáng lúc mấy giờ?"],["Was essen wir als Vorspeise / Hauptgericht / Dessert?","Món khai vị / món chính / tráng miệng mình ăn gì?"],["Möchten Sie einen Kaffee? – Oh ja! Bitte. / Ja, gern.","Ngài dùng cà phê không? – Vâng, làm ơn."],["Möchten Sie noch etwas Suppe? – Nein, danke!","Ngài dùng thêm súp không? – Không, cảm ơn."],["Guten Appetit! – Danke, ebenfalls / gleichfalls.","Chúc ngon miệng! – Cảm ơn, bạn cũng vậy."],["Das schmeckt sehr gut.","Món này ngon lắm."]],
ex:[
{t:"mc",q:"Du ___ keinen Fisch, oder?",o:["mag","magst","mögst"],a:1,e:"du magst."},
{t:"mc",q:"Er ___ einen Tee trinken.",o:["möchte","möchtet","möchtest"],a:0,e:"er möchte."},
{t:"mc",q:"Ihr ___ Schokolade.",o:["mögen","mögt","magt"],a:1,e:"ihr mögt."},
{t:"mc",q:"„die Fischsuppe“ – mạo từ do từ nào quyết định?",o:["Fisch","Suppe"],a:1,e:"Danh từ cuối: die Suppe."},
{t:"mc",q:"Mạo từ của „Apfelkuchen“:",o:["der","die","das"],a:0,e:"der Kuchen → der Apfelkuchen."},
{t:"gap",q:"Ich ___ ein Brötchen. (möchte)",a:["möchte"],e:"ich möchte."},
{t:"gap",q:"___ Sie noch Kaffee? (möchte, Sie)",a:["Möchten"],e:"Sie möchten."},
{t:"gap",q:"Ich mag Obst. = Ich esse ___ Obst.",a:["gern"],e:"gern = thích."},
{t:"mc",q:"Đáp lại „Guten Appetit!“:",o:["Danke, gleichfalls!","Bitte schön!","Tut mir leid!"],a:0,e:"gleichfalls = bạn cũng vậy."},
{t:"order",w:["Ich","möchte","eine","Suppe","essen"],e:"möchte vị trí 2, nguyên mẫu cuối câu."},
{t:"mc",q:"„Ich habe Durst“ nghĩa là:",o:["Tôi đói","Tôi khát","Tôi no"],a:1,e:"Durst = khát."}
]},
{
n:10, title:"Ich steige jetzt in die U-Bahn ein.", topic:"Đi lại, phương tiện giao thông, nhà ga",
goals:["Nói về phương tiện giao thông","Hiểu thông báo ở nhà ga","Dùng động từ tách"],
grammar:[
{h:"Động từ tách (trennbare Verben)",
p:"Nhiều động từ có <b>tiền tố tách được</b> (an-, ein-, aus-, um-, ab-, mit-, auf-, fern-, zurück-…). Khi chia, tiền tố tách ra và đứng <b>cuối câu</b>. Trọng âm nằm ở tiền tố.",
tbl:[["Nguyên mẫu","Trong câu"],["an|rufen","Ich rufe dich an."],["ein|kaufen","Vielleicht kaufe ich noch etwas ein."],["ab|fahren","Der Zug fährt um 9 Uhr ab."]]},
{h:"Động từ tách trong các loại câu",
tbl:[["Loại câu","Vị trí 1","Vị trí 2","…","Cuối câu"],["Câu trần thuật","Vielleicht","kaufe","ich noch etwas","ein."],["Câu hỏi W","Wann","rufst","du mich","an?"],["Câu hỏi Ja/Nein","Rufst","du","mich heute","an?"]],
p:"Động từ chia ở vị trí 2 (hoặc 1 trong câu hỏi Có/Không), tiền tố ở cuối câu như một khung."}
],
phrases:[["Am Bahnsteig zwei fährt die U2 ein. Bitte Vorsicht!","Tàu U2 đang vào sân ga số 2. Xin chú ý!"],["Nächster Halt: Innsbrucker Ring.","Điểm dừng tiếp theo: Innsbrucker Ring."],["Achtung! Bitte zurückbleiben.","Chú ý! Xin đứng lùi lại."],["Wo fährt der Zug nach … ab? – Auf Gleis …","Tàu đi … khởi hành ở đâu? – Ở đường ray số …"],["Wann kommt der Zug aus … an? – Um … Uhr.","Tàu từ … đến lúc mấy giờ? – Lúc … giờ."],["Wo steigen wir aus? – Am Bahnhof.","Mình xuống ở đâu? – Ở nhà ga."],["Holst du mich am Bahnhof ab? – Ja, gern. Wann kommst du an?","Bạn đón mình ở ga nhé? – Ừ, được. Mấy giờ bạn đến?"],["Bis morgen. / Bis bald. / Mach's gut!","Hẹn mai gặp. / Hẹn sớm gặp lại. / Giữ gìn nhé!"]],
ex:[
{t:"mc",q:"Ich ___ dich heute Abend ___.",o:["anrufe / –","rufe / an","rufe an / –"],a:1,e:"anrufen → rufe … an."},
{t:"mc",q:"Wo ___ wir ___?",o:["steigen / aus","aussteigen / –","steigt / aus"],a:0,e:"wir steigen … aus."},
{t:"mc",q:"Der Zug ___ um 8 Uhr ___.",o:["fährt / ab","fahrt / ab","abfährt / –"],a:0,e:"abfahren → fährt … ab (a → ä)."},
{t:"gap",q:"Wann kommst du ___? (ankommen)",a:["an"],e:"Tiền tố an- ở cuối câu."},
{t:"gap",q:"Ich kaufe im Supermarkt ___. (einkaufen)",a:["ein"],e:"ein- cuối câu."},
{t:"gap",q:"Er ___ am Abend fern. (fernsehen)",a:["sieht"],e:"e → ie: er sieht fern."},
{t:"mc",q:"„umsteigen“ nghĩa là:",o:["lên xe","xuống xe","chuyển xe"],a:2,e:"umsteigen = chuyển tàu/xe."},
{t:"order",w:["Holst","du","mich","am","Bahnhof","ab","?"],e:"Câu hỏi Có/Không, tiền tố ab cuối câu."},
{t:"order",w:["Ich","rufe","dich","morgen","an"],e:"Tiền tố an cuối câu."},
{t:"mc",q:"Nơi đợi xe buýt gọi là:",o:["die Haltestelle","das Gleis","der Flughafen"],a:0,e:"die Haltestelle = bến/trạm dừng."}
]},
{
n:11, title:"Was hast du heute gemacht?", topic:"Sinh hoạt hằng ngày, kể chuyện đã qua",
goals:["Kể lại những việc đã làm (thì Perfekt với haben)","Dùng von … bis, ab để nói khoảng thời gian"],
grammar:[
{h:"Giới từ thời gian von … bis, ab",
p:"<b>von … bis</b> = từ … đến (có điểm bắt đầu và kết thúc). <b>ab</b> = từ … trở đi.",
ex:[["Von 9 Uhr bis 10 Uhr habe ich gearbeitet.","Từ 9 đến 10 giờ tôi đã làm việc."],["Ab 9 Uhr bin ich im Büro.","Từ 9 giờ trở đi tôi ở văn phòng."]]},
{h:"Thì Perfekt với haben",
p:"Perfekt dùng để kể chuyện đã xảy ra (trong văn nói). Cấu trúc: <b>haben</b> (chia, vị trí 2) + <b>Partizip II</b> (cuối câu).<br>• Động từ có quy tắc: <b>ge- … -t</b> (machen → gemacht)<br>• Bất quy tắc: <b>ge- … -en</b>, thường đổi nguyên âm (schreiben → geschrieben)<br>• Động từ tách: tiền tố + <b>ge</b> + gốc (aufräumen → aufgeräumt)<br>• Động từ đuôi <b>-ieren</b>: không có ge- (telefonieren → telefoniert)",
tbl:[["Loại","Nguyên mẫu","Perfekt"],["có quy tắc","machen","er hat gemacht"],["bất quy tắc","schreiben","er hat geschrieben"],["tách","aufräumen / anrufen","er hat aufgeräumt / angerufen"],["-ieren","telefonieren","er hat telefoniert"]],
ex:[["sagen – gesagt, arbeiten – gearbeitet","nói – đã nói, làm việc – đã làm việc"],["essen – gegessen, trinken – getrunken","ăn – đã ăn, uống – đã uống"],["einkaufen – eingekauft, fernsehen – ferngesehen","mua sắm, xem TV"]]},
{h:"Perfekt trong câu",
tbl:[["Loại câu","Vị trí 1","Vị trí 2","…","Cuối câu"],["Trần thuật","Ab 9 Uhr","habe","ich","gearbeitet."],["Câu hỏi W","Was","hast","du sonst noch","gemacht?"],["Câu hỏi Ja/Nein","Hast","du","Frau Dr. Weber","angerufen?"]]}
],
phrases:[["Was hast du heute / gestern / letzten Montag gemacht?","Hôm nay / hôm qua / thứ Hai tuần trước bạn đã làm gì?"],["Von neun bis eins habe ich gearbeitet.","Từ 9 đến 1 giờ tôi đã làm việc."],["Ich habe eine E-Mail geschrieben.","Tôi đã viết một email."],["Ich habe den ganzen Tag gelernt.","Tôi đã học cả ngày."]],
ex:[
{t:"mc",q:"Ich ___ Kaffee gekocht.",o:["habe","bin","hat"],a:0,e:"ich habe + Partizip."},
{t:"mc",q:"Partizip II của „machen“:",o:["gemachen","gemacht","machte"],a:1,e:"Có quy tắc: ge-mach-t."},
{t:"mc",q:"Partizip II của „schreiben“:",o:["geschreibt","geschrieben","schrieben"],a:1,e:"Bất quy tắc: geschrieben."},
{t:"mc",q:"Partizip II của „aufräumen“:",o:["geaufräumt","aufgeräumt","aufräumt"],a:1,e:"Tách: auf + ge + räumt."},
{t:"mc",q:"Partizip II của „telefonieren“:",o:["getelefoniert","telefoniert","telefonierte"],a:1,e:"-ieren không có ge-."},
{t:"gap",q:"Hast du die Zeitung ___? (lesen)",a:["gelesen"],e:"lesen → gelesen."},
{t:"gap",q:"Wir haben Pizza ___. (essen)",a:["gegessen"],e:"essen → gegessen."},
{t:"gap",q:"Er hat mich ___. (anrufen)",a:["angerufen"],e:"an + ge + rufen."},
{t:"gap",q:"Ich habe ___ 9 ___ 12 Uhr gearbeitet. (từ … đến)",a:["von bis","von … bis"],e:"von … bis."},
{t:"order",w:["Was","hast","du","gestern","gemacht","?"],e:"Partizip cuối câu."},
{t:"order",w:["Ich","habe","eine","E-Mail","geschrieben"],e:"haben vị trí 2, Partizip cuối."},
{t:"mc",q:"Partizip II của „arbeiten“:",o:["gearbeit","gearbeitet","arbeitet"],a:1,e:"Gốc -t → thêm -et: gearbeitet."}
]},
{
n:12, title:"Was ist denn hier passiert?", topic:"Lễ hội, các mùa và tháng, kể chuyện đi lại",
goals:["Nói về mùa, tháng với giới từ im","Kể chuyện đã qua với Perfekt dùng sein","Nói về lễ hội"],
grammar:[
{h:"Giới từ thời gian im",
p:"<b>im</b> + tháng / mùa: im Oktober, im Herbst, im Winter."},
{h:"Perfekt với sein",
p:"Dùng <b>sein</b> thay vì haben với động từ chỉ <b>sự di chuyển</b> (gehen, fahren, fliegen, kommen…) hoặc <b>thay đổi trạng thái</b> (aufstehen, passieren…), và với sein, bleiben.",
tbl:[["Loại","Nguyên mẫu","sein +","Partizip II"],["bất quy tắc","gehen","er/sie ist","gegangen"],["","fliegen","er/sie ist","geflogen"],["","fahren","er/sie ist","gefahren"],["","kommen","er/sie ist","gekommen"],["tách","ankommen","er/sie ist","angekommen"],["","einsteigen","er/sie ist","eingestiegen"],["","abfahren","er/sie ist","abgefahren"]],
ex:[["Henry ist vor drei Monaten nach Deutschland gekommen.","Henry đã đến Đức cách đây ba tháng."],["Letztes Jahr ist er nach München geflogen.","Năm ngoái anh ấy đã bay đến München."]]}
],
phrases:[["Henry ist vor drei Monaten nach Deutschland gekommen.","Henry đã đến Đức ba tháng trước."],["Letztes Jahr ist er in die Schweiz geflogen.","Năm ngoái anh ấy bay sang Thụy Sĩ."],["Das Fest heißt … / ist in … / hat … Besucher / dauert …","Lễ hội tên là … / ở … / có … khách / kéo dài …"],["Es gibt es seit …","Có từ năm …"],["Wir haben Musik gehört, getanzt und viele nette Leute getroffen.","Chúng tôi đã nghe nhạc, nhảy và gặp nhiều người dễ thương."]],
ex:[
{t:"mc",q:"Wir ___ nach Berlin gefahren.",o:["haben","sind","hat"],a:1,e:"fahren (di chuyển) → sein."},
{t:"mc",q:"Ich ___ Musik gehört.",o:["habe","bin","ist"],a:0,e:"hören → haben."},
{t:"mc",q:"Was ___ passiert?",o:["hat","ist","sind"],a:1,e:"passieren → sein."},
{t:"mc",q:"Ich bin ___ Sommer nach Italien geflogen.",o:["am","im","um"],a:1,e:"im + mùa."},
{t:"gap",q:"Er ist um 7 Uhr ___. (aufstehen)",a:["aufgestanden"],e:"auf + ge + standen."},
{t:"gap",q:"Sie ___ nach Hause gegangen. (sie = cô ấy)",a:["ist"],e:"gehen → sein."},
{t:"gap",q:"Der Zug ist pünktlich ___. (ankommen)",a:["angekommen"],e:"an + ge + kommen."},
{t:"gap",q:"Wir haben die ganze Nacht ___. (feiern)",a:["gefeiert"],e:"Có quy tắc: gefeiert."},
{t:"mc",q:"Tháng 10 là:",o:["Oktober","August","Dezember"],a:0,e:"der Oktober."},
{t:"order",w:["Ich","bin","nach","Hamburg","geflogen"],e:"sein + Partizip cuối câu."},
{t:"mc",q:"„der Herbst“ là mùa:",o:["xuân","hè","thu"],a:2,e:"Herbst = mùa thu."}
]},
{
n:13, title:"Wir suchen das Hotel Maritim.", topic:"Hỏi và chỉ đường trong thành phố",
goals:["Hỏi đường và chỉ đường","Nói vị trí với giới từ + Dativ (Wo?)","Cảm ơn và đáp lại"],
grammar:[
{h:"Giới từ chỉ vị trí + Dativ (Wo?)",
p:"Trả lời câu hỏi <b>Wo?</b> (ở đâu) với các giới từ: <b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b> + cách 3 (Dativ).<br>Mạo từ ở Dativ: der → <b>dem</b>, das → <b>dem</b>, die → <b>der</b>, số nhiều → <b>den</b> (+ -n ở danh từ).",
tbl:[["Nominativ","Dativ (xác định)","Dativ (không xác định)"],["der Dom","neben dem Dom","neben einem Dom"],["das Café","neben dem Café","neben einem Café"],["die Post","neben der Post","neben einer Post"],["die Banken (số nhiều)","neben den Banken","neben – Banken"]]},
{h:"Rút gọn",
p:"<b>in dem = im</b>, <b>an dem = am</b>.",
ex:[["Das Hotel ist im Zentrum.","Khách sạn ở trung tâm."],["Wir treffen uns am Bahnhof.","Mình gặp nhau ở nhà ga."]]},
{h:"Nghĩa của các giới từ vị trí",
tbl:[["Giới từ","Nghĩa"],["an","sát cạnh (có tiếp xúc)"],["auf","trên (có tiếp xúc)"],["über","phía trên (không tiếp xúc)"],["unter","bên dưới"],["neben","bên cạnh"],["vor","phía trước"],["hinter","phía sau"],["zwischen","ở giữa"],["in","bên trong"]]}
],
phrases:[["Entschuldigung! / Entschuldigen Sie bitte.","Xin lỗi (cho tôi hỏi)."],["Können Sie mir helfen? / Haben Sie einen Moment Zeit?","Ngài giúp tôi được không? / Ngài có chút thời gian không?"],["Kennen Sie …? / Wo finde ich …? / Ich suche …","Ngài có biết …? / … ở đâu? / Tôi đang tìm …"],["Sie fahren zuerst geradeaus und dann nach rechts.","Đầu tiên ngài đi thẳng rồi rẽ phải."],["Sie biegen rechts / links ab.","Ngài rẽ phải / trái."],["Das ist in der Nähe von …","Chỗ đó ở gần …"],["Wenden Sie. / Sie fahren zwei Kilometer geradeaus.","Ngài quay đầu lại. / Ngài đi thẳng hai cây số."],["Tut mir leid. Ich bin auch fremd hier.","Xin lỗi. Tôi cũng là người lạ ở đây."],["Sehr nett! Vielen Dank! – Bitte, gern. / Kein Problem.","Ngài thật tốt! Cảm ơn nhiều! – Không có gì."]],
ex:[
{t:"mc",q:"Die Bank ist neben ___ Post.",o:["die","der","dem"],a:1,e:"die → der (Dativ)."},
{t:"mc",q:"Das Café ist hinter ___ Bahnhof.",o:["der","den","dem"],a:2,e:"der → dem."},
{t:"mc",q:"Das Taxi steht vor ___ Hotel.",o:["dem","der","das"],a:0,e:"das → dem."},
{t:"mc",q:"Wir wohnen ___ Zentrum.",o:["in","im","am"],a:1,e:"in dem = im."},
{t:"gap",q:"Die Lampe hängt über ___ Tisch. (der Tisch)",a:["dem"],e:"der → dem."},
{t:"gap",q:"Das Kino ist zwischen ___ Bank und ___ Post.",a:["der der","der … der"],e:"die Bank, die Post → der, der."},
{t:"gap",q:"Fahren Sie ___ links. (sang trái)",a:["nach"],e:"nach links."},
{t:"mc",q:"„geradeaus“ nghĩa là:",o:["rẽ phải","đi thẳng","quay lại"],a:1,e:"geradeaus = đi thẳng."},
{t:"mc",q:"Câu hỏi nào dùng Dativ?",o:["Wo ist das Hotel?","Wohin gehst du?","Was kaufst du?"],a:0,e:"Wo? → Dativ."},
{t:"order",w:["Die","Post","ist","neben","der","Bank"],e:"neben + Dativ."}
]},
{
n:14, title:"Wie findest du Ottos Haus?", topic:"Nhà ở, phòng, mô tả và đánh giá căn hộ",
goals:["Mô tả nhà và các phòng","Dùng sở hữu cách với tên riêng","Dùng mạo từ sở hữu sein / ihr"],
grammar:[
{h:"Sở hữu cách với tên riêng (Genitiv)",
p:"Thêm <b>-s</b> vào sau tên người (không có dấu nháy): Ottos Nachbarin = người hàng xóm của Otto.",
tbl:[["Genitiv","=","von + Dativ"],["Ottos Nachbarin","=","die Nachbarin von Otto"],["Vanillas Garten","=","der Garten von Vanilla"]]},
{h:"Mạo từ sở hữu sein / ihr",
p:"<b>sein</b> = của anh ấy (hoặc của nó), <b>ihr</b> = của cô ấy. Đuôi biến đổi giống ein/kein: giống cái và số nhiều thêm <b>-e</b>, giống đực ở Akkusativ thêm <b>-en</b>.",
tbl:[["","Nom. (anh ấy)","Nom. (cô ấy)","Akk. (anh ấy)","Akk. (cô ấy)"],["der Garten","sein","ihr","seinen","ihren"],["das Haus","sein","ihr","sein","ihr"],["die Küche","seine","ihre","seine","ihre"],["die Kinder (số nhiều)","seine","ihre","seine","ihre"]],
ex:[["Das ist sein Haus.","Đây là nhà của anh ấy."],["Ich mag ihren Garten.","Tôi thích khu vườn của cô ấy."]]}
],
phrases:[["Das Haus ist groß / klein und hat sieben Zimmer.","Ngôi nhà lớn / nhỏ và có bảy phòng."],["Im Erdgeschoss / Im ersten Stock sind drei Zimmer.","Ở tầng trệt / tầng một có ba phòng."],["Hier vorne links ist die Küche.","Phía trước bên trái là nhà bếp."],["Da hinten ist seine Garage.","Đằng sau kia là gara của anh ấy."],["Neben dem Haus ist eine Garage.","Bên cạnh ngôi nhà là một gara."],["Ich finde … interessant / langweilig.","Tôi thấy … thú vị / chán."],["… sieht toll / nicht so schön aus.","… trông tuyệt / không đẹp lắm."]],
ex:[
{t:"mc",q:"Das ist Otto. Das ist ___ Haus.",o:["sein","seine","ihr"],a:0,e:"Otto (nam), das Haus → sein."},
{t:"mc",q:"Das ist Vanilla. Das ist ___ Küche.",o:["seine","ihr","ihre"],a:2,e:"Vanilla (nữ), die Küche → ihre."},
{t:"mc",q:"Ich mag ___ Garten. (của anh ấy)",o:["sein","seinen","seine"],a:1,e:"der Garten, Akkusativ → seinen."},
{t:"mc",q:"Das sind ___ Kinder. (của cô ấy)",o:["ihr","ihre","ihren"],a:1,e:"Số nhiều → ihre."},
{t:"gap",q:"die Nachbarin von Otto = ___ Nachbarin",a:["Ottos"],e:"Tên + s."},
{t:"gap",q:"Ich finde ___ Balkon schön. (của cô ấy, der Balkon, Akk.)",a:["ihren"],e:"der → ihren."},
{t:"mc",q:"„das Erdgeschoss“ là:",o:["tầng hầm","tầng trệt","mái nhà"],a:1,e:"Erdgeschoss = tầng trệt."},
{t:"mc",q:"Phòng ngủ là:",o:["das Wohnzimmer","das Schlafzimmer","die Küche"],a:1,e:"schlafen = ngủ."},
{t:"order",w:["Das","Haus","hat","drei","Zimmer"],e:"Động từ vị trí 2."},
{t:"gap",q:"Die Wohnung ___ toll aus. (aussehen)",a:["sieht"],e:"aussehen → sieht … aus."}
]},
{
n:15, title:"In Giesing wohnt das Leben!", topic:"Khu phố, cơ sở trong thành phố, đánh giá nơi sống",
goals:["Đánh giá một khu phố","Hỏi về các cơ sở (rạp phim, cửa hàng…)","Dùng đại từ nhân xưng và động từ đi với Dativ"],
grammar:[
{h:"Đại từ nhân xưng ở Dativ",
tbl:[["Nominativ","Dativ"],["ich","mir"],["du","dir"],["er/es","ihm"],["sie","ihr"],["wir","uns"],["ihr","euch"],["sie/Sie","ihnen/Ihnen"]],
p:"Dativ trả lời câu hỏi <b>Wem?</b> (cho ai, với ai)."},
{h:"Động từ đi với Dativ",
p:"Một số động từ luôn cần tân ngữ ở <b>Dativ</b>: <b>gehören</b> (thuộc về), <b>gefallen</b> (làm hài lòng = thích), <b>helfen</b> (giúp), <b>danken</b> (cảm ơn), <b>gratulieren</b> (chúc mừng), <b>passen</b> (vừa, hợp), <b>fehlen</b> (thiếu).",
tbl:[["Câu","Nghĩa"],["Das gehört mir.","Cái đó là của tôi."],["Das gefällt dir.","Bạn thích cái đó."],["Das hilft ihm.","Cái đó giúp anh ấy."],["Ich danke ihr.","Tôi cảm ơn cô ấy."]],
ex:[["Ich gratuliere dir zum Geburtstag.","Chúc mừng sinh nhật bạn."],["Ich helfe dir beim Kochen.","Tôi giúp bạn nấu ăn."]]},
{h:"Es gibt + Akkusativ",
p:"<b>es gibt</b> = có (tồn tại). Danh từ theo sau ở Akkusativ.",
ex:[["Es gibt viele Kneipen und Restaurants.","Có nhiều quán nhậu và nhà hàng."],["Gibt es hier einen Supermarkt?","Ở đây có siêu thị không?"]]}
],
phrases:[["Was gefällt Ihnen / euch (nicht) an dem Viertel?","Ngài / các bạn (không) thích điều gì ở khu phố này?"],["Giesing ist ganz normal und das finde ich super.","Giesing rất bình thường và tôi thấy thế là tuyệt."],["Das finde ich gut. / Aber so toll ist es nun auch wieder nicht.","Tôi thấy thế là tốt. / Nhưng cũng không tuyệt đến thế."],["Gibt es eigentlich auch ein Kino in …?","Ở … có rạp chiếu phim không?"],["In … gibt es leider nur sehr wenige Geschäfte.","Tiếc là ở … có rất ít cửa hàng."],["Es gibt viele Kneipen und Restaurants.","Có nhiều quán nhậu và nhà hàng."]],
ex:[
{t:"mc",q:"Das Buch gehört ___. (tôi)",o:["mich","mir","ich"],a:1,e:"gehören + Dativ: mir."},
{t:"mc",q:"Gefällt ___ die Stadt? (bạn)",o:["dich","du","dir"],a:2,e:"gefallen + Dativ: dir."},
{t:"mc",q:"Ich helfe ___. (anh ấy)",o:["ihn","ihm","er"],a:1,e:"helfen + Dativ: ihm."},
{t:"mc",q:"Wir danken ___. (cô ấy)",o:["sie","ihr","ihm"],a:1,e:"sie → ihr (Dativ)."},
{t:"gap",q:"Das T-Shirt passt ___ nicht. (tôi)",a:["mir"],e:"passen + Dativ."},
{t:"gap",q:"Ich gratuliere ___ zum Geburtstag. (các bạn)",a:["euch"],e:"ihr → euch."},
{t:"gap",q:"Kann ich ___ helfen? (Ngài)",a:["Ihnen"],e:"Sie → Ihnen."},
{t:"mc",q:"In Giesing ___ viele Cafés.",o:["gibt es","es gibt","ist es"],a:0,e:"Vị trí 1 là In Giesing nên động từ gibt đứng thứ 2."},
{t:"mc",q:"„die Bibliothek“ là:",o:["thư viện","hiệu sách","trường học"],a:0,e:"Bibliothek = thư viện."},
{t:"order",w:["Die","Stadt","gefällt","mir","gut"],e:"gefallen + Dativ."}
]},
{
n:16, title:"Wir haben hier ein Problem.", topic:"Khách sạn, sự cố, hẹn lịch",
goals:["Nhờ giúp đỡ khi có sự cố","Đề nghị giúp đỡ","Hẹn, dời và hủy lịch hẹn"],
grammar:[
{h:"Giới từ thời gian vor, nach, in + Dativ",
p:"Trả lời câu hỏi <b>Wann?</b> (khi nào). <b>vor</b> = cách đây / trước, <b>nach</b> = sau, <b>in</b> = trong / sau (tương lai) + Dativ.",
tbl:[["Giới từ","giống đực/trung","giống cái","số nhiều"],["vor / nach / in","einem Monat / einem Jahr","einer Stunde","zwei Wochen"]],
ex:[["In einer Stunde kommt der Techniker.","Một tiếng nữa kỹ thuật viên đến."],["Vor zwei Wochen war ich in Wien.","Hai tuần trước tôi ở Vienna."]]},
{h:"Giới từ für + Akkusativ: (Für) wie lange?",
p:"Trả lời <b>(Für) wie lange?</b> (trong bao lâu) – <b>für</b> + Akkusativ.",
tbl:[["für","einen Tag","ein Jahr","eine Woche","zwei Wochen"]],
ex:[["Ich buche das Zimmer für eine Woche.","Tôi đặt phòng trong một tuần."]]}
],
phrases:[["Entschuldigung, können Sie mir helfen? Wir haben ein Problem.","Xin lỗi, ngài giúp tôi được không? Chúng tôi gặp sự cố."],["Eine Bitte noch: Können Sie …?","Còn một việc nữa: ngài có thể …?"],["… ist kaputt / funktioniert nicht.","… bị hỏng / không hoạt động."],["Es gibt kein/e/en …","Không có …"],["Was kann ich für Sie tun? / Wie kann ich Ihnen helfen?","Tôi có thể làm gì cho ngài?"],["Ich kümmere mich sofort darum. / Ich komme sofort.","Tôi sẽ lo ngay. / Tôi đến ngay."],["Ich möchte den Termin verschieben.","Tôi muốn dời lịch hẹn."],["Passt dir das? / Passt es dir am …?","Như vậy có tiện cho bạn không? / Ngày … có tiện không?"],["Kein Problem! / Das macht doch nichts.","Không sao đâu!"]],
ex:[
{t:"mc",q:"Der Techniker kommt in ___ Stunde.",o:["ein","einer","einem"],a:1,e:"in + Dativ, die Stunde → einer."},
{t:"mc",q:"Ich war vor ___ Jahr in Berlin.",o:["einem","einer","ein"],a:0,e:"vor + Dativ, das Jahr → einem."},
{t:"mc",q:"Ich bleibe für ___ Tag.",o:["einem","einen","ein"],a:1,e:"für + Akkusativ, der Tag → einen."},
{t:"mc",q:"Wir fahren für ___ Woche nach Wien.",o:["eine","einer","einem"],a:0,e:"für + Akk., die Woche → eine."},
{t:"gap",q:"Nach ___ Kurs gehe ich nach Hause. (der Kurs, Dativ)",a:["dem"],e:"nach + Dativ: dem."},
{t:"gap",q:"Die Heizung ist ___. (hỏng)",a:["kaputt"],e:"kaputt = hỏng."},
{t:"mc",q:"„einen Termin absagen“ nghĩa là:",o:["hẹn lịch","hủy lịch","dời lịch"],a:1,e:"absagen = hủy."},
{t:"mc",q:"„verschieben“ nghĩa là:",o:["dời, hoãn","đồng ý","gửi"],a:0,e:"verschieben = dời lịch."},
{t:"order",w:["Der","Fernseher","funktioniert","nicht"],e:"nicht sau động từ."},
{t:"mc",q:"Đáp lại lời xin lỗi:",o:["Das macht doch nichts.","Guten Appetit!","Bis bald!"],a:0,e:"= Không sao đâu."}
]}
];
