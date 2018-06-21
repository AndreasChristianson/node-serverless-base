#!/bin/bash
docker run --rm -v $(pwd)/test/acceptance:/test/acceptance mocha-tests
