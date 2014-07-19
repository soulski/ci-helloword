#!/bin/bash

rm -r coverage
mkdir coverage

# make unit
mocha --reporter XUnit > ./coverage/xunit.xml

# make coverage
istanbul cover _mocha
istanbul report cobertura