import { useSelector } from "react-redux";
import { Grid, useMediaQuery, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import "./dashboard.scss";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";
import { IAppSlice } from "../../store/slices/app-slice";
import { useCountdown } from "../../helpers";

function Dashboard() {
    const is1280 = useMediaQuery("(max-width: 1280px)");
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);
    const rebaseTime = useCountdown();
    return (
        <div className="dashboard-view">
            <div className="dashboard-infos-wrap">
                <Zoom in={true}>
                    <div>
                        <div className="dashboard-content-wrapper">
                            <div className="input-box">
                                <p>
                                    Token Name:
                                    <span></span>
                                </p>
                                <div className="input-section">
                                    <input type="text" placeholder="ex: Lido DAO Token" name="from" autoComplete="off" />
                                </div>
                            </div>
                            <div className="input-box">
                                <p>
                                    Token Symbol:
                                    <span></span>
                                </p>
                                <div className="input-section">
                                    <input type="text" placeholder="ex: LDO" name="from" autoComplete="off" />
                                </div>
                            </div>
                            <div className="input-box">
                                <p>
                                    Total Supply:
                                    <span></span>
                                </p>
                                <div className="input-section">
                                    <input type="text" placeholder="ex: 1000000000" name="from" autoComplete="off" />
                                </div>
                            </div>
                            <div className="deploy-button">Deploy</div>
                        </div>
                        <div className="dashboard-content-wrapper" style={{ marginTop: "50px" }}></div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
}

export default Dashboard;
