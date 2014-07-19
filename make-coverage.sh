#!/bin/bash

cd test
istanbul cover _mocha *.test.js
istanbul report cobertura