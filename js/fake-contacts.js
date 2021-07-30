const names = `Patty O\'Furniture
Paddy O\'Furniture
Olive Yew
Aida Bugg
Maureen Biologist
Teri Dactyl
Peg Legge
Allie Grater
Liz Erd
A. Mused
Constance Noring
Lois Di Nominator
Minnie Van Ryder
Lynn O\'Leeum
P. Ann O\'Recital
Ray O\'Sun
Lee A. Sun
Ray Sin
Isabelle Ringing
Eileen Sideways
Rita Book
Paige Turner
Rhoda Report
Augusta Wind
Chris Anthemum
Anne Teak
U.R. Nice
Anita Bath
Harriet Upp
I.M. Tired
I. Missy Ewe
Ivana B. Withew
Anita Letterback
Hope Furaletter
B. Homesoon
Bea Mine
Bess Twishes
C. Yasoon
Audie Yose
Dee End
Amanda Hug
Ben Dover
Eileen Dover
Willie Makit
Willie Findit
Skye Blue
Staum Clowd
Addie Minstra
Anne Ortha
Dave Allippa
Dee Zynah
Hugh Mannerizorsa
Loco Lyzayta
Manny Jah
Mark Ateer
Reeve Ewer
Tex Ryta
Theresa Green
Barry Kade
Stan Dupp
Neil Down
Con Trariweis
Don Messwidme
Al Annon
Anna Domino
Clyde Stale
Anna Logwatch
Anna Littlical
Norma Leigh Absent
Sly Meebuggah
Saul Goodmate
Faye Clether
Sarah Moanees
Ty Ayelloribbin
Hugo First
Percy Vere
Jack Aranda
Olive Tree
Fran G. Pani
John Quil
Ev R. Lasting
Anne Thurium
Cherry Blossom
Glad I. Oli
Ginger Plant
Del Phineum
Rose Bush
Perry Scope
Frank N. Stein
Roy L. Commishun
Pat Thettick
Percy Kewshun
Rod Knee
Hank R. Cheef
Bridget Theriveaquai
Pat N. Toffis
Karen Onnabit
Col Fays
Fay Daway
Joe V. Awl
Wes Yabinlatelee
Colin Sik
Greg Arias
Toi Story
Gene Eva Convenshun
Jen Tile
Simon Sais
Peter Owt
Hugh N. Cry
Lee Nonmi
Lynne Gwafranca
Art Decco
Lynne Gwistic
Polly Ester Undawair
Oscar Nommanee
Laura Biding
Laura Norda
Des Ignayshun
Mike Rowe-Soft
Anne T. Kwayted
Wayde N. Thabalanz
Dee Mandingboss
Sly Meedentalfloss
Stanley Knife
Wynn Dozeaplikayshun
Mal Ajusted
Penny Black
Mal Nurrisht
Polly Pipe
Polly Wannakrakouer
Con Staninterupshuns
Fran Tick
Santi Argo
Carmen Goh
Carmen Sayid
Norma Stitts
Ester La Vista
Manuel Labor
Ivan Itchinos
Ivan Notheridiya
Emma Grate
Annie Versaree
Tim Midsaylesman
Mary Krismass
Tim "Buck" Too
Lana Lynne Creem
Wiley Waites
Ed U. Cayshun
Anne T. Dote
Claude Strophobia`.split('\n');
const phones = `(917) 983-8300
(255) 756-6607
(661) 532-0833
(417) 405-7883
(513) 510-9085
(817) 238-1576
(716) 276-6924
(677) 815-6314
(250) 345-2644
(908) 635-9879
(994) 876-0022
(587) 318-0771
(239) 885-9090
(331) 516-0386
(495) 930-3252
(392) 481-9825
(661) 232-8416
(528) 307-8172
(642) 468-8497
(462) 468-4923
(986) 340-4353
(392) 224-6196
(264) 894-3294
(668) 547-7314
(446) 616-5997
(596) 277-3965
(747) 531-9041
(673) 737-7614
(422) 284-7322
(394) 399-1162
(814) 877-4758
(847) 663-5588
(559) 726-1466
(356) 567-1003
(818) 933-4959
(717) 284-8638
(423) 886-5364
(431) 432-0374
(612) 768-5510
(716) 627-9418
(892) 362-3501
(354) 263-7430
(709) 452-4177
(890) 209-8863
(251) 867-1224
(407) 632-9925
(851) 613-2961
(975) 434-2206
(244) 268-1732
(340) 768-1149
(815) 902-0943
(485) 247-6041
(724) 939-5870
(467) 678-8373
(453) 906-5617
(493) 998-1635
(278) 935-9422
(533) 988-1788
(955) 706-7447
(592) 994-1422
(798) 476-3207
(396) 624-9559
(581) 610-4843
(577) 710-1203
(282) 930-5321
(909) 963-9755
(629) 984-1606
(728) 902-2846
(733) 611-6273
(211) 875-0456
(574) 571-7078
(277) 234-5803
(949) 657-0965
(200) 969-5809
(466) 606-2173
(813) 480-6633
(375) 364-9685
(663) 465-9981
(336) 528-5086
(801) 957-6499
(749) 276-2280
(487) 923-5455
(244) 251-1729
(885) 985-2556
(763) 736-0335
(741) 862-1940
(440) 917-7771
(756) 946-1069
(993) 400-2464
(847) 321-0200
(582) 458-3418
(907) 205-8147
(409) 421-3862
(325) 758-8343
(905) 401-8460
(410) 901-3795
(985) 648-3861
(288) 483-5861
(722) 457-8335
(993) 418-9413
(365) 848-9764
(426) 869-3861
(463) 875-2304
(928) 415-2632
(300) 659-9606
(378) 849-3955
(494) 531-3635
(945) 616-0352
(842) 397-8694
(451) 482-5890
(490) 602-9236
(992) 813-9198
(983) 359-3933
(932) 853-8722
(736) 730-8875
(656) 592-2889
(554) 613-5770
(798) 617-4295
(778) 314-6064
(707) 643-7300
(617) 548-1722
(250) 631-7578
(628) 799-6137
(488) 980-7965
(616) 531-4222
(822) 372-1019
(363) 304-0947
(214) 545-8428
(483) 775-9419
(457) 937-8493
(764) 207-6449
(267) 202-3733
(520) 288-9824
(206) 431-5564
(735) 828-1225
(943) 564-7012
(569) 318-3869
(357) 930-6186
(484) 522-2551
(266) 780-0853
(615) 489-0743
(569) 686-5704
(317) 693-4965
(797) 234-1489
(922) 728-1213
(629) 733-8793
(884) 437-3392
(896) 245-4982
(651) 508-8710
(397) 234-4704`.split('\n');
const addressesRaw = `9146 Homewood St.
Far Rockaway, NY 11691
8821 South Ave.
Tuscaloosa, AL 35405
14 Helen Drive
Forest Hills, NY 11375
9501 SW. Primrose St.
Pelham, AL 35124
373 Corona Street
Suffolk, VA 23434
57 Indian Summer Street
Spartanburg, SC 29301
8507 Smith Store Road
Tupelo, MS 38801
69 River Dr.
Roanoke Rapids, NC 27870
2 East Poplar Rd.
Evans, GA 30809
22 Riverside Street
Warren, MI 48089
1 Virginia Rd.
Taylors, SC 29687
8615 Sierra St.
Vincentown, NJ 08088
596 Oak St.
Stoughton, MA 02072
8 Albany Lane
Sewell, NJ 08080
935 Brickyard St.
Saint Charles, IL 60174
7155 Shipley Street
Danbury, CT 06810
121 NW. Rose Avenue
Dubuque, IA 52001
32 Country St.
Iowa City, IA 52240
17 Peg Shop Drive
Palmetto, FL 34221
9679 Country St.
Wisconsin Rapids, WI 54494
8677 Oak Valley Circle
East Meadow, NY 11554
78 East Rd.
Dayton, OH 45420
7489 Meadow St.
Bethlehem, PA 18015
9 1st Dr.
Newburgh, NY 12550
53 Smoky Hollow Drive
Little Rock, AR 72209
8246 Wild Horse Drive
Port Jefferson Station, NY 11776
58 Pendergast Street
Coachella, CA 92236
9013 Pulaski Street
Wakefield, MA 01880
350 W. Stonybrook Rd.
Grayslake, IL 60030
612 Brown Street
Macomb, MI 48042
751 Wagon St.
Lynchburg, VA 24502
28 Cleveland St.
Centreville, VA 20120
9564 Brook Road
Annapolis, MD 21401
9011 Mammoth Avenue
New Haven, CT 06511
14 Pendergast Court
Prattville, AL 36067
7581 Armstrong St.
Lakewood, NJ 08701
3 Addison Avenue
Irvington, NJ 07111
9349 Briarwood Dr.
Glendale Heights, IL 60139
240 Gregory Lane
Basking Ridge, NJ 07920
814 Smith Store St.
Council Bluffs, IA 51501
9622 Sage Rd.
Dearborn Heights, MI 48127
287 Windsor St.
Hazleton, PA 18201
8152 Bow Ridge Ave.
Merrimack, NH 03054
491 Galvin Avenue
Pompano Beach, FL 33060
9 Arlington Ave.
South Richmond Hill, NY 11419
48 Livingston Street
Lockport, NY 14094
298 Essex Street
Homestead, FL 33030
7064 Rose Street
Ashburn, VA 20147
21 S. Strawberry Dr.
Hudsonville, MI 49426
8 West Ocean Drive
Rowlett, TX 75088
84 Brandywine St.
Monsey, NY 10952
944 West St.
Minot, ND 58701
72 South Ridge Drive
Lawrenceville, GA 30043
9133 Newbridge Rd.
Sylvania, OH 43560
454 Railroad St.
Palos Verdes Peninsula, CA 90274
9489 North High Point St.
Suwanee, GA 30024
9715 Tunnel Lane
South El Monte, CA 91733
7423 Beechwood Ave.
Sulphur, LA 70663
8 Proctor Ave.
Boca Raton, FL 33428
7482 W. Bridge Court
Stratford, CT 06614
72 College Lane
Palm Beach Gardens, FL 33410
7473 Queen Dr.
Tucson, AZ 85718
401 Clinton Ave.
Winter Haven, FL 33880
4 Myers Court
Windsor, CT 06095
44 Birchwood Street
Simpsonville, SC 29680
802 Shore St.
Duluth, GA 30096
9096 Leeton Ridge Lane
Collegeville, PA 19426
190 W. Rosewood St.
Huntley, IL 60142
7333 Nut Swamp St.
Mooresville, NC 28115
176 Saxon Ave.
Londonderry, NH 03053
278 Hillside Drive
South Plainfield, NJ 07080
49 Randall Mill Lane
Defiance, OH 43512
416 Elm Street
Nicholasville, KY 40356
11 West New Saddle Avenue
Helena, MT 59601
298 Illinois St.
Sunnyside, NY 11104
52 Lake Ave.
Grand Island, NE 68801
404 St Paul Ave.
Moncks Corner, SC 29461
280 South Corona Ave.
Lakeville, MN 55044
65 Carriage St.
Miamisburg, OH 45342
796 Newport Drive
Glendale, AZ 85302
59 Colonial Ave.
Eastlake, OH 44095
7698 Maple Street
Independence, KY 41051
226 West Bridge St.
North Ridgeville, OH 44039
94 Logan Dr.
Greenfield, IN 46140
9053 Sunbeam Lane
Hartford, CT 06106
21 Wild Horse Lane
Reno, NV 89523
122 East Parker St.
Brookline, MA 02446
537 East Westport Drive
Rockville Centre, NY 11570
639 Sherman Dr.
Bettendorf, IA 52722
680 Rocky River St.
Hendersonville, NC 28792
245 Ramblewood Avenue
Livonia, MI 48150
362 Highland Ave.
Oxon Hill, MD 20745
834 South Fulton St.
Fairport, NY 14450
25 Thompson Drive
Butler, PA 16001
7172 Maiden Drive
Orlando, FL 32806
566 Glen Creek Avenue
Owings Mills, MD 21117
547 Brandywine Lane
Champlin, MN 55316
553 6th Lane
Cocoa, FL 32927
8250 Belmont Circle
Lake Charles, LA 70605
7737 Glenridge Ave.
Lynnwood, WA 98037
8263 Prairie Street
Norfolk, VA 23503
179 Swanson Lane
Round Lake, IL 60073
78 Alton Street
Lincolnton, NC 28092
7243 Smith Store Dr.
Berwyn, IL 60402
139 Purple Finch Ave.
Sioux Falls, SD 57103
609 Manor Station Street
Asheville, NC 28803
434 Airport Ave.
Mansfield, MA 02048
3 Beach Street
Fuquay Varina, NC 27526
967 Kirkland Court
Tampa, FL 33604
662 Windfall Court
Bristol, CT 06010
344 Creek Dr.
Elkhart, IN 46514
8789 Monroe Road
Clayton, NC 27520
92 E. Beaver Ridge Dr.
Ogden, UT 84404
9711 Sherwood St.
Middletown, CT 06457
9862 Cobblestone St.
Los Banos, CA 93635
44 Ryan St.
Inman, SC 29349
422 East Railroad Ave.
New City, NY 10956
7697 Highland Lane
Fresno, CA 93706
3 Bear Hill St.
Panama City, FL 32404
66 Grove Circle
Norcross, GA 30092
615 West Fordham Ave.
Belmont, MA 02478
601 Country Club Ave.
Elkton, MD 21921
9887 E. Mountainview Lane
New Berlin, WI 53151
4 Bay Meadows Rd.
Hicksville, NY 11801
706 Madison Court
Buford, GA 30518
9035 Washington Drive
Jamaica Plain, MA 02130
81 Bank Lane
Kingston, NY 12401
849 Miller Road
Euless, TX 76039
130 Walnutwood St.
Hopkins, MN 55343
8372 Lyme St.
Klamath Falls, OR 97603
78 Kingston Dr.
Scarsdale, NY 10583
54 Cemetery Drive
Port Saint Lucie, FL 34952
24 N. Heritage Lane
Wayne, NJ 07470
8540 South Oakwood St.
Green Bay, WI 54302
90 Leeton Ridge Street
Deerfield, IL 60015
16 NE. Wilson Road
Lake Zurich, IL 60047
9786 Argyle Drive
Alexandria, VA 22304
105 Cardinal Ave.
Anoka, MN 55303
7566 Wagon Ave.
Southgate, MI 48195
7 Linden Ave.
Erie, PA 16506
327 Grand Rd.
New Bern, NC 28560
8270 Mill Ave.
Woodhaven, NY 11421
3 Southampton St.
Wappingers Falls, NY 12590
48 Green Road
East Elmhurst, NY 11369
7957 West Willow St.
Palm Harbor, FL 34683
832 Indian Summer St.
High Point, NC 27265
3 S. Joy Ridge Court
Clinton Township, MI 48035
7 Heather St.
Northbrook, IL 60062
7271 Cardinal Ave.
Orange, NJ 07050
8725 Westport Road
Douglasville, GA 30134`.split('\n');
const addresses = Array.from(
  { length: addressesRaw.length / 2 },
  (_, i) => addressesRaw[2 * i] + addressesRaw[2 * i + 1]
);
const emails = `gerlo@mac.com
bester@outlook.com
clkao@sbcglobal.net
arebenti@sbcglobal.net
trygstad@comcast.net
jemarch@msn.com
bescoto@live.com
qrczak@me.com
esokullu@gmail.com
eminence@yahoo.com
balchen@yahoo.ca
eminence@icloud.com
mddallara@sbcglobal.net
policies@icloud.com
arnold@outlook.com
mcast@yahoo.com
enintend@me.com
muzzy@outlook.com
samavati@yahoo.com
wildfire@msn.com
rnewman@verizon.net
ehood@msn.com
janusfury@live.com
akoblin@live.com
esasaki@optonline.net
oracle@aol.com
okroeger@yahoo.ca
pmint@mac.com
codex@aol.com
dogdude@sbcglobal.net
hager@aol.com
floxy@gmail.com
hahsler@aol.com
kevinm@sbcglobal.net
pplinux@outlook.com
spadkins@hotmail.com
jshirley@yahoo.ca
terjesa@optonline.net
henkp@att.net
jsmith@comcast.net
aprakash@outlook.com
cgarcia@gmail.com
matsn@optonline.net
sassen@sbcglobal.net
chaffar@msn.com
johndo@msn.com
torgox@me.com
grothoff@comcast.net
sisyphus@yahoo.com
jmmuller@mac.com
jshearer@optonline.net
srour@att.net
lishoy@verizon.net
oracle@yahoo.com
bastian@outlook.com
rnewman@att.net
evans@verizon.net
granboul@live.com
jpflip@sbcglobal.net
hahiss@aol.com
overbom@sbcglobal.net
milton@sbcglobal.net
mddallara@sbcglobal.net
karasik@gmail.com
bigmauler@live.com
skippy@me.com
trieuvan@gmail.com
fudrucker@live.com
bader@verizon.net
rddesign@optonline.net
sonnen@live.com
crobles@msn.com
dkrishna@gmail.com
rjones@aol.com
mfleming@msn.com
notaprguy@yahoo.com
report@verizon.net
harpes@msn.com
sakusha@verizon.net
ateniese@icloud.com
monopole@icloud.com
danzigism@me.com
cameron@verizon.net
mwandel@optonline.net
bryam@yahoo.com
jemarch@att.net
quantaman@comcast.net
froodian@live.com
tlinden@hotmail.com
jdray@yahoo.ca
kmself@gmail.com
luvirini@gmail.com
mugwump@aol.com
subir@gmail.com
fraser@yahoo.ca
muzzy@sbcglobal.net
fukuchi@msn.com
jugalator@yahoo.ca
nachbaur@me.com
isotopian@gmail.com
shang@yahoo.ca
hikoza@live.com
bsikdar@yahoo.ca
claesjac@sbcglobal.net
attwood@icloud.com
fbriere@mac.com
jfmulder@yahoo.com
fatelk@comcast.net
lydia@verizon.net
jacks@sbcglobal.net
evans@comcast.net
jmgomez@yahoo.ca
alias@me.com
gavollink@outlook.com
chlim@msn.com
yxing@att.net
seebs@msn.com
mastinfo@aol.com
bonmots@me.com
isotopian@msn.com
boein@hotmail.com
pkilab@me.com
carcus@yahoo.ca
grinder@mac.com
kevinm@outlook.com
gumpish@msn.com
graham@live.com
sherzodr@aol.com
adhere@yahoo.com
elmer@yahoo.com
mgemmons@att.net
demmel@outlook.com
cgcra@optonline.net
parkes@live.com
tarreau@comcast.net
daveewart@sbcglobal.net
alias@att.net
dodong@yahoo.com
mwandel@comcast.net
roesch@verizon.net
agapow@gmail.com
lipeng@gmail.com
parkes@gmail.com
crobles@live.com
frostman@optonline.net
scato@icloud.com
noneme@att.net
geeber@aol.com
magusnet@me.com
adamk@me.com`.split('\n');
const descriptions = [
  "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.",
  'A pessimist is a person who has had to listen to too many optimists.',
  'Better to remain silent and be thought a fool than to speak out and remove all doubt.',
  'If I were two-faced, would I be wearing this one?',
  'The best thing about the future is that it comes one day at a time.',
  "An alcoholic is someone you don't like who drinks as much as you do.",
  'Light travels faster than sound. This is why some people appear bright until you hear them speak.',
  'The difference between stupidity and genius is that genius has its limits.',
  "War is God's way of teaching Americans geography.",
  'If you want your children to listen, try talking softly to someone else.',
  "I don't believe in astrology; I'm a Sagittarius and we're skeptical.",
  "A bank is a place that will lend you money if you can prove that you don't need it.",
  'My favorite machine at the gym is the vending machine.',
  'I always arrive late at the office, but I make up for it by leaving early.',
  "Don't worry about the world coming to an end today. It is already tomorrow in Australia.",
  'A day without laughter is a day wasted.',
  'Political correctness is tyranny with manners.',
  'If you think you are too small to make a difference, try sleeping with a mosquito.',
  'Remember, today is the tomorrow you worried about yesterday.',
  "Education is learning what you didn't even know you didn't know.",
  'Everyone with telekinetic powers, raise my hand.',
  'All the things I really like to do are either immoral, illegal or fattening.',
  'Never go to a doctor whose office plants have died.',
  'Marriage is the only war in which you sleep with the enemy.',
  'The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.',
  "Whoever said money can't buy happiness didn't know where to shop.",
  'All men are equal before fish.',
  'People who think they know everything are a great annoyance to those of us who do.',
  'My pessimism extends to the point of even suspecting the sincerity of other pessimists.',
  'Life is hard. After all, it kills you.',
  'Originality is the fine art of remembering what you hear but forgetting where you heard it.',
  "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
  'I am only human, although I regret it.',
  "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
  'What the world needs is more geniuses with humility; there are so few of us left.',
  "When a man opens a car door for his wife, it's either a new car or a new wife.",
  'I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives.',
  'I know that there are people who do not love their fellow man, and I hate people like that!',
  'A rich man is nothing but a poor man with money.',
  'Insanity is hereditary; you get it from your children.',
  'He knows nothing; he thinks he knows everything – that clearly points to a political career.',
  "Everything is funny, as long as it's happening to somebody else.",
  'I had plastic surgery last week – I cut up my credit cards.',
  'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.',
  'The average dog is a nicer person than the average person.',
  'Have you noticed that all the people in favor of birth control are already born?',
  "As a child my family's menu consisted of two choices: take it or leave it.",
  "It is a scientific fact that your body will not absorb cholesterol if you take it from another person's plate.",
  'Everyone has a purpose in life. Perhaps yours is watching television.',
  "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
  "can't understand why a person will take a year to write a novel when he can easily buy one for a few dollars.",
  'The first time I sang in the church choir; two hundred people changed their religion.',
  'Happiness is having a large, loving, caring, close-knit family in another city.',
  'Happiness is a dry martini and a good woman… or a bad woman.',
  'When I was a boy the Dead Sea was only sick.',
  'Have you ever noticed that anybody driving faster than you is a maniac, and anyone going slower than you is a moron?',
  "I was thinking about how people seem to read the Bible a whole lot more as they get older; then it dawned on me – they're cramming for their final exam.",
  'There is no such thing as fun for the whole family.',
  "According to a new survey, 90% of men say their lover is also their best friend. Which is really kind of disturbing when you consider man's best friend is his dog.",
  "It's amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.",
  'Money is not the most important thing in the world. Love is. Fortunately, I love money.',
  'If life was fair, Elvis would be alive and all the impersonators would be dead.',
  'Everything that used to be a sin is now a disease.',
  'Women cannot complain about men anymore until they start getting better taste in them.',
  'If you think you have it tough, read history books.',
  'This is the worst thing to happen to beaches since the Speedo.',
  "A study in the Washington Post says that women have better verbal skills than men. I just want to say to the authors of that study: ‘Duh.'",
  "The only bathroom law I'm interested in is one that bans loud sighing.",
  'I always wanted to be somebody, but now I realize I should have been more specific.',
  'The road to success is always under construction.',
  'God did not intend religion to be an exercise club.',
  'If love is the answer, could you please rephrase the question?',
  'Every time something pops in my head, I think twice about it and I do it anyway.',
  'If someone else is paying for it, food just tastes a lot better.',
  'The word abbreviation sure is long for what it means.',
  "Anyone can be confident with a full head of hair. But a confident bald man – there's your diamond in the rough.",
  "If I wasn't a golfer, I would still be miserable – but not as miserable.",
  "I'm one of the few people in Hollywood who actually had a good childhood.",
  'Confidence is 10% work and 90% delusion.',
  'Talking about music is like dancing about architecture.',
  'My best birth control now is just to leave the lights on.',
  "Don't keep a man guessing too long – he's sure to find the answer somewhere else.",
  "I'm not for everyone. I'm barely for me.",
  'Cleaning up with children around is like shoveling during a blizzard.',
  "Son, if you really want something in this life, you have to work for it. Now quiet! They're about to announce the lottery numbers.",
  'A day without sunshine is like, you know, night.',
  'The Internet is just a world passing around notes in a classroom.',
  'Fatherhood is great because you can ruin someone from scratch.',
  'You have to remember one thing about the will of the people: it wasn;t that long ago we were swept away by the Macarena.',
  'My theory is that all of Scottish cuisine is based on a dare.',
  'If evolution really works, how come mothers only have two hands?',
  'My doctor told me that jogging could add years to my life. I think he was right. I feel ten years older already.',
  "I want my children to have all the things I couldn't afford. Then I want to move in with them.",
  'Health nuts are going to feel stupid someday, lying in hospitals dying of nothing.',
  "When you're in love it's the most glorious two and a half days of your life.",
  'Lead me not into temptation; I can find the way myself.',
  'When I eventually met Mr. Right I had no idea that his first name was Always.',
  'If you want to look thin: hang out with fat people.',
  "I don't want to achieve immortality through my work. I want to achieve it through not dying.",
  'Marriage is like mushrooms: we notice too late if they are good or bad.',
  'The best way to teach your kids about taxes is by eating 30 percent of their ice cream.',
  'Having a smoking section in a restaurant is like having a peeing section in a pool.',
  'Before you marry a person, you should at least make them use a computer with a slow internet connection to find out who they really are.',
  'Different taste in jokes is a great strain on the affections.',
  'Sports are the reason I am out of shape. I watch them all on TV.',
  'If your parents never had children, chances are… neither will you.',
  'The guy who invented the first wheel was an idiot. The guy who invented the other three, he was a genius.',
  "The Supreme Court has ruled that they cannot have a nativity scene in Washington, D.C. This wasn't for any religious reasons. They couldn't find three wise men and a virgin.",
  'Love conquers all things except poverty and toothache.',
  "A bargain is something you don't need at a price you can't resist.",
  "It's not the size of the dog in the fight, it's the size of the dog's owner – and the distance you are from your car.",
  'The worst time to have a heart attack is during a game of charades.',
  'I live about four muggings from Central Park.',
  'The secret of a happy marriage remains a secret.',
  'I take my wife everywhere, but she keeps finding her way back.',
  'I did not climb to the top of the food chain to eat carrots.',
  "DeBeers should change it's motto to ‘Diamonds – that'll shut her up… for a minute!'",
  "I wouldn't camp out for five days if was… camping.",
  'Trouble knocked at the door, but, hearing laughter, hurried away.',
  "Inside me there's a thin person struggling to get out, but I can usually sedate him with four or five cupcakes.",
  'All right everyone, line up alphabetically according to your height.',
  "When I was a boy I was told that anybody could become President. I'm beginning to believe it.",
  'Never under any circumstances take a sleeping pill and a laxative on the same night.',
  'I used to jog but the ice cubes kept falling out of my glass.',
  'There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.There is another theory which states that this has already happened.',
  "If you think nobody cares if you're alive, try missing a couple of car payments.",
  "A woman is like a tea bag – you can't tell how strong she is until you put her in hot water.",
  'A computer once beat me at chess, but it was no match for me at kick boxing.',
  "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.",
  "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
  'If you try to fail, and succeed, which have you done?',
  'To those of you who received honors, awards and distinctions, I say well done. And to the C students, I say you, too, can be president of the United States.',
  "Before you judge a man, walk a mile in his shoes. After that who cares?… He's a mile away and you've got his shoes!",
  "Here's to our wives and girlfriends…may they never meet!",
  'I was married by a judge. I should have asked for a jury.',
  'The two most common elements in the universe are hydrogen and stupidity.',
  'Life begins at 40 – but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.',
  "I've got all the money I'll ever need, if I die by four o'clock.",
  "Sickos don't scare me. At least they're committed.",
  "All you need is love. But a little chocolate now and then doesn't hurt.",
  'Friends are people who know you really well and like you anyway.',
  "Here's something to think about: How come you never see a headline like ‘Psychic Wins Lottery'?",
  'Women are wiser than men because they know less and understand more.',
  'Facebook just sounds like a drag, in my day seeing pictures of peoples vacations was considered a punishment.',
  'They say marriages are made in Heaven. But so is thunder and lightning.',
  'The greatest thief this world has ever produced is procrastination, and he is still at large.',
  'The safe way to double your money is to fold it over once and put it in your pocket.',
  'True terror is to wake up one morning and discover that your high school class is running the country.',
  'Clothes make the man. Naked people have little or no influence on society.',
  'Never put off till tomorrow what you can do the day after tomorrow.',
];

export const getFakeContacts = () => {
  const contacts = [];
  for (let i = 0; i < 150; i++) {
    contacts.push({
      name: names[i],
      phone: phones[i],
      addr: addresses[i],
      email: emails[i],
      desc: descriptions[i],
    });
  }
  return contacts;
};
