import PropTypes from "prop-types";
import styles from "./Livebetdata.module.css";

const Livebetdata = ({ className = "" }) => {
  return (
    <div className={[styles.livebetdata, className].join(" ")}>
      <div className={styles.livebets}>
        <div className={styles.betsBackground} />
        <div className={styles.betColumns}>
          <div className={styles.betsData}>
            <div className={styles.betHeaders}>
              <div className={styles.betsHeader}>
                <div className={styles.actionsContainer}>
                  <div className={styles.actions}>Actions</div>
                </div>
                <div className={styles.valuesContainer}>
                  <div className={styles.values}>Values</div>
                </div>
                <div className={styles.bets}>#Bets</div>
                <div className={styles.betAmount}>Bet amount</div>
              </div>
              <div className={styles.projectedLose}>Projected lose</div>
            </div>
          </div>
          <div className={styles.projectionBackgroundParent}>
            <div className={styles.projectionBackground} />
            <div className={styles.matchProjectionParent}>
              <div className={styles.matchProjection}>
                <div className={styles.frameParent}>
                  <div className={styles.four2Parent}>
                    <img
                      className={styles.four2Icon}
                      alt=""
                      src="/four@2x.png"
                    />
                    <div className={styles.frameChild} />
                    <b className={styles.b}>1</b>
                  </div>
                  <div className={styles.runCountProjection}>
                    <div className={styles.run}>run</div>
                  </div>
                </div>
              </div>
              <div className={styles.projectionPlaceholder}>
                <div className={styles.projectionValue}>0.40</div>
              </div>
              <div className={styles.projectionPlaceholder1}>
                <div className={styles.div}>05</div>
              </div>
              <div className={styles.projectionPlaceholder2}>
                <div className={styles.div1}>10,000</div>
              </div>
              <div className={styles.projectionPlaceholder3}>
                <div className={styles.div2}>4000</div>
              </div>
            </div>
          </div>
          <div className={styles.betOptions}>
            <div className={styles.optionItemsParent}>
              <div className={styles.optionItems} />
              <div className={styles.ballOutcomes}>
                <div className={styles.runsParent}>
                  <div className={styles.runs}>runs</div>
                  <img
                    className={styles.four2Icon1}
                    alt=""
                    src="/four@2x.png"
                  />
                  <div className={styles.wicketOutcome} />
                  <b className={styles.outcomeValue}>2</b>
                </div>
                <div className={styles.outcomeValues}>
                  <div className={styles.runs1}>runs</div>
                </div>
              </div>
              <div className={styles.emptyBallOutcomes}>
                <div className={styles.moreEmptyOutcomes}>2.50</div>
              </div>
              <div className={styles.evenMoreOutcomes}>
                <div className={styles.div3}>05</div>
              </div>
              <div className={styles.emptyBallOutcomes1}>
                <div className={styles.div4}>10,000</div>
              </div>
              <div className={styles.lastOutcomeRow}>
                <div className={styles.lastOutcomes}>4000</div>
              </div>
            </div>
          </div>
          <div className={styles.betOptions1}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.four2Group}>
                <img className={styles.four2Icon2} alt="" src="/four@2x.png" />
                <div className={styles.runsWrapper}>
                  <div className={styles.runs2}>runs</div>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div5}>6.00</div>
              </div>
              <div className={styles.container}>
                <div className={styles.div6}>05</div>
              </div>
              <div className={styles.frame}>
                <div className={styles.div7}>10,000</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.div8}>4000</div>
              </div>
            </div>
          </div>
          <div className={styles.betOptions2}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.six2Parent}>
                <img className={styles.six2Icon} alt="" src="/six@2x.png" />
                <div className={styles.runsContainer}>
                  <div className={styles.runs3}>runs</div>
                </div>
              </div>
              <div className={styles.wrapper1}>
                <div className={styles.div9}>8.00</div>
              </div>
              <div className={styles.wrapper2}>
                <div className={styles.div10}>05</div>
              </div>
              <div className={styles.wrapper3}>
                <div className={styles.div11}>10,000</div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.div12}>4000</div>
              </div>
            </div>
          </div>
          <div className={styles.betOptions3}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.wicket12Parent}>
                <img className={styles.wicket12} alt="" src="/bold@2x.png" />
                <div className={styles.boldWrapper}>
                  <div className={styles.bold}>Bold</div>
                </div>
              </div>
              <div className={styles.wrapper5}>
                <div className={styles.div13}>21.00</div>
              </div>
              <div className={styles.wrapper6}>
                <div className={styles.div14}>05</div>
              </div>
              <div className={styles.wrapper7}>
                <div className={styles.div15}>10,000</div>
              </div>
              <div className={styles.wrapper8}>
                <div className={styles.div16}>4000</div>
              </div>
            </div>
          </div>
          <div className={styles.betOptions4}>
            <div className={styles.frameGroup}>
              <div className={styles.outcomeIconsParent}>
                <div className={styles.outcomeIcons} />
                <div className={styles.outcomeLabels}>
                  <div className={styles.runoutParent}>
                    <img
                      className={styles.runoutIcon}
                      alt=""
                      src="/runout@2x.png"
                    />
                    <div className={styles.outcomeTypeNames}>
                      <div className={styles.runout}>Runout</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div17}>0.40</div>
              <div className={styles.wrapper9}>
                <div className={styles.div18}>05</div>
              </div>
              <div className={styles.div19}>10,000</div>
              <div className={styles.div20}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions5}>
            <div className={styles.frameContainer}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild1} />
                <div className={styles.frameWrapper}>
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
              <div className={styles.div21}>2.50</div>
              <div className={styles.wrapper10}>
                <div className={styles.div22}>05</div>
              </div>
              <div className={styles.div23}>10,000</div>
              <div className={styles.div24}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions6}>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild2} />
                <div className={styles.frameWrapper1}>
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
              <div className={styles.div25}>6.00</div>
              <div className={styles.wrapper11}>
                <div className={styles.div26}>05</div>
              </div>
              <div className={styles.div27}>10,000</div>
              <div className={styles.div28}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions7}>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild3} />
                <div className={styles.frameWrapper2}>
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
              <div className={styles.div29}>8.00</div>
              <div className={styles.wrapper12}>
                <div className={styles.div30}>05</div>
              </div>
              <div className={styles.div31}>10,000</div>
              <div className={styles.div32}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions8}>
            <div className={styles.frameParent3}>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild4} />
                <div className={styles.noball6runWrapper}>
                  <div className={styles.noball6run}>
                    <img
                      className={styles.noballIcon1}
                      alt=""
                      src="/noball@2x.png"
                    />
                    <img className={styles.sixIcon} alt="" src="/six@2x.png" />
                  </div>
                </div>
              </div>
              <div className={styles.div33}>21.00</div>
              <div className={styles.wrapper13}>
                <div className={styles.div34}>05</div>
              </div>
              <div className={styles.div35}>10,000</div>
              <div className={styles.div36}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions9}>
            <div className={styles.frameParent4}>
              <div className={styles.rectangleParent4}>
                <div className={styles.frameChild5} />
                <div className={styles.frameWrapper3}>
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
              <div className={styles.div37}>0.40</div>
              <div className={styles.wrapper14}>
                <div className={styles.div38}>05</div>
              </div>
              <div className={styles.div39}>10,000</div>
              <div className={styles.div40}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions10}>
            <div className={styles.frameParent5}>
              <div className={styles.rectangleParent5}>
                <div className={styles.frameChild6} />
                <div className={styles.frameWrapper4}>
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
              <div className={styles.div41}>2.50</div>
              <div className={styles.wrapper15}>
                <div className={styles.div42}>05</div>
              </div>
              <div className={styles.div43}>10,000</div>
              <div className={styles.div44}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions11}>
            <div className={styles.frameParent6}>
              <div className={styles.rectangleParent6}>
                <div className={styles.frameChild7} />
                <div className={styles.frameWrapper5}>
                  <div className={styles.lbwParent}>
                    <img className={styles.lbwIcon} alt="" src="/lbw@2x.png" />
                    <div className={styles.lbwWrapper}>
                      <div className={styles.lbw}>LBW</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div45}>6.00</div>
              <div className={styles.wrapper16}>
                <div className={styles.div46}>05</div>
              </div>
              <div className={styles.div47}>10,000</div>
              <div className={styles.div48}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions12}>
            <div className={styles.frameParent7}>
              <div className={styles.rectangleParent7}>
                <div className={styles.frameChild8} />
                <div className={styles.noball4runWrapper}>
                  <div className={styles.noball4run}>
                    <img
                      className={styles.noballIcon2}
                      alt=""
                      src="/noball@2x.png"
                    />
                    <img
                      className={styles.fourIcon}
                      alt=""
                      src="/four@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.div49}>8.00</div>
              <div className={styles.wrapper17}>
                <div className={styles.div50}>05</div>
              </div>
              <div className={styles.div51}>10,000</div>
              <div className={styles.div52}>4000</div>
            </div>
          </div>
          <div className={styles.betOptions13}>
            <div className={styles.frameParent8}>
              <div className={styles.rectangleParent8}>
                <div className={styles.frameChild9} />
                <div className={styles.wideball4runsWrapper}>
                  <div className={styles.wideball4runs}>
                    <img
                      className={styles.wideIcon}
                      alt=""
                      src="/wideball@2x.png"
                    />
                    <img
                      className={styles.fourIcon1}
                      alt=""
                      src="/four@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.div53}>21.00</div>
              <div className={styles.wrapper18}>
                <div className={styles.div54}>05</div>
              </div>
              <div className={styles.div55}>10,000</div>
              <div className={styles.div56}>4000</div>
            </div>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.actionButtonsContainer}>
            <div className={styles.button}>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.wrapperIcon}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text}>Submit</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.iconWrapper1}>
                <img
                  className={styles.wrapperIcon1}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text1}>Submit</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.iconWrapper2}>
                <img
                  className={styles.wrapperIcon2}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text2}>Submit</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.iconWrapper3}>
                <img
                  className={styles.wrapperIcon3}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text3}>Submit</div>
            </div>
            <div className={styles.button4}>
              <div className={styles.iconWrapper4}>
                <img
                  className={styles.wrapperIcon4}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text4}>Submit</div>
            </div>
            <div className={styles.button5}>
              <div className={styles.iconWrapper5}>
                <img
                  className={styles.wrapperIcon5}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text5}>Submit</div>
            </div>
            <div className={styles.button6}>
              <div className={styles.iconWrapper6}>
                <img
                  className={styles.wrapperIcon6}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text6}>Submit</div>
            </div>
            <div className={styles.button7}>
              <div className={styles.iconWrapper7}>
                <img
                  className={styles.wrapperIcon7}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text7}>Submit</div>
            </div>
            <div className={styles.button8}>
              <div className={styles.iconWrapper8}>
                <img
                  className={styles.wrapperIcon8}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text8}>Submit</div>
            </div>
            <div className={styles.button9}>
              <div className={styles.iconWrapper9}>
                <img
                  className={styles.wrapperIcon9}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text9}>Submit</div>
            </div>
            <div className={styles.button10}>
              <div className={styles.iconWrapper10}>
                <img
                  className={styles.wrapperIcon10}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text10}>Submit</div>
            </div>
            <div className={styles.button11}>
              <div className={styles.iconWrapper11}>
                <img
                  className={styles.wrapperIcon11}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text11}>Submit</div>
            </div>
            <div className={styles.button12}>
              <div className={styles.iconWrapper12}>
                <img
                  className={styles.wrapperIcon12}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text12}>Submit</div>
            </div>
            <div className={styles.button13}>
              <div className={styles.iconWrapper13}>
                <img
                  className={styles.wrapperIcon13}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text13}>Submit</div>
            </div>
            <div className={styles.button14}>
              <div className={styles.iconWrapper14}>
                <img
                  className={styles.wrapperIcon14}
                  alt=""
                  src="/wrapper3@2x.png"
                />
              </div>
              <div className={styles.text14}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Livebetdata.propTypes = {
  className: PropTypes.string,
};

export default Livebetdata;
