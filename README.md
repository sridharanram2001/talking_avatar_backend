# Talking Avatar backend

Please note that this repository is not the original one; the original repository, along with license, can be found at [https://github.com/bornfree/talking_avatar_backend].

The text to speech and blendShapes converter for https://github.com/bornfree/talking_avatar.
Uses the [Azure APIs](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme) to get stuff done.

This is a simple ExpressJS app.

### Get keys from Azure and create a `.env` in the root directory with
```
AZURE_KEY=
AZURE_REGION=
```


### To run
```
$ npm install
$ npm start
```

