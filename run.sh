#!/bin/bash

http-server &
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts