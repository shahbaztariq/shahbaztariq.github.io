#!/bin/bash

rsync -av --delete ssst.local:/var/www/assets/ ./assets/
rsync -av --delete ssst.local:/var/www/node_modules/ ./node_modules/
rsync -av --delete ssst.local:/var/www/bower_components/ ./bower_components/
