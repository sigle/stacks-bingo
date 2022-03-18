
# Step 1
stx -l call_contract_func ST000000000000000000002AMW42H pox allow-contract-caller 300 0 "7287ba251d44a4d3fd9276c88ce34c5c52a038955511cccaf77e61068649c17801"
Args:
- ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stacks-bingo
- none (empty)

# Step 2
## Calling this without step 1 will fail
stx -l call_contract_func ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM stacks-bingo delegate-stx 300 1 "7287ba251d44a4d3fd9276c88ce34c5c52a038955511cccaf77e61068649c17801"
Args:
- 800
- STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6

-------------------------   -------------------------

# Step 1
Go to the UI and press Do Stuff button