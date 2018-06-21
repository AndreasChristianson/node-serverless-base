#!/bin/bash
docker run --rm -v $(pwd)/test/unit:/test/unit -v $(pwd)/src:/src  mocha-tests
