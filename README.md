# Story Hackathon Submission

Welcome to our submission for the Story Super Agent Hackathon. This branch showcases our innovative approach to addressing a critical issue in the blockchain ecosystem.

## Problem Statement

Accessing data from archive nodes presents a formidable challenge for developers and organizations. The complexity and high costs associated with setting up these nodes are significant barriers. Once these nodes are operational, the process of querying and indexing data is not only time-consuming but also requires substantial computational resources. This creates a bottleneck for developers who need to access historical blockchain data efficiently.

## Solution

Our solution leverages Story's Intellectual Property (IP) framework to transform this challenge into an opportunity. By utilizing this framework, developers who have successfully navigated the complexities of archive nodes can distribute the valuable data they have acquired. This not only allows them to share their insights with a broader audience but also provides a mechanism to generate revenue from their efforts. 

This repository features an Eliza agent, a sophisticated AI model, that operates through Telegram as a client. This setup empowers individuals and organizations with historical blockchain data to create and manage intellectual property derived from data sourced from archive nodes. The Eliza agent acts as a bridge, facilitating seamless interaction and data exchange, thereby enhancing the accessibility and utility of blockchain data.

## Data Format

The following is the data format presented in the demo:
```
[{
  "contract": "0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78",
  "block": "14940249",
  "event_name": "IncreaseObservationCardinalityNext",
  "event_data": "{\"observationCardinalityNextNew\":10,\"observationCardinalityNextOld\":1}",
  "transaction_hash": "0x966fbc74d432f926c7706568ffa1da8a9938e68b98e73794b12ac0a8e1a0116f",
  "gas": "231236",
  "gas_price": "45000000000",
  "log_index": "11",
  "block_timestamp": "2022-06-10 19:52:56.000000 UTC"
}, {
  "contract": "0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78",
  "block": "14940255",
  "event_name": "IncreaseObservationCardinalityNext",
  "event_data": "{\"observationCardinalityNextNew\":256,\"observationCardinalityNextOld\":10}",
  "transaction_hash": "0xbd6f5058c6e9da985f74513b886772e85dd695ab9302d262e1d4f945dbe4ddbf",
  "gas": "5501642",
  "gas_price": "45000000000",
  "log_index": "34",
  "block_timestamp": "2022-06-10 19:54:13.000000 UTC"
}, {
  "contract": "0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78",
  "block": "14940323",
  "event_name": "Swap",
  "event_data": "{\"amount0\":-2.0577444691939626e+21,\"amount1\":9989012087,\"liquidity\":3198422525741968111,\"recipient\":\"0x000000000dFDe7deaF24138722987c9a6991e2D4\",\"sender\":\"0x000000000dFDe7deaF24138722987c9a6991e2D4\",\"sqrtPriceX96\":1.7442151462173616e+23,\"tick\":-260541}",
  "transaction_hash": "0xc9b9394617cb0924e048ce2a3b19b3f87704346385e27d2564f84376a77df071",
  "gas": "500000",
  "gas_price": "53633340769",
  "log_index": "152",
  "block_timestamp": "2022-06-10 20:11:39.000000 UTC"
}, {
  "contract": "0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78",
  "block": "14940322",
  "event_name": "IncreaseObservationCardinalityNext",
  "event_data": "{\"observationCardinalityNextNew\":1440,\"observationCardinalityNextOld\":256}",
  "transaction_hash": "0xacece293eb9eebab7b1545816d9ff7dace806dc7d7d8b4ce7756f78d0c54a95c",
  "gas": "26360898",
  "gas_price": "45000000000",
  "log_index": "37",
  "block_timestamp": "2022-06-10 20:11:31.000000 UTC"
}]
```


