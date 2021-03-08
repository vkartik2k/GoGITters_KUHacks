# IOTA - Intelligent Online Teaching Assistant

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

