import { ethers } from "ethers";
import { getAddresses } from "../../constants";
import { SafuuContract, LpReserveContract, Erc20Contract } from "../../abi";
import { setAll } from "../../helpers";
import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonRpcProvider } from "@ethersproject/providers";
import { getMarketPrice, getTokenPrice } from "../../helpers";
import { RootState } from "../store";
import { getLastRebasedTime } from "../../helpers";

interface ILoadAppDetails {
    networkID: number;
    provider: JsonRpcProvider;
}

export const loadAppDetails = createAsyncThunk(
    "app/loadAppDetails",
    //@ts-ignore
    async ({ networkID, provider }: ILoadAppDetails) => {
        return {
            totalSupply: 0,
            marketCap: 0,
            currentBlock: 0,
            dailyRate: 0,
            circSupply: 0,
            fiveDayRate: 0,
            marketPrice: 0,
            currentBlockTime: 0,
            oneDayRate: 0,
            lastRebasedTime: 0,
            backedLiquidity: 0,
            bnbLiquidityValue: 0,
            sifValue: 0,
            firepitBalance: 0,
            treasuryValue: 0,
            currentApy: 0,
        };
    },
);

const initialState = {
    loading: true,
};

export interface IAppSlice {
    loading: boolean;
    networkID: number;
    totalSupply: number;
    marketCap: number;
    currentBlock: number;
    circSupply: number;
    oneDayRate: number;
    fiveDayRate: number;
    dailyRate: number;
    currentBlockTime: number;
    lastRebasedTime: number;
    treasuryValue: number;
    sifValue: number;
    firepitBalance: number;
    bnbLiquidityValue: number;
    backedLiquidity: string;
    marketPrice: number;
    currentApy: number;
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        fetchAppSuccess(state, action) {
            setAll(state, action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadAppDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loadAppDetails.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(loadAppDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            });
    },
});

const baseInfo = (state: RootState) => state.app;

export default appSlice.reducer;

export const { fetchAppSuccess } = appSlice.actions;

export const getAppState = createSelector(baseInfo, app => app);
