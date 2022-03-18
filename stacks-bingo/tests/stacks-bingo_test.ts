import {
  Clarinet,
  Tx,
  Chain,
  Account,
  types,
} from "https://deno.land/x/clarinet@v0.14.0/index.ts";
import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";

Clarinet.test({
  name: "[allow-contract-caller] Should throw an error if called by deployer",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let deployer = accounts.get("deployer")!;

    let block = chain.mineBlock([
      Tx.contractCall(
        "stacks-bingo",
        "allow-contract-caller",
        [],
        deployer.address
      ),
    ]);
    block.receipts[0].result.expectErr().expectUint(403);
  },
});

Clarinet.test({
  name: "[allow-contract-caller] Anyone other than the deployer can call the function",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let wallet_1 = accounts.get("wallet_1")!;

    let block = chain.mineBlock([
      Tx.contractCall(
        "stacks-bingo",
        "allow-contract-caller",
        [],
        wallet_1.address
      ),
    ]);
    block.receipts[0].result.expectOk().expectBool(true);
  },
});

//   Tx.contractCall(
//     "stacks-bingo",
//     // TODO public function to participate in the next cycle
//     "",
//     // TODO cycle id is required?
//     [types.uint(100)],
//     wallet_1.address
//   ),
