#!/bin/bash

echo "Install Dependencies for Angular 2 and TypeScript."
npm install -g tsd@^0.6.0 && \
tsd install angular2 es6-promise rx rx-lite && \
npm install -g typescript@^1.5.0-beta && \
npm install -g http-server
