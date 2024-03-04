import { Container, useMediaQuery, Grid } from "@material-ui/core";
import { Box, Paper, Typography, Zoom } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./account.scss";
import { useSelector } from "react-redux";
import { IReduxState } from "../../store/slices/state.interface";
import { IAccountSlice } from "src/store/slices/account-slice";
import { IAppSlice } from "src/store/slices/app-slice";
import { trim } from "../../helpers";
import { useCountdown } from "../../helpers";

const Account = () => {
    const isSmallScreen = useMediaQuery("(max-width: 650px)");
    const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const account = useSelector<IReduxState, IAccountSlice>(state => state.account);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);
    const rebaseTime = useCountdown();
    return (
        <div id="account-view" className={`account-view ${isSmallScreen && "smaller"} ${isVerySmallScreen && "very-small"}`}>
            <Container>
                <Zoom in>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                            <div className="input-box">
                                <p>
                                    Admin Wallet 1:
                                    <span></span>
                                </p>
                                <div className="input-section">
                                    <input type="text" placeholder="ex: 0x9c.....0d" name="from" autoComplete="off" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                            <div className="input-box">
                                <p>
                                    Admin Wallet 2:
                                    <span></span>
                                </p>
                                <div className="input-section">
                                    <input type="text" placeholder="ex: ex: 0x9c.....0d" name="from" autoComplete="off" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                            <div className="input-box">
                                <p>
                                    Admin Wallet 3:
                                    <span></span>
                                </p>
                                <div className="input-section">
                                    <input type="text" placeholder="ex: ex: 0x9c.....0d" name="from" autoComplete="off" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                            <div className="input-box">
                                <p>
                                    Admin Wallet 4:
                                    <span></span>
                                </p>
                                <div className="input-section">
                                    <input type="text" placeholder="ex: ex: 0x9c.....0d" name="from" autoComplete="off" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                            <div className="save-button">Save</div>
                        </Grid>
                    </Grid>
                </Zoom>
                <Zoom in>
                    <Paper className="account-card"></Paper>
                </Zoom>
            </Container>
        </div>
    );
};

export default Account;
