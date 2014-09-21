#!/bin/bash

rsync -av ssst.local:/var/www/assets/ ./assets/
rsync -av ssst.local:/var/www/node_modules/ ./node_modules/
