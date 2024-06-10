import BallRunningHead from "../components/FrameComponent";
import SelectMarket from "../components/FrameComponent1";
import Button from "../components/Button";
import FrameComponent2 from "../components/FrameComponent21";
import ContainerForm from "../components/ContainerForm";
import styles from "./OperatorGiveResult.module.css";

const OperatorGiveResult = () => {
  return (
    <div className={styles.operatorgiveResult}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <header className={styles.content}>
        <div className={styles.contentInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-14764@2x.png"
          />
        </div>
        <div className={styles.toolbar}>
          <div className={styles.iconWrapper}>
            <img className={styles.searchIcon} alt="" src="/search.svg" />
          </div>
          <div className={styles.iconWrapper1}>
            <img
              className={styles.questioncircleIcon}
              loading="lazy"
              alt=""
              src="/questioncircle.svg"
            />
          </div>
          <div className={styles.badgeonIcon}>
            <div className={styles.icon}>
              <img
                className={styles.bellIcon}
                loading="lazy"
                alt=""
                src="/bell.svg"
              />
            </div>
            <div className={styles.badgeWrapper}>
              <div className={styles.offset}>
                <div className={styles.badgecount}>
                  <div className={styles.badge}>
                    <a className={styles.number}>11</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.layoutblockshorizontal2}>
            <div className={styles.iconWrapper2}>
              <img
                className={styles.settingIcon}
                loading="lazy"
                alt=""
                src="/setting.svg"
              />
            </div>
            <div className={styles.texttextWrapper}>
              <div className={styles.texttext}>
                <a className={styles.text}>Operator</a>
              </div>
            </div>
          </div>
          <div className={styles.iconWrapper3}>
            <img className={styles.languageIcon} alt="" src="/language.svg" />
          </div>
        </div>
      </header>
      <div className={styles.siderdefaultParent}>
        <div className={styles.siderdefault}>
          <div className={styles.logo}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <div className={styles.antDesignPro}>Ant Design Pro</div>
          </div>
          <div className={styles.menu}>
            <img
              className={styles.iconWrapper4}
              alt=""
              src="/iconwrapper@2x.png"
            />
            <div className={styles.title}>Dashbaord</div>
            <div className={styles.inlineMenuItemtopLevelleg}>
              <div className={styles.innerWrapper}>
                <div className={styles.titleWrapper}>
                  <img
                    className={styles.iconWrapper5}
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
            <div className={styles.inlineMenuItemtopLevelleg1}>
              <div className={styles.innerWrapper1}>
                <div className={styles.titleWrapper1}>
                  <img
                    className={styles.iconWrapper6}
                    alt=""
                    src="/iconwrapper-2@2x.png"
                  />
                  <div className={styles.title1}>Matches</div>
                </div>
              </div>
            </div>
            <div className={styles.inlineMenuItemtopLevelleg2}>
              <div className={styles.innerWrapper2}>
                <div className={styles.titleWrapper2}>
                  <img
                    className={styles.iconWrapper7}
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
            <div className={styles.inlineMenuItemtopLevelleg3}>
              <div className={styles.innerWrapper3}>
                <div className={styles.titleWrapper3}>
                  <img
                    className={styles.iconWrapper8}
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
            <div className={styles.inlineMenuItemtopLevelleg4}>
              <div className={styles.innerWrapper4}>
                <div className={styles.titleWrapper4}>
                  <img
                    className={styles.iconWrapper9}
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
            <div className={styles.inlineMenuItemtopLevelleg5}>
              <div className={styles.innerWrapper5}>
                <div className={styles.titleWrapper5}>
                  <img
                    className={styles.iconWrapper10}
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
            <div className={styles.inlineMenuItemtopLevelleg6}>
              <div className={styles.innerWrapper6}>
                <div className={styles.titleWrapper6}>
                  <img
                    className={styles.iconWrapper11}
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
            <div className={styles.inlineMenuItemtopLevelleg7}>
              <div className={styles.innerWrapper7}>
                <div className={styles.titleWrapper7}>
                  <img
                    className={styles.iconWrapper12}
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
            <div className={styles.inlineMenuItemtopLevelleg8}>
              <div className={styles.innerWrapper8}>
                <div className={styles.titleWrapper8}>
                  <img
                    className={styles.iconWrapper13}
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
        <div className={styles.contentHeader}>
          <div className={styles.headermatch}>
            <div className={styles.headermatchChild} />
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <div className={styles.image11Parent}>
                      <img
                        className={styles.image11Icon}
                        alt=""
                        src="/image-111@2x.png"
                      />
                      <div className={styles.vsWrapper}>
                        <div className={styles.vs}>VS</div>
                      </div>
                      <img
                        className={styles.image12Icon}
                        alt=""
                        src="/image-121@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.texttextParent}>
                    <div className={styles.texttext1}>
                      <div className={styles.text1}>India VS Pakistan</div>
                    </div>
                    <div className={styles.texttext2}>
                      <div className={styles.text2}>
                        T20 World cup, Group stage
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.texttextGroup}>
                    <div className={styles.texttext3}>
                      <div className={styles.text3}>Match time</div>
                    </div>
                    <div className={styles.textWrapper}>
                      <div className={styles.text4}>07:30 pm to 11:30 pm</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent1}>
                  <div className={styles.texttextContainer}>
                    <div className={styles.texttext4}>
                      <div className={styles.text5}>Match tiner</div>
                    </div>
                    <div className={styles.textContainer}>
                      <div className={styles.text6}>00:00 minutes</div>
                    </div>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <div className={styles.button}>
                      <div className={styles.a}>End 1st Inning</div>
                      <div className={styles.iconWrapper14}>
                        <img
                          className={styles.wrapperIcon}
                          alt=""
                          src="/wrapper2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BallRunningHead />
          <div className={styles.contentHeaderInner}>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <SelectMarket
                  allMarketsFilterWidth="unset"
                  allMarketsFilterAlignSelf="stretch"
                />
                <div className={styles.setvalues}>
                  <div className={styles.setvaluesChild} />
                  <div className={styles.setValuesOnActionsWrapper}>
                    <div className={styles.setValuesOn}>
                      Set values on actions
                    </div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameItem} />
                        <div className={styles.frameWrapper3}>
                          <div className={styles.run1Parent}>
                            <img
                              className={styles.run1Icon}
                              alt=""
                              src="/1run-1.svg"
                            />
                            <div className={styles.runWrapper}>
                              <div className={styles.run}>run</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumberWrapper}>
                        <div className={styles.inputNumber}>
                          <div className={styles.wrapper}>
                            <div className={styles.input}>
                              <div className={styles.input1}>3</div>
                              <div className={styles.cursorWrapper}>
                                <div className={styles.cursor} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.inputNumberHandler}>
                            <div className={styles.divider}>
                              <img
                                className={styles.lineIcon}
                                alt=""
                                src="/line1.svg"
                              />
                            </div>
                            <div className={styles.handlerWrap}>
                              <div className={styles.up}>
                                <img
                                  className={styles.upIcon}
                                  alt=""
                                  src="/up.svg"
                                />
                              </div>
                              <div className={styles.divider1}>
                                <img
                                  className={styles.lineIcon1}
                                  alt=""
                                  src="/line2.svg"
                                />
                              </div>
                              <div className={styles.down}>
                                <img
                                  className={styles.downIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameInner} />
                        <div className={styles.frameWrapper4}>
                          <div className={styles.run1Group}>
                            <img
                              className={styles.run1Icon1}
                              alt=""
                              src="/2run-1.svg"
                            />
                            <div className={styles.runsWrapper}>
                              <div className={styles.runs}>runs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber1}>
                        <div className={styles.input2}>
                          <div className={styles.input3}>3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent8}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.frameWrapper5}>
                          <div className={styles.fourParent}>
                            <img
                              className={styles.fourIcon}
                              alt=""
                              src="/four@2x.png"
                            />
                            <div className={styles.runsContainer}>
                              <div className={styles.runs1}>runs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber2}>
                        <div className={styles.input4}>
                          <div className={styles.input5}>3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.groupDiv}>
                        <div className={styles.frameChild1} />
                        <div className={styles.frameWrapper6}>
                          <div className={styles.sixParent}>
                            <img
                              className={styles.sixIcon}
                              alt=""
                              src="/six@2x.png"
                            />
                            <div className={styles.runsFrame}>
                              <div className={styles.runs2}>runs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber3}>
                        <div className={styles.input6}>
                          <div className={styles.input7}>3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent10}>
                    <div className={styles.frameParent11}>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild2} />
                        <div className={styles.frameWrapper7}>
                          <div className={styles.boldParent}>
                            <img
                              className={styles.boldIcon}
                              alt=""
                              src="/bold@2x.png"
                            />
                            <div className={styles.boldWrapper}>
                              <div className={styles.bold}>Bold</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber4}>
                        <div className={styles.input8}>
                          <div className={styles.input9}>3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent12}>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild3} />
                        <div className={styles.frameWrapper8}>
                          <div className={styles.runoutParent}>
                            <img
                              className={styles.runoutIcon}
                              alt=""
                              src="/runout@2x.png"
                            />
                            <div className={styles.runoutWrapper}>
                              <div className={styles.runout}>Runout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber5}>
                        <div className={styles.input10}>
                          <div className={styles.input11}>3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent13}>
                    <div className={styles.frameParent14}>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.frameChild4} />
                        <div className={styles.frameWrapper9}>
                          <div className={styles.catchoutParent}>
                            <img
                              className={styles.catchoutIcon}
                              alt=""
                              src="/catchout@2x.png"
                            />
                            <div className={styles.catchoutWrapper}>
                              <div className={styles.catchout}>Catchout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber6}>
                        <div className={styles.input12}>
                          <div className={styles.input13}>3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent15}>
                      <div className={styles.rectangleParent4}>
                        <div className={styles.frameChild5} />
                        <div className={styles.frameWrapper10}>
                          <div className={styles.stumppingParent}>
                            <img
                              className={styles.stumppingIcon}
                              alt=""
                              src="/stumpping@2x.png"
                            />
                            <div className={styles.stumpingWrapper}>
                              <div className={styles.stumping}>Stumping</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber7}>
                        <div className={styles.input14}>
                          <div className={styles.input15}>3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent16}>
                    <div className={styles.frameParent17}>
                      <div className={styles.frameParent18}>
                        <div className={styles.rectangleParent5}>
                          <div className={styles.frameChild6} />
                          <div className={styles.frameWrapper11}>
                            <div className={styles.wideballParent}>
                              <img
                                className={styles.wideballIcon}
                                alt=""
                                src="/wideball@2x.png"
                              />
                              <div className={styles.wideBallWrapper}>
                                <div className={styles.wideBall}>Wide ball</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputNumber8}>
                          <div className={styles.input16}>
                            <div className={styles.input17}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent19}>
                        <div className={styles.rectangleParent6}>
                          <div className={styles.frameChild7} />
                          <div className={styles.frameWrapper12}>
                            <div className={styles.noballParent}>
                              <img
                                className={styles.noballIcon}
                                alt=""
                                src="/noball@2x.png"
                              />
                              <div className={styles.noBallWrapper}>
                                <div className={styles.noBall}>No ball</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputNumber9}>
                          <div className={styles.input18}>
                            <div className={styles.input19}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent20}>
                      <div className={styles.frameParent21}>
                        <div className={styles.rectangleParent7}>
                          <div className={styles.frameChild8} />
                          <div className={styles.frameWrapper13}>
                            <div className={styles.lbwParent}>
                              <img
                                className={styles.lbwIcon}
                                alt=""
                                src="/lbw@2x.png"
                              />
                              <div className={styles.lbwWrapper}>
                                <div className={styles.lbw}>LBW</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputNumber10}>
                          <div className={styles.input20}>
                            <div className={styles.input21}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent22}>
                        <div className={styles.rectangleParent8}>
                          <div className={styles.frameChild9} />
                          <div className={styles.frameWrapper14}>
                            <div className={styles.dotballParent}>
                              <img
                                className={styles.dotballIcon}
                                alt=""
                                src="/dotball@2x.png"
                              />
                              <div className={styles.dotBallWrapper}>
                                <div className={styles.dotBall}>Dot ball</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputNumber11}>
                          <div className={styles.input22}>
                            <div className={styles.input23}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent23}>
                    <div className={styles.frameParent24}>
                      <div className={styles.frameParent25}>
                        <div className={styles.rectangleParent9}>
                          <div className={styles.frameChild10} />
                          <div className={styles.noball4runWrapper}>
                            <div className={styles.noball4run}>
                              <img
                                className={styles.noballIcon1}
                                alt=""
                                src="/noball@2x.png"
                              />
                              <img
                                className={styles.fourIcon1}
                                alt=""
                                src="/four@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputNumber12}>
                          <div className={styles.input24}>
                            <div className={styles.input25}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent26}>
                        <div className={styles.rectangleParent10}>
                          <div className={styles.frameChild11} />
                          <div className={styles.wideball4runsWrapper}>
                            <div className={styles.wideball4runs}>
                              <img
                                className={styles.wideIcon}
                                alt=""
                                src="/wideball@2x.png"
                              />
                              <img
                                className={styles.fourIcon2}
                                alt=""
                                src="/four@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputNumber13}>
                          <div className={styles.input26}>
                            <div className={styles.input27}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent27}>
                      <div className={styles.rectangleParent11}>
                        <div className={styles.frameChild12} />
                        <div className={styles.noball6runWrapper}>
                          <div className={styles.noball6run}>
                            <img
                              className={styles.noballIcon2}
                              alt=""
                              src="/noball@2x.png"
                            />
                            <img
                              className={styles.sixIcon1}
                              alt=""
                              src="/six@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumber14}>
                        <div className={styles.input28}>
                          <div className={styles.input29}>3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.livedataParent}>
                <div className={styles.livedata}>
                  <div className={styles.totalBets}>
                    <div className={styles.totalBetsChild} />
                    <div className={styles.parent}>
                      <b className={styles.b}>499</b>
                      <div className={styles.totalBets1}>Total bets</div>
                    </div>
                  </div>
                  <div className={styles.totalEarnings}>
                    <div className={styles.totalEarningsChild} />
                    <div className={styles.coinsParent}>
                      <b className={styles.coins}>50,000 coins</b>
                      <div className={styles.totalEarnings1}>
                        Total earnings
                      </div>
                    </div>
                  </div>
                  <div className={styles.totalLosses}>
                    <div className={styles.totalLossesChild} />
                    <div className={styles.coinsGroup}>
                      <b className={styles.coins1}>5000 coins</b>
                      <div className={styles.totalLosses1}>Total losses</div>
                    </div>
                  </div>
                </div>
                <div className={styles.livebetssubmit}>
                  <div className={styles.buttonsecondarycirclelargeParent}>
                    <div className={styles.buttonsecondarycirclelarge}>
                      <img
                        className={styles.questionIcon}
                        loading="lazy"
                        alt=""
                        src="/question.svg"
                      />
                    </div>
                    <div className={styles.frameChild13} />
                    <div className={styles.frameWrapper15}>
                      <div className={styles.frameParent28}>
                        <div className={styles.frameParent29}>
                          <div className={styles.actionsWrapper}>
                            <div className={styles.actions}>Actions</div>
                          </div>
                          <div className={styles.valuesWrapper}>
                            <div className={styles.values}>Values</div>
                          </div>
                          <div className={styles.bets}>#Bets</div>
                          <div className={styles.betAmount}>Bet amount</div>
                        </div>
                        <div className={styles.projectedLose}>
                          Projected lose
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent30}>
                      <div className={styles.frameParent31}>
                        <div className={styles.frameParent32}>
                          <div className={styles.frameWrapper16}>
                            <div className={styles.rectangleParent12}>
                              <div className={styles.frameChild14} />
                              <div className={styles.frameParent33}>
                                <div className={styles.four2Parent}>
                                  <img
                                    className={styles.four2Icon}
                                    alt=""
                                    src="/four@2x.png"
                                  />
                                  <div className={styles.ellipseParent}>
                                    <div className={styles.ellipseDiv} />
                                    <b className={styles.b1}>1</b>
                                  </div>
                                </div>
                                <div className={styles.runContainer}>
                                  <div className={styles.run1}>run</div>
                                </div>
                              </div>
                              <div className={styles.container}>
                                <div className={styles.div5}>0.40</div>
                              </div>
                              <div className={styles.frame}>
                                <div className={styles.div6}>05</div>
                              </div>
                              <div className={styles.wrapper1}>
                                <div className={styles.div7}>10,000</div>
                              </div>
                              <div className={styles.wrapper2}>
                                <div className={styles.div8}>4000</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rectangleParent13}>
                            <div className={styles.frameChild15} />
                            <div className={styles.frameParent34}>
                              <div className={styles.runsParent}>
                                <div className={styles.runs3}>runs</div>
                                <div className={styles.four2Group}>
                                  <img
                                    className={styles.four2Icon1}
                                    alt=""
                                    src="/four@2x.png"
                                  />
                                  <div className={styles.ellipseGroup}>
                                    <div className={styles.frameChild16} />
                                    <b className={styles.b2}>2</b>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.runsWrapper1}>
                                <div className={styles.runs4}>runs</div>
                              </div>
                            </div>
                            <div className={styles.wrapper3}>
                              <div className={styles.div9}>2.50</div>
                            </div>
                            <div className={styles.wrapper4}>
                              <div className={styles.div10}>05</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.div11}>10,000</div>
                            </div>
                            <div className={styles.wrapper6}>
                              <div className={styles.div12}>4000</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper17}>
                          <div className={styles.resultbuttonsParent}>
                            <div className={styles.resultbuttons}>
                              <Button />
                            </div>
                            <div className={styles.resultbuttons1}>
                              <div className={styles.button1}>
                                <div className={styles.iconWrapper15}>
                                  <img
                                    className={styles.wrapperIcon1}
                                    alt=""
                                    src="/wrapper4@2x.png"
                                  />
                                </div>
                                <div className={styles.text7}>Submit</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent35}>
                        <div className={styles.frameParent36}>
                          <div className={styles.rectangleParent14}>
                            <div className={styles.frameChild17} />
                            <div className={styles.four2Container}>
                              <img
                                className={styles.four2Icon2}
                                alt=""
                                src="/four@2x.png"
                              />
                              <div className={styles.runsWrapper2}>
                                <div className={styles.runs5}>runs</div>
                              </div>
                            </div>
                            <div className={styles.wrapper7}>
                              <div className={styles.div13}>6.00</div>
                            </div>
                            <div className={styles.wrapper8}>
                              <div className={styles.div14}>05</div>
                            </div>
                            <div className={styles.wrapper9}>
                              <div className={styles.div15}>10,000</div>
                            </div>
                            <div className={styles.wrapper10}>
                              <div className={styles.div16}>4000</div>
                            </div>
                          </div>
                          <div className={styles.rectangleParent15}>
                            <div className={styles.frameChild18} />
                            <div className={styles.six2Parent}>
                              <img
                                className={styles.six2Icon}
                                alt=""
                                src="/six@2x.png"
                              />
                              <div className={styles.runsWrapper3}>
                                <div className={styles.runs6}>runs</div>
                              </div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.div17}>8.00</div>
                            </div>
                            <div className={styles.wrapper12}>
                              <div className={styles.div18}>05</div>
                            </div>
                            <div className={styles.wrapper13}>
                              <div className={styles.div19}>10,000</div>
                            </div>
                            <div className={styles.wrapper14}>
                              <div className={styles.div20}>4000</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper18}>
                          <div className={styles.resultbuttonsGroup}>
                            <div className={styles.resultbuttons2}>
                              <div className={styles.button2}>
                                <div className={styles.iconWrapper16}>
                                  <img
                                    className={styles.wrapperIcon2}
                                    alt=""
                                    src="/wrapper4@2x.png"
                                  />
                                </div>
                                <div className={styles.text8}>Submit</div>
                              </div>
                            </div>
                            <div className={styles.resultbuttons3}>
                              <div className={styles.button3}>
                                <div className={styles.iconWrapper17}>
                                  <img
                                    className={styles.wrapperIcon3}
                                    alt=""
                                    src="/wrapper4@2x.png"
                                  />
                                </div>
                                <div className={styles.text9}>Submit</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <FrameComponent2
                        wicket12="/bold@2x.png"
                        bold="Bold"
                        prop="21.00"
                        runout="/runout@2x.png"
                        runout1="Runout"
                        prop1="0.40"
                      />
                      <FrameComponent2
                        wicket12="/stumpping@2x.png"
                        bold="Stumping"
                        prop="2.50"
                        runout="/noball@2x.png"
                        runout1="No ball"
                        prop1="6.00"
                        propBorder="1px solid var(--color-gray-400)"
                        propBorder1="1px solid var(--color-gray-400)"
                        propGap="4px"
                        propPadding="0px 0px var(--padding-5xs)"
                        propColor="#000"
                        propMinWidth="49px"
                        propWidth="71px"
                        propDisplay="flex"
                        propMinWidth1="unset"
                        propWidth1="45.8px"
                        propWidth2="60px"
                        propAlignSelf="unset"
                        propWidth3="28.9px"
                        propDisplay1="flex"
                        propWidth4="97px"
                        propAlignSelf1="unset"
                        propWidth5="70.5px"
                        propDisplay2="flex"
                        propPadding1="var(--padding-7xs) var(--padding-39xl) var(--padding-7xs) var(--padding-9xl)"
                        propGap1="7.5px"
                        propWidth6="60.5px"
                        propWidth7="unset"
                        propAlignSelf2="unset"
                        propWidth8="28.9px"
                        propDisplay3="flex"
                        propWidth9="86.5px"
                      />
                      <div className={styles.frameParent37}>
                        <div className={styles.rectangleParent16}>
                          <div className={styles.frameChild19} />
                          <div className={styles.dotballGroup}>
                            <img
                              className={styles.dotballIcon1}
                              alt=""
                              src="/dotball@2x.png"
                            />
                            <div className={styles.dotBallContainer}>
                              <div className={styles.dotBall1}>Dot ball</div>
                            </div>
                          </div>
                          <div className={styles.wrapper15}>
                            <div className={styles.div21}>8.00</div>
                          </div>
                          <div className={styles.wrapper16}>
                            <div className={styles.div22}>05</div>
                          </div>
                          <div className={styles.wrapper17}>
                            <div className={styles.div23}>10,000</div>
                          </div>
                          <div className={styles.wrapper18}>
                            <div className={styles.div24}>4000</div>
                          </div>
                        </div>
                        <div className={styles.resultbuttonsWrapper}>
                          <div className={styles.resultbuttons4}>
                            <div className={styles.button4}>
                              <div className={styles.iconWrapper18}>
                                <img
                                  className={styles.wrapperIcon4}
                                  alt=""
                                  src="/wrapper4@2x.png"
                                />
                              </div>
                              <div className={styles.text10}>Submit</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.livebetssubmitInner}>
                    <div className={styles.frameParent38}>
                      <div className={styles.frameParent39}>
                        <div className={styles.rectangleParent17}>
                          <div className={styles.frameChild20} />
                          <div className={styles.noballGroup}>
                            <img
                              className={styles.noballIcon3}
                              alt=""
                              src="/noball@2x.png"
                            />
                            <img
                              className={styles.sixIcon2}
                              alt=""
                              src="/six@2x.png"
                            />
                          </div>
                          <div className={styles.wrapper19}>
                            <div className={styles.div25}>21.00</div>
                          </div>
                          <div className={styles.wrapper20}>
                            <div className={styles.div26}>05</div>
                          </div>
                          <div className={styles.wrapper21}>
                            <div className={styles.div27}>10,000</div>
                          </div>
                          <div className={styles.wrapper22}>
                            <div className={styles.div28}>4000</div>
                          </div>
                        </div>
                        <div className={styles.rectangleParent18}>
                          <div className={styles.frameChild21} />
                          <div className={styles.catchoutGroup}>
                            <img
                              className={styles.catchoutIcon1}
                              alt=""
                              src="/catchout@2x.png"
                            />
                            <div className={styles.catchoutContainer}>
                              <div className={styles.catchout1}>Catchout</div>
                            </div>
                          </div>
                          <div className={styles.wrapper23}>
                            <div className={styles.div29}>0.40</div>
                          </div>
                          <div className={styles.wrapper24}>
                            <div className={styles.div30}>05</div>
                          </div>
                          <div className={styles.wrapper25}>
                            <div className={styles.div31}>10,000</div>
                          </div>
                          <div className={styles.wrapper26}>
                            <div className={styles.div32}>4000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper19}>
                        <div className={styles.resultbuttonsContainer}>
                          <div className={styles.resultbuttons5}>
                            <div className={styles.button5}>
                              <div className={styles.iconWrapper19}>
                                <img
                                  className={styles.wrapperIcon5}
                                  alt=""
                                  src="/wrapper4@2x.png"
                                />
                              </div>
                              <div className={styles.text11}>Submit</div>
                            </div>
                          </div>
                          <div className={styles.resultbuttons6}>
                            <div className={styles.button6}>
                              <div className={styles.iconWrapper20}>
                                <img
                                  className={styles.wrapperIcon6}
                                  alt=""
                                  src="/wrapper4@2x.png"
                                />
                              </div>
                              <div className={styles.text12}>Submit</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.livebetssubmitChild}>
                    <div className={styles.frameParent40}>
                      <div className={styles.frameParent41}>
                        <div className={styles.rectangleParent19}>
                          <div className={styles.frameChild22} />
                          <div className={styles.wideballGroup}>
                            <img
                              className={styles.wideballIcon1}
                              alt=""
                              src="/wideball@2x.png"
                            />
                            <div className={styles.wideBallContainer}>
                              <div className={styles.wideBall1}>Wide ball</div>
                            </div>
                          </div>
                          <div className={styles.wrapper27}>
                            <div className={styles.div33}>2.50</div>
                          </div>
                          <div className={styles.wrapper28}>
                            <div className={styles.div34}>05</div>
                          </div>
                          <div className={styles.wrapper29}>
                            <div className={styles.div35}>10,000</div>
                          </div>
                          <div className={styles.wrapper30}>
                            <div className={styles.div36}>4000</div>
                          </div>
                        </div>
                        <div className={styles.rectangleParent20}>
                          <div className={styles.frameChild23} />
                          <div className={styles.lbwGroup}>
                            <img
                              className={styles.lbwIcon1}
                              alt=""
                              src="/lbw@2x.png"
                            />
                            <div className={styles.lbwContainer}>
                              <div className={styles.lbw1}>LBW</div>
                            </div>
                          </div>
                          <div className={styles.wrapper31}>
                            <div className={styles.div37}>6.00</div>
                          </div>
                          <div className={styles.wrapper32}>
                            <div className={styles.div38}>05</div>
                          </div>
                          <div className={styles.wrapper33}>
                            <div className={styles.div39}>10,000</div>
                          </div>
                          <div className={styles.wrapper34}>
                            <div className={styles.div40}>4000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper20}>
                        <div className={styles.resultbuttonsParent1}>
                          <div className={styles.resultbuttons7}>
                            <div className={styles.button7}>
                              <div className={styles.iconWrapper21}>
                                <img
                                  className={styles.wrapperIcon7}
                                  alt=""
                                  src="/wrapper4@2x.png"
                                />
                              </div>
                              <div className={styles.text13}>Submit</div>
                            </div>
                          </div>
                          <div className={styles.resultbuttons8}>
                            <div className={styles.button8}>
                              <div className={styles.iconWrapper22}>
                                <img
                                  className={styles.wrapperIcon8}
                                  alt=""
                                  src="/wrapper4@2x.png"
                                />
                              </div>
                              <div className={styles.text14}>Submit</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.livebetssubmitInner1}>
                    <div className={styles.frameParent42}>
                      <div className={styles.frameParent43}>
                        <div className={styles.rectangleParent21}>
                          <div className={styles.frameChild24} />
                          <div className={styles.noballContainer}>
                            <img
                              className={styles.noballIcon4}
                              alt=""
                              src="/noball@2x.png"
                            />
                            <img
                              className={styles.fourIcon3}
                              alt=""
                              src="/four@2x.png"
                            />
                          </div>
                          <div className={styles.wrapper35}>
                            <div className={styles.div41}>8.00</div>
                          </div>
                          <div className={styles.wrapper36}>
                            <div className={styles.div42}>05</div>
                          </div>
                          <div className={styles.wrapper37}>
                            <div className={styles.div43}>10,000</div>
                          </div>
                          <div className={styles.wrapper38}>
                            <div className={styles.div44}>4000</div>
                          </div>
                        </div>
                        <div className={styles.rectangleParent22}>
                          <div className={styles.frameChild25} />
                          <div className={styles.wideParent}>
                            <img
                              className={styles.wideIcon1}
                              alt=""
                              src="/wideball@2x.png"
                            />
                            <img
                              className={styles.fourIcon4}
                              alt=""
                              src="/four@2x.png"
                            />
                          </div>
                          <div className={styles.wrapper39}>
                            <div className={styles.div45}>21.00</div>
                          </div>
                          <div className={styles.wrapper40}>
                            <div className={styles.div46}>05</div>
                          </div>
                          <div className={styles.wrapper41}>
                            <div className={styles.div47}>10,000</div>
                          </div>
                          <div className={styles.wrapper42}>
                            <div className={styles.div48}>4000</div>
                          </div>
                        </div>
                      </div>
                      <ContainerForm />
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

export default OperatorGiveResult;
