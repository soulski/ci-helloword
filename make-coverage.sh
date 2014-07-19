#!/bin/bash

# make unit
mocha --reporter XUnit > ./coverage/xunit.xml

# make coverage
istanbul cover _mocha *.test.js
istanbul report cobertura