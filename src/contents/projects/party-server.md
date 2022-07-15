---
title: Party server
skills: [
  Rust,
  Javascript,
  SQL,
  Warp,
  Tokio,
  Diesel,
  React,
  D3,
  Webpack,
]
date: 2021
---

- Rust-implemented server hosts a WebSocket REST API for realtime updates of party consumption data.
- Database managed by Diesel/R2D2 thread-pool, state streams controlled behind thread-safe mutex, web service hosted on asynchronous warp/hyper/tokio client.
- Web frontend implemented with React and D3.
