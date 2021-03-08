# IOTA - Intelligent Online Teaching Assistant

IOTA stands for Intelligent Online Teaching Assistant, and as the name suggests, it is a teaching assistant built for online classes. Students attending online classes often find it boring due to low interactivity, which leads to less productivity. Iota.ai is a simple web-based classroom tool, powered by an AI algorithm that enables the teacher to ask automated AI-generated questions to the students randomly. This not only helps students to make class interactive but also makes it possible to measure the overall understanding and attentiveness of a class.

The questions asked are generated using a Natural Language Processing technique that takes the content (covered in class) as the input, and the question is asked from the students to gauge their attentiveness(whether they are present in the class) as well as understanding(whether they understood the concepts taught in the class). We also provide a feature to automatically take attendance using a Google Meet Bot which joins in the class as soon as the class is started.

Unlike Google Classroom, this is a classroom that is used during live-class supporting unique features like tracking attendance, attentiveness and understanding of each student!

## Tech Stack

<h2>🚀 Some Tools I Use</h2>
<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" alt="angular-js" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="vue" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="gulp" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" alt="java" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" alt=".NET" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="25" height="25" />
<img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" alt="python" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cucumber/cucumber-plain.svg" alt="cucumber" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain.svg" alt="heroku" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/travis/travis-plain.svg" alt="travis" width="25" height="25" />
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png" alt="aws" width="25" height="25" />
<img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="25" height="25" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" width="25" height="25" />
<img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="Kubernetes" width="25" height="25" />
</p>

## Main Features

1. Real-Time Classroom
2. Pop-up AI questions during live class
3. Attendance using AI Bot
4. ERP to track attendance, alertness and understanding

## Quick Access to Files

Dashboard - [HTML](NodeJS_Server/dashboard/index.html) [JS](NodeJS_Server/dashboard/index.js)


Index file for NodeJS_Server - [JS](NodeJS_Server/index.js)


Instruction to run Flask_server - [Instructions](Flask_Server/readme.md)


Index file for Flask_Server - [Python_File](Flask_Server/run_api.py)



## Instruction to setup

### Node Server

```console
iota@admin:~$ cd NodeJS_Server
iota@admin:~$ npm install
iota@admin:~$ node index.js
```

### Flask_Server

Steps to execute Flask_Server are provided [here](Flask_Server/readme.md)

Make sure you setup Virtual Enviroment before running the server named venv and install all dependencies for python code

```console
iota@admin:~$ source venv/bin/activate
iota@admin:~$ cd Flask_Server/
iota@admin:~$ cd Flask_Server/
iota@admin:~$ python3 run_api.py 
```
### Java - Stanford Lex Parser Server

Make sure you installed stanford package in lib directory present in Flask_Server/lib

#### Stanford Parser Requirements

1. Make sure java is installed on your system
2. Download and unzip [https://nlp.stanford.edu/software/lex-parser.shtml](https://nlp.stanford.edu/software/lex-parser.shtml)
3. Copy the content to lib folder

```console
iota@admin:~$ java -cp stanford-postagger.jar edu.stanford.nlp.tagger.maxent.MaxentTaggerServer -model models/english-left3words-distsim.tagger -port 9000
```


## Student Dashboard
![Screenshot](assets/s2.png)

## Teacher Dashboard
![Screenshot](assets/s3.png)

## iota.ai BOT
![Screenshot](assets/s4.png)



<h1 align="center">Awesome GitHub Profile README 
<a href="https://www.producthunt.com/posts/awesome-github-profiles?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-github-profiles" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=277987&theme=light" alt="Awesome GitHub Profiles - Best curated list of developers readme, updated every 15 min | Product Hunt" style="width: 200px; height: 44px;" width="200" height="44" /></a></h1>
<div align="center">
<img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome Badge"/>
<a href="https://arbeitnow.com/?utm_source=awesome-github-profile-readme"><img src="https://img.shields.io/static/v1?label=&labelColor=505050&message=arbeitnow&color=%230076D6&style=flat&logo=google-chrome&logoColor=%230076D6" alt="website"/></a>
<!-- <img src="http://hits.dwyl.com/abhisheknaiidu/awesome-github-profile-readme.svg" alt="Hits Badge"/> -->
<img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Star Badge"/>
<a href="https://discord.gg/XTW52Kt"><img src="https://img.shields.io/discord/733027681184251937.svg?style=flat&label=Join%20Community&color=7289DA" alt="Join Community Badge"/></a><br>

<i>A curated list of awesome Github Profile READMEs</i>

<a href="https://github.com/abhisheknaiidu/awesome-github-profile-readme/stargazers"><img src="https://img.shields.io/github/stars/abhisheknaiidu/awesome-github-profile-readme" alt="Stars Badge"/></a>
<a href="https://github.com/abhisheknaiidu/awesome-github-profile-readme/network/members"><img src="https://img.shields.io/github/forks/abhisheknaiidu/awesome-github-profile-readme" alt="Forks Badge"/></a>
<a href="https://github.com/abhisheknaiidu/awesome-github-profile-readme/pulls"><img src="https://img.shields.io/github/issues-pr/abhisheknaiidu/awesome-github-profile-readme" alt="Pull Requests Badge"/></a>
<a href="https://github.com/abhisheknaiidu/awesome-github-profile-readme/issues"><img src="https://img.shields.io/github/issues/abhisheknaiidu/awesome-github-profile-readme" alt="Issues Badge"/></a>
<a href="https://github.com/abhisheknaiidu/awesome-github-profile-readme/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/abhisheknaiidu/awesome-github-profile-readme?color=2b9348"></a>
<a href="https://github.com/abhisheknaiidu/awesome-github-profile-readme/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abhisheknaiidu/awesome-github-profile-readme?color=2b9348" alt="License Badge"/></a>

<img alt="Awesome GitHub Profile Readme" src="assets/agpr.gif"> </img>

<i>Loved the project? Please consider [donating](https://paypal.me/abhisheknaiidu) to help it improve!</i>

</div>

### Contents:
  - [Categories](#categories)
      - [Github Actions 🤖](#github-actions-)
      - [Game Mode 🚀](#game-mode-)
      - [Code Mode 👨🏽‍💻](#code-mode-)
      - [Dynamic Realtime 💫](#dynamic-realtime-)
      - [A Little Bit of Everything 😃](#a-little-bit-of-everything-)
      - [Descriptive 🗒](#descriptive-)
      - [Simple but Innovative Ones 🤗](#simple-but-innovative-ones-)
      - [Typing.. Mode 🎰](#typing-mode-)
      - [Anime 👾](#anime-)
      - [Minimalistic ✨](#minimalistic-)
      - [GIFS 👻](#gifs-)
      - [Just Images 🎭](#just-images-)
      - [Badges 🎫](#badges-)
      - [Fancy Fonts 🖋](#fancy-fonts-)
      - [Icons 🎯](#icons-)
      - [Retro 😎](#retro-)
  - [Tools](#tools)
  - [Articles](#articles)
  - [Video Tutorials](#tutorials)
  - [Contribute](#contribute)
  - [License](#license)


## Categories

#### Github Actions 🤖
- [Abhishek Naidu](https://github.com/abhisheknaiidu/abhisheknaiidu)
- [Thomas Guibert](https://github.com/thmsgbrt/thmsgbrt)
- [Brian Douglas](https://github.com/bdougie/bdougie)
- [Shawn Wang](https://github.com/sw-yx/sw-yx)
- [Simon Willison](https://github.com/simonw/simonw)
- [Mike Coutermarsh](https://github.com/mscoutermarsh/mscoutermarsh)
- [Michael Hoffmann (Mokkapps)](https://github.com/mokkapps/mokkapps)
- [Athul Cyriac Ajay](https://github.com/athul/athul)
- [Gautam Krishna R](https://github.com/gautamkrishnar/gautamkrishnar)
- [Roald Nefs](https://github.com/roaldnefs/roaldnefs)
- [Leo](https://github.com/mopig/mopig)
- [Dhruv Jain](https://github.com/maddhruv/maddhruv)
- [Erwin Lejeune](https://github.com/guilyx/guilyx)
- [Jessica Lim](https://github.com/JessicaLim8/JessicaLim8)
- [侑夕-Tw93](https://github.com/tw93/tw93)
- [liununu](https://github.com/liununu/liununu)
- [Filippo Rossi (qu4k)](https://github.com/qu4k/qu4k)
- [Moe Poi ~](https://github.com/moepoi/moepoi)
- [Elon Tang (blackcater)](https://github.com/blackcater/blackcater)
- [Stanley Lim (Spiderpig86)](https://github.com/Spiderpig86/Spiderpig86)
- [Akshit Garg (gargakshit)](https://github.com/gargakshit/gargakshit)
- [Yufan You](https://github.com/ouuan/ouuan)
- [Danny Koppenhagen](https://github.com/d-koppenhagen/d-koppenhagen)
- [Vidya Bhandary](https://github.com/vidyabhandary/vidyabhandary)
- [Rao Hai](https://github.com/RaoHai/RaoHai)
- [Jatin Rao](https://github.com/jatin2003/jatin2003)
- [teoxoy](https://github.com/teoxoy/teoxoy)
- [Aral Roca](https://github.com/aralroca/aralroca)
- [codeSTACKr](https://github.com/codestackr/codestackr)
- [itgoyo](https://github.com/itgoyo/itgoyo)
- [lifeparticle](https://github.com/lifeparticle/lifeparticle)

#### Game Mode 🚀
- [Tim Burgan](https://github.com/timburgan/timburgan)
- [Ben Sampica](https://github.com/benjaminsampica/benjaminsampica)
- [Kavish Hukmani](https://github.com/DoubleGremlin181/DoubleGremlin181)
- [Jonathan Gin](https://github.com/JonathanGin52/JonathanGin52)
- [Ross Williams](https://github.com/rossjrw/rossjrw)
- [kylepls](https://github.com/kylepls/kylepls)
- [Aaron Liu](https://github.com/HFO4/HFO4)
- [marcizhu](https://github.com/marcizhu/marcizhu)

#### Code Mode 👨🏽‍💻
- [Thaiane Braga](https://github.com/Thaiane/Thaiane)
- [Ash Baker](https://github.com/ashbakernz/ashbakernz)
- [Anmol Singh](https://github.com/anmol098/anmol098)
- [Kiho](https://github.com/monkindey/monkindey)
- [Marton](https://github.com/martonlederer/martonlederer)
- [Redowan Delowar](https://github.com/rednafi/rednafi)
- [Zhenye Na](https://github.com/Zhenye-Na/Zhenye-Na)

#### Dynamic Realtime 💫
- [Kirill Feschenko](https://github.com/xcaq/xcaq)
- [Anurag Hazra](https://github.com/anuraghazra/anuraghazra)
- [Hemant Joshi](https://github.com/8bithemant/8bithemant)
- [Kittinan](https://github.com/kittinan/kittinan)
- [Andrew Novac](https://github.com/novatorem/novatorem)
- [Johnny Villegas](https://github.com/C9-LinkRs/C9-LinkRs)
- [Andrew Young](https://github.com/andyruwruw/andyruwruw)
- [Rashmi Jadhav](https://github.com/rusty-sj/rusty-sj)
- [andyruwruw](https://github.com/andyruwruw/andyruwruw)
- [Jacob Colvin](https://github.com/MacroPower/MacroPower)
- [Osman Durdağ](https://github.com/zumrudu-anka/zumrudu-anka)
- [iampavangandhi](https://github.com/iampavangandhi/iampavangandhi)
- [Dani Akash](https://github.com/daniakash/daniakash)
- [Rahul Jha](https://github.com/rahul-jha98/rahul-jha98)

#### A Little Bit of Everything 😃
- [Raymond Li](https://github.com/Raymo111/Raymo111)
- [Martin Heinz](https://github.com/MartinHeinz/MartinHeinz)
- [Adam Alston](https://github.com/adamalston/adamalston)
- [Rafnix Guzmán](https://github.com/rafnixg/rafnixg)
- [Aditya Pal](https://github.com/sciencepal/sciencepal)
- [Hedy Li](https://github.com/hedythedev/hedythedev)
- [Xunzhuo](https://github.com/xunzhuo/xunzhuo)
- [Khaleel Gibran](https://github.com/khalby786/khalby786)
- [Apoorv Tyagi](https://github.com/apoorvtyagi/apoorvtyagi)
- [CxyFreedom](https://github.com/cxyfreedom/cxyfreedom)
- [Miller Camilo Vega](https://github.com/minoveaz/minoveaz)
- [Abhishek Maira](https://github.com/AbhishekMaira10/AbhishekMaira10)
- [Clayton Hamilton](https://github.com/claytonjhamilton/claytonjhamilton)
- [Sy Rashid](https://github.com/syrashid/syrashid)
- [Quin Knight](https://github.com/cheesits456/cheesits456)
- [Jackyu-1999](https://github.com/Jackyu-1999/Jackyu-1999)

#### Descriptive 🗒
- [Filip Troníček](https://github.com/filiptronicek/filiptronicek)
- [Garima Singh](https://github.com/garimasingh128/garimasingh128)
- [lizheming](https://github.com/lizheming/lizheming)
- [Nguyễn Hoàng Dương](https://github.com/you-create/you-create)
- [Saksham Taneja](https://github.com/sakshamtaneja21/sakshamtaneja21)
- [TheAbbie](https://github.com/theabbie/theabbie)
- [Keshav Singh](https://github.com/keshavsingh4522/keshavsingh4522)
- [Vidur Satija](https://github.com/vidursatija/vidursatija)

#### Simple but Innovative Ones 🤗
- [Nate Moore](https://github.com/natemoo-re/natemoo-re)
- [Jhey Tompkins](https://github.com/jh3y/jh3y)
- [Waylon Walker](https://github.com/WaylonWalker/WaylonWalker)
- [Vansh Kapoor](https://github.com/vanshkapoor/vanshkapoor)
- [Harsh Kumar Khatri](https://github.com/harshkumarkhatri/harshkumarkhatri)
- [Stephen Ajulu](https://github.com/stephenajulu/stephenajulu)
- [Haany Ali](https://github.com/MarikIshtar007/MarikIshtar007)
- [Anurag Singh](https://github.com/ashleymavericks/ashleymavericks)
- [Rishit Dagli](https://github.com/Rishit-dagli/Rishit-dagli)
- [Vinit Shahdeo](https://github.com/vinitshahdeo/vinitshahdeo/)
- [Fatih Kadir Akın](https://github.com/f/f/)
- [Lucas Vazquez](https://github.com/lucasvazq/lucasvazq)
- [小弟调调™](https://github.com/jaywcjlove/jaywcjlove)
- [alx365](https://github.com/alx365/alx365)
- [Johnny Villegas](https://github.com/C9-LinkRs/C9-LinkRs)
- [一缕殇流化隐半边冰霜](https://github.com/halfrost/halfrost)
- [Srihari Kapu](https://github.com/sriharikapu/sriharikapu)
- [vaaski](https://github.com/vaaski/vaaski)
- [Arturs Smirnovs](https://github.com/arturssmirnovs/arturssmirnovs)
- [Yash Sahijwani](https://github.com/Terabyte17/Terabyte17)
- [Hemanth Kollipara](https://github.com/Defcon27/Defcon27)
- [Tushar Mittal](https://github.com/techytushar/techytushar)
- [Onimur](https://github.com/onimur/onimur)
- [Bruno Tacca](https://github.com/brunotacca/brunotacca)

#### Typing.. Mode 🎰
- [Mathieu Ledru](https://github.com/matyo91/matyo91)
- [CyrisXD](https://github.com/CyrisXD/CyrisXD)
- [Mpho Mphego](https://github.com/mmphego/mmphego)
- [Abhinav Sharma](https://github.com/ABSphreak/ABSphreak)
- [Mason Slover](https://github.com/MasonSlover/MasonSlover)
- [SuperSupeng](https://github.com/SuperSupeng/SuperSupeng)

#### Anime 👾
- [Ing](https://github.com/innng/innng)
- [edisonlee55](https://github.com/edisonlee55/edisonlee55)
- [Ashutosh](https://github.com/Xx-Ashutosh-xX/Xx-Ashutosh-xX)
- [Yukii](https://github.com/PrincessAkira/PrincessAkira)

#### Minimalistic ✨
- [Caneco](https://github.com/caneco/)
- [Gift Egwuenu](https://github.com/lauragift21/lauragift21)
- [Kelechi Precious Nwachukwu](https://github.com/PluckyPrecious/PluckyPrecious)
- [Ghazi Khan](https://github.com/gkhan205)
- [Pratik Kumar](https://github.com/pr2tik1/pr2tik1)
- [Dennis Hartrampf](https://github.com/DennisHartrampf/DennisHartrampf)
- [MrStanDu33](https://github.com/MrStanDu33/MrStanDu33)
- [Jayraj Roshan](https://github.com/jayrajroshan/jayrajroshan)
- [amxchang](https://github.com/amxchang/amxchang)
- [ridermansb](https://github.com/Ridermansb/Ridermansb)
- [Maximous Black](https://github.com/maximousblk/maximousblk)
- [Alex Martin](https://github.com/AlexMartinFR/AlexMartinFR)
- [ChungZH](https://github.com/ChungZH/ChungZH/)
- [Orhun](https://github.com/orhun/orhun)
- [Aveek Saha](https://github.com/Aveek-Saha/Aveek-Saha)
- [Federico Dondi](https://github.com/federico-dondi)
- [Zheeeng](https://github.com/Zheeeng/Zheeeng)
- [TallGuyJenks](https://github.com/tallguyjenks/tallguyjenks)
- [Stefanie Grunwald](https://github.com/moertel/moertel)

#### GIFS 👻
- [Pouya Saadeghi](https://github.com/saadeghi/saadeghi)
- [Ari](https://github.com/ari-hacks/ari-hacks)
- [Siv Ram Shastri](https://github.com/Prince-Shivaram/Prince-Shivaram)
- [Shanu Mishra](https://github.com/Shanu1515/Shanu1515)
- [Shubham Kumar](https://github.com/imskr/imskr)
- [Duncan](https://github.com/dephraiim/dephraiim)
- [Demartini](https://github.com/demartini/demartini)
- [Sindre Sorhus](https://github.com/sindresorhus/sindresorhus)
- [Pranjal Bhardwaj](https://github.com/Bhard27/Bhard27)
- [Okan Koçyiğit](https://github.com/okankocyigit/okankocyigit)
- [Raghav Khullar](https://github.com/RaghavK16/RaghavK16)
- [xrkffgg](https://github.com/xrkffgg/xrkffgg)
- [Kevin Cui](https://github.com/KevCui/KevCui)
- [Muskan Rani](https://github.com/muskanrani/muskanrani)
- [Rishav Anand](https://github.com/rishavanand/rishavanand)
- [KelviNosse](https://github.com/KelviNosse/KelviNosse)
- [nilfalse](https://github.com/nilfalse/nilfalse)
- [Shahriar Shafin](https://github.com/ShahriarShafin/ShahriarShafin)
- [Somnath Paul](https://github.com/SP-XD/SP-XD)
- [Ksenia Morozova](https://github.com/kmoroz/kmoroz)

#### Just Images 🎭
- [Zack Krida](https://github.com/zackkrida/zackkrida)
- [偏右](https://github.com/afc163/afc163)
- [thewhiteh4t](https://github.com/thewhiteh4t/thewhiteh4t)
- [Akash Rai](https://github.com/akasrai/akasrai)
- [Kaito Sugimoto](https://github.com/7ma7X/7ma7X)
- [Oussama Bouchikhi](https://github.com/oussamabouchikhi/oussamabouchikhi)
- [Daily Random Photo](https://github.com/dailyrandomphoto/dailyrandomphoto)

#### Badges 🎫
- [Anirudh Emmadi](https://github.com/aemmadi/aemmadi)
- [Brendon Smith](https://github.com/br3ndonland/br3ndonland)
- [Alwin Wang](https://github.com/alwinw/alwinw)
- [Moshfiq Rony](https://github.com/moshfiqrony/moshfiqrony)
- [Ileriayo Adebiyi](https://github.com/ileriayo/ileriayo)
- [Samujjwaal Dey](https://github.com/samujjwaal/samujjwaal)
- [Char-Al](https://github.com/char-al/char-al)
- [Oka](https://github.com/Coordinate-Cat/Coordinate-Cat)
- [Nikita Rusetskii](https://github.com/xtenzQ/xtenzQ)
- [Raphael Ebner](https://github.com/rafi0101/rafi0101)

#### Fancy Fonts 🖋
- [xiaoluoboding](https://github.com/xiaoluoboding/xiaoluoboding)

#### Icons 🎯
- [Yuan Tang](https://github.com/terrytangyuan/terrytangyuan)
- [Hussainweb](https://github.com/hussainweb/hussainweb)
- [Peter Han](https://github.com/peterthehan/peterthehan)
- [Thomas George Thomas](https://github.com/Thomas-George-T/Thomas-George-T)
- [Derek Nguyen](https://github.com/dereknguyen269/dereknguyen269)

#### Retro 😎
- [Livio Brunner](https://github.com/BrunnerLivio/BrunnerLivio)
- [Christian Petersen](https://github.com/fnky/fnky)

## Tools
- [Todoist Stats in Readme](https://github.com/abhisheknaiidu/todoist-readme) - Daily Todoist Stats on your Profile Readme
- [Visitor Badge](https://visitor-badge.glitch.me/#docs) - Count visitors for your README.md, Issues, PRs in GitHub
- [1990s style Visitor Counter](https://twitter.com/ryanlanciaux/status/1283755637126705152) - Add a 1990s style visitor counter with one line of markdown.
- [Vistor Count](https://pufler.dev/git-badges/) - Count visitors for README.md that can be used with shields.io
- [Shields Project](https://shields.io/) - Use Shields to create profile badges, compatible with Simple Icons
- [Github Readme Stats](https://github.com/anuraghazra/github-readme-stats) - Get dynamically generated GitHub stats on your readmes
- [Simple Icons](https://github.com/simple-icons/simple-icons#cdn-usage) -  SVG icons for popular brands for your README.md files
- [Laravel GitHub Profile Visit Counter](https://github.com/caneco/laravel-github-profile-view-counter) - Add on your Laravel project a quick-badge to count your profile visits.
- [Dev Metrics in Readme](https://github.com/athul/waka-readme) - [WakaTime](https://wakatime.com/) Weekly Metrics on your Profile Readme
- [Profile Activity Generator](https://github.com/omidnikrah/profile-activity-generator) - Generate custom profile activity for your profile README
- [Current UTC time](https://github.com/jojoee/jojoee) - Example code of server that can serve dynamic content on GitHub profile
- [Github Activity in README](https://github.com/jamesgeorge007/github-activity-readme) - Updates `README.md` with the recent GitHub activity of a user
- [Github Profile README Generator](https://github.com/rahuldkjain/github-profile-readme-generator) - This tool provides an easy way to create github profile readme with latest addons like `visitors count`, `github stats` etc.
- [Dynamic Profile Page On Github](https://github.com/umutphp/github-action-dynamic-profile-page) - Get dynamically generated list of your commits (of the repositories that the action is configured) on GitHub profile readme.
- [npm package downloads](https://github.com/maddhruv/github-readme-npm-downloads) - Show all of your npm packages and their total downloads
- [All Dev Stats in Readme](https://github.com/anmol098/waka-readme-stats) - Are you an early 🐤 or a night 🦉? When are you most productive during the day? What languages you code in? And other stuff... Let's check out in your readme!
- [Feedparser](https://pythonhosted.org/feedparser/) - Convenient processing of RSS files
- [Profile README Widgets](https://github.com/marketplace/actions/profile-readme) - Add simple widgets to your profile readme.
- [Spotify now playing card generator](https://github.com/kittinan/spotify-github-profile) - Generate your Spotify now playing card for your GitHub profile
- [Markdown Badges](https://github.com/Ileriayo/markdown-badges) - Add badges to your profile.
- [Latest Blog Posts and StackOverflow activity in readme](https://github.com/gautamkrishnar/blog-post-workflow) - Show your latest blog posts from any sources or StackOverflow activity on your GitHub profile/project readme automatically using the RSS feed using this Github Action
- [GitHub Readme LinkedIn](https://github.com/soroushchehresa/github-readme-linkedin) - Get dynamically generated images from your LinkedIn profile on your GitHub readmes
- [GitHub Readme Medium](https://github.com/omidnikrah/github-readme-medium) - Show your latest Medium article on your readmes!
- [GitHub Readme StackOverflow](https://github.com/omidnikrah/github-readme-stackoverflow) - Dynamically generated your StackOverflow profile status on your GitHub readmes!
- [StackOverflow Stats Badge](https://github.com/claytonjhamilton/stackoverflow-badge) - Display your stats with this Unique StackOverflow Badge!
- [Github Profile README Generator](https://github.com/arturssmirnovs/github-profile-readme-generator) - This project allows you to create nice and simple github profile readme files.
- [Profile Readme Stats](https://github.com/marketplace/actions/profile-readme-stats) - [Github Action] Showcase your github stats on your profile README.md
- [README Jokes](https://github.com/ABSphreak/readme-jokes) - Random dev jokes in your GitHub README.
- [GitHub Profile Trophy](https://github.com/ryo-ma/github-profile-trophy) - 🏆 Add dynamically generated GitHub Trophy on your readme
- [Github Readme Twitter](https://github.com/gazf/github-readme-twitter) - Show your latest tweet on your readmes.
- [Random Dev Memes](https://github.com/techytushar/random-memer) - Random dev memes to display on your GitHub README.
- [GitHub Readme Quotes](https://github.com/PiyushSuthar/github-readme-quotes) - Dev quotes on your GitHub Profile Readme.
- [GitHub Profilinator](https://github.com/rishavanand/github-profilinator) - This tool contains small GUI components that you can hook together to generate markdown for your perfect readme.
- [PageSpeed score](https://github.com/ankurparihar/readme-pagespeed-insights) - Generate website's PageSpeed score in animated svg form which can be used in GitHub README
- [Gitwar Profile Score](https://github.com/iampavangandhi/Gitwar) - Add your Github Profile Score in README.
- [Header Images for Github Profile READMEs](https://github.com/khalby786/REHeader) - Generate header images for your GitHub profile READMEs with custom content
- [Current Book Status from GoodReads](https://github.com/theFr1nge/goodreads-readme) - Add a card of the current book you are reading that automatically syncs with GoodReads to display your progress.

## Articles
- ["How To Create A GitHub Profile README"](https://www.aboutmonica.com/blog/how-to-create-a-github-profile-readme) - *Monica Powell*
- ["How to Stand Out on Github with Profile READMEs"](https://medium.com/better-programming/how-to-stand-out-on-github-with-profile-readmes-dfd2102a3490?source=friends_link&sk=61df9c4b63b329ad95528b8d7c00061f) - *Jessica Lim*
- ["What's on your GitHub Profile"](https://dev.to/waylonwalker/what-s-on-your-github-profile-40p3) - *Waylon Walker*
- ["3 Ways to Spice up your Github Profile README 🔥"](https://dev.to/jayehernandez/3-ways-to-spice-up-your-github-profile-readme-1276) - *Jaye Hernandez*
- ["Dynamically Generated Github Stats For Your Profile ReadMe"](https://dev.to/anuraghazra/dynamically-generated-github-stats-for-your-profile-readme-o4g) - *Anurag Hazra*
- ["How to create an awesome GIF for your GitHub Profile README"](https://dev.to/satvikchachra/how-to-add-an-awesome-readme-to-your-github-profile-361n) - *Satvik Chachra*
- ["Create a special repository in your GitHub Profile 🔨, supported and unsupported features"](https://torrocus.com/blog/special-github-repository/) - *Alex Malaszkiewicz*
- ["How to create a Github Profile README with Dynamic Github Stats"](https://codewithghazi.com/how-to-create-a-github-profile-readme-with-dynamic-github-stats/) - *Ghazi Khan*
- ["How I Built A Self-Updating README On My Github Profile"](https://www.mokkapps.de/blog/how-i-built-a-self-updating-readme-on-my-git-hub-profile/) - *Michael Hoffmann (Mokkapps)*
- ["Building a self-updating profile README for GitHub"](https://simonwillison.net/2020/Jul/10/self-updating-profile-readme/) - *Simon Willison*
- ["How to create an interactive README for your GitHub profile"](https://kavishhukmani.me/github-profile-interactive-readme-tutorial/) - *Kavish Hukmani*
- ["什么？Github 居然可以这么玩？"](https://zhuanlan.zhihu.com/p/161705999) - *Tw93*
- ["Getting started with Markdown Badges"](https://dev.to/ileriayo/mardown-badges-2og0) - *Ileriayo Adebiyi*
- ["Show your latest dev.to posts automatically on your GitHub profile readme"](https://dev.to/gautamkrishnar/show-your-latest-dev-to-posts-automatically-in-your-github-profile-readme-3nk8)  - *Gautam krishna R*
- ["How I Built A Self-Updating README by Webhooks and Netlify Functions"](https://github.com/RaoHai/RaoHai/blob/master/How-I-Built-A-Self-Updating-README-by-Webhooks-and-Netlify-Functions.md/) - *Rao Hai*
- ["Build a Stunning README For Your GitHub Profile"](https://towardsdatascience.com/build-a-stunning-readme-for-your-github-profile-9b80434fe5d7) - *Martin Heinz*
- ["How I added my Spotify statistics to my GitHub readme 📜"](https://dev.to/gargakshit/how-i-added-my-spotify-statistics-to-my-github-readme-4jdd) - *Akshit Garg*
- ["Static Readme Regeneration"](https://dev.to/aralroca/static-readme-regeneration-4pf2) - *Aral Roca*
- ["How to Create a Self-Updating README.md for Your GitHub Profile"](https://medium.com/@th.guibert/how-to-create-a-self-updating-readme-md-for-your-github-profile-f8b05744ca91) - *Thomas Guibert*

## Tutorials
- ["Create Impressive GitHub Portfolio"](https://www.youtube.com/watch?v=dkE4mVhwMB4) - *MTECHVIRAL*
- ["How To Create a Github Profile ReadMe"](https://www.youtube.com/watch?v=DOiGs2NiDbU) - *James Q Quick*
- ["How to create a GitHub profile README"](https://www.youtube.com/watch?v=vND_UY7xk24) - *Code With Confidence*
- ["How To Create A GitHub Profile README"](https://www.youtube.com/watch?v=Y1z7_GfEPiE) - *Program With Erik*
- ["Next Level GitHub Profile README"](https://youtu.be/ECuqb5Tv9qI) - *codeSTACKr*

## Contribute

Contributions are always welcome!
Please read the [contribution guidelines](contributing.md) first.

## Special Thanks 🙇
- [Zetao Zhuang](https://github.com/zzetao) for making the amazing site for this repo!

## License 

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Abhishek Naidu](https://abhisheknaidu.tech/) has waived all copyright and related or neighboring rights to this work.
