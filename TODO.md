# TODO for Pool Info Feature

- [x] Create a new branch `pool-info-feature`
- [x] Add a new read-only Clarity function `get-pool-info` in `contracts/amm.clar` to return detailed pool info including balances, liquidity, fee, and price ratio.
- [x] Create a new React component `PoolInfo` in `frontend/components/pool-info.tsx` to display pool information by calling the new Clarity function.
- [x] Update `frontend/app/page.tsx` to render the `PoolInfo` component for each pool alongside the existing `Swap` component.
- [ ] Test the new feature manually and with existing tests.
- [ ] Prepare a Loom video explaining the feature implementation and usage.
