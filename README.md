# A Basic IPFS Microservice

![Microservice](https://img.shields.io/badge/microservice-ready-brightgreen.svg?style=for-the-badge)
[![Build status](https://img.shields.io/travis/com/microservices/node/master.svg?style=for-the-badge)](https://travis-ci.com/microservices/node)

A basic OMG service implemented using js-ipfs.

Usage
-----

```coffee
# Storyscript
data = TonyRice/ipfs cat path: 'QmSB457KugLfZpUeb4X5E3jB4fevxzAqN8H1HrmVFALfAw'
```

Test
----

```sh
> omg run cat -a path=QmSB457KugLfZpUeb4X5E3jB4fevxzAqN8H1HrmVFALfAw
ℹ Building Docker image
…
✔ Built Docker image with name: omg/l2hvbwuvc2vil2fzew5jes9ydwj5
✔ Started Docker container: 1c8a91688261
✔ Health check passed
✔ Ran action: `cat` with output: Copyright 2019 Microservices
                                 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
                                 
    http://www.apache.org/licenses/LICENSE-2.0
                                 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
✔ Stopped Docker container: 1c8a91688261
```
