import { useCallback } from "react";
import Header from "../components/Header";
import PageHeaderLegacy from "../components/PageHeaderLegacy";
import { useNavigate } from "react-router-dom";
import styles from "./OperatorDashboard.module.css";

const OperatorDashboard = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/operatorstart-innings");
  }, [navigate]);

  return (
    <div className={styles.operatorDashboard}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <Header />
      <div className={styles.sidebar}>
        <div className={styles.siderdefault}>
          <div className={styles.menulogo}>
            <div className={styles.logo}>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
              <div className={styles.antDesignPro}>Ant Design Pro</div>
            </div>
            <div className={styles.menu}>
              <div className={styles.inlineMenuItemtopLevelleg}>
                <div className={styles.innerWrapper}>
                  <div className={styles.titleWrapper}>
                    <div className={styles.iconWrapperWrapper}>
                      <img
                        className={styles.iconWrapper}
                        alt=""
                        src="/iconwrapper@2x.png"
                      />
                    </div>
                    <a className={styles.title}>Dashbaord</a>
                  </div>
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg1}>
                <div className={styles.innerWrapper1}>
                  <div className={styles.titleWrapper1}>
                    <img
                      className={styles.iconWrapper1}
                      alt=""
                      src="/iconwrapper-1@2x.png"
                    />
                    <div className={styles.div}>Bets</div>
                  </div>
                  <img
                    className={styles.rightSideIcon}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg2}>
                <div className={styles.innerWrapper2}>
                  <div className={styles.titleWrapper2}>
                    <img
                      className={styles.iconWrapper2}
                      alt=""
                      src="/iconwrapper-2@2x.png"
                    />
                    <div className={styles.title1}>Matches</div>
                  </div>
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg3}>
                <div className={styles.innerWrapper3}>
                  <div className={styles.titleWrapper3}>
                    <img
                      className={styles.iconWrapper3}
                      alt=""
                      src="/iconwrapper-3@2x.png"
                    />
                    <div className={styles.div1}>Users</div>
                  </div>
                  <img
                    className={styles.rightSideIcon1}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg4}>
                <div className={styles.innerWrapper4}>
                  <div className={styles.titleWrapper4}>
                    <img
                      className={styles.iconWrapper4}
                      alt=""
                      src="/iconwrapper-4@2x.png"
                    />
                    <div className={styles.div2}>Finance</div>
                  </div>
                  <img
                    className={styles.rightSideIcon2}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg5}>
                <div className={styles.innerWrapper5}>
                  <div className={styles.titleWrapper5}>
                    <img
                      className={styles.iconWrapper5}
                      alt=""
                      src="/iconwrapper-5@2x.png"
                    />
                    <div className={styles.div3}>Permissions</div>
                  </div>
                  <img
                    className={styles.rightSideIcon3}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg6}>
                <div className={styles.innerWrapper6}>
                  <div className={styles.titleWrapper6}>
                    <img
                      className={styles.iconWrapper6}
                      alt=""
                      src="/iconwrapper-6@2x.png"
                    />
                    <div className={styles.div4}>Settings</div>
                  </div>
                  <img
                    className={styles.rightSideIcon4}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg7}>
                <div className={styles.innerWrapper7}>
                  <div className={styles.titleWrapper7}>
                    <img
                      className={styles.iconWrapper7}
                      alt=""
                      src="/iconwrapper-7@2x.png"
                    />
                    <div className={styles.title2}>Reports</div>
                  </div>
                  <img
                    className={styles.rightSideIcon5}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg8}>
                <div className={styles.innerWrapper8}>
                  <div className={styles.titleWrapper8}>
                    <img
                      className={styles.iconWrapper8}
                      alt=""
                      src="/iconwrapper-7@2x.png"
                    />
                    <div className={styles.title3}>Graphic Editor</div>
                  </div>
                  <img
                    className={styles.rightSideIcon6}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
              <div className={styles.inlineMenuItemtopLevelleg9}>
                <div className={styles.innerWrapper9}>
                  <div className={styles.titleWrapper9}>
                    <img
                      className={styles.iconWrapper9}
                      alt=""
                      src="/iconwrapper-7@2x.png"
                    />
                    <div className={styles.title4}>Graphic Editor</div>
                  </div>
                  <img
                    className={styles.rightSideIcon7}
                    alt=""
                    src="/right-side-icon@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.siderTrigger}>
            <img
              className={styles.innerWrapperIcon}
              loading="lazy"
              alt=""
              src="/innerwrapper.svg"
            />
          </div>
        </div>
        <div className={styles.header}>
          <PageHeaderLegacy />
          <div className={styles.contentArea}>
            <div className={styles.matches}>
              <h2 className={styles.upcomingMatches}>Upcoming matches</h2>
              <div className={styles.dashboardContent}>
                <div className={styles.operatorDashboard1}>
                  <div className={styles.cardlegacy}>
                    <div className={styles.description}>
                      <div className={styles.matchTime}>
                        Starting in 23:00 minutes
                      </div>
                    </div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <img
                        className={styles.image11Icon}
                        alt=""
                        src="/image-11@2x.png"
                      />
                      <div className={styles.separator}>
                        <div className={styles.vs}>VS</div>
                      </div>
                      <img
                        className={styles.image12Icon}
                        alt=""
                        src="/image-12@2x.png"
                      />
                    </div>
                    <div className={styles.matchTitle}>
                      <div className={styles.texttext}>
                        <div className={styles.text}>India VS Pakistan</div>
                      </div>
                    </div>
                    <div className={styles.matchTitle1}>
                      <div className={styles.texttext1}>
                        <div className={styles.text1}>
                          T20 World cup, Group stage
                        </div>
                      </div>
                    </div>
                    <div className={styles.matchDate}>
                      <div className={styles.layoutblockshorizontal2}>
                        <div className={styles.texttext2}>
                          <div className={styles.text2}>
                            2nd June, Starts at 6:00 am
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.button}
                      onClick={onButtonContainerClick}
                    >
                      <div className={styles.iconWrapper10}>
                        <img
                          className={styles.wrapperIcon}
                          alt=""
                          src="/wrapper@2x.png"
                        />
                      </div>
                      <div className={styles.text3}>View</div>
                    </div>
                  </div>
                  <div className={styles.matchCardTwo}>
                    <div className={styles.cardlegacy1}>
                      <div className={styles.body}>
                        <div className={styles.matchSummary}>
                          <div className={styles.text4}>
                            Starting in 23:00 minutes
                          </div>
                        </div>
                        <div className={styles.rectangleGroup}>
                          <div className={styles.frameItem} />
                          <img
                            className={styles.image11Icon1}
                            alt=""
                            src="/image-11@2x.png"
                          />
                          <div className={styles.matchDivider}>
                            <div className={styles.vs1}>VS</div>
                          </div>
                          <img
                            className={styles.image12Icon1}
                            alt=""
                            src="/image-12@2x.png"
                          />
                        </div>
                        <div className={styles.cardName}>
                          <div className={styles.texttext3}>
                            <div className={styles.titleElements}>
                              India VS Pakistan
                            </div>
                          </div>
                        </div>
                        <div className={styles.cardName1}>
                          <div className={styles.texttext4}>
                            <div className={styles.text5}>
                              T20 World cup, Group stage
                            </div>
                          </div>
                        </div>
                        <div className={styles.matchSchedule}>
                          <div className={styles.layoutblockshorizontal21}>
                            <div className={styles.texttext5}>
                              <div className={styles.text6}>
                                2nd June, Starts at 6:00 am
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.button1}>
                          <div className={styles.iconWrapper11}>
                            <img
                              className={styles.wrapperIcon1}
                              alt=""
                              src="/wrapper@2x.png"
                            />
                          </div>
                          <div className={styles.text7}>View</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footer}>
                    <div className={styles.buttonsecondarycirclelarge}>
                      <img
                        className={styles.questionIcon}
                        loading="lazy"
                        alt=""
                        src="/question.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
