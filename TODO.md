# TODO for Pool Info Feature

- [x] Create a new branch `pool-info-feature`
- [x] Add a new read-only Clarity function `get-pool-info` in `contracts/amm.clar` to return detailed pool info including balances, liquidity, fee, and price ratio.
- [x] Create a new React component `PoolInfo` in `frontend/components/pool-info.tsx` to display pool information by calling the new Clarity function.
- [x] Update `frontend/app/page.tsx` to render the `PoolInfo` component for each pool alongside the existing `Swap` component.
- [x] Add a test case for the new Clarity function in `tests/amm.test.ts`.
- [x] Commit all changes to the branch.
- [ ] Prepare a Loom video explaining the feature implementation and usage.

## Loom Video Script

"Hello everyone! In this video, I'll walk you through the original feature I added to the Stacks AMM project for Lesson 3 of the LearnWeb3 course. The feature is called 'Pool Info' and it provides detailed statistics for each liquidity pool.

First, let me show you the project structure. This is a Stacks-based Automated Market Maker (AMM) with Clarity smart contracts, a Next.js frontend using stacks.js, and Clarinet for testing.

The feature I added integrates all three parts: Clarity, frontend, and testing.

Starting with the Clarity contract in contracts/amm.clar, I added a new read-only function called 'get-pool-info'. This function takes a pool ID and returns a tuple with:
- Balance of token 0
- Balance of token 1
- Total liquidity in the pool
- The fee percentage
- The current price ratio (balance-0 / balance-1) with 6 decimal precision

This gives users a complete view of the pool's state without needing to make multiple calls.

On the frontend, I created a new React component called PoolInfo in frontend/components/pool-info.tsx. This component uses the fetchCallReadOnlyFunction from @stacks/transactions to call the new Clarity function and displays the information in a clean UI.

I updated the main page in frontend/app/page.tsx to render the PoolInfo component for each pool, so users can see the details right below the swap interface.

For testing, I added a new test case in tests/amm.test.ts that verifies the get-pool-info function returns the correct data after creating a pool and adding liquidity.

All changes have been committed to a new branch called 'pool-info-feature'.

This feature demonstrates how to extend a DeFi protocol with new read-only functionality, integrate it seamlessly into the frontend, and ensure it's properly tested. It's original work that enhances user experience by providing transparency into pool statistics.

Thank you for watching!"
