# Flask_Server

An additional server in Flask is created to:
1. Generate questions from the PPT provided inside the call
2. Request for attendance using Google Meet Bot

## Requirements

All requirements for the module are mentioned in requirement.txt file

It is preferred to create a virtual environment before installing the requirements

```console
iota@admin:~$ python -m venv c:\path\to\myenv
iota@admin:~$ pip3 install requirements.txt
```
Inorder to execute the Flask_Server, we have a dependency on Stanford Parser (JAVA Server)

### Stanford Parser Requirements

1. Make sure java is installed on your system
2. Download and unzip [https://nlp.stanford.edu/software/lex-parser.shtml](https://nlp.stanford.edu/software/lex-parser.shtml)
3. Copy the content to lib folder

```console
iota@admin:~$ java -cp stanford-postagger.jar edu.stanford.nlp.tagger.maxent.MaxentTaggerServer -model models/english-left3words-distsim.tagger -port 9000
```

## Starting Flask_Server

```console
iota@admin:~$ source venv/bin/activate
iota@admin:~$ cd Flask_Server/
iota@admin:~$ cd Flask_Server/
iota@admin:~$ python3 run_api.py 
```