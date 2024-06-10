import Input from "./Input";
import PropTypes from "prop-types";
import styles from "./Setvalues.module.css";

const Setvalues = ({ className = "" }) => {
  return (
    <div className={[styles.setvalues, className].join(" ")}>
      <div className={styles.actionValuesBackground} />
      <div className={styles.actionValuesLabel}>
        <div className={styles.setValuesOn}>Set values on actions</div>
      </div>
      <div className={styles.actionValuesContainer}>
        <div className={styles.valuesActionRow}>
          <div className={styles.actionIconsParent}>
            <div className={styles.actionIcons} />
            <div className={styles.actionInputs}>
              <div className={styles.run1Parent}>
                <img className={styles.run1Icon} alt="" src="/1run-1.svg" />
                <div className={styles.actionInputFieldLabels}>
                  <div className={styles.run}>run</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.runInputFields}>
            <div className={styles.inputNumber}>
              <div className={styles.wrapper}>
                <Input />
              </div>
              <div className={styles.inputNumberHandler}>
                <div className={styles.divider}>
                  <img className={styles.lineIcon} alt="" src="/line1.svg" />
                </div>
                <div className={styles.handlerWrap}>
                  <div className={styles.up}>
                    <img className={styles.upIcon} alt="" src="/up.svg" />
                  </div>
                  <div className={styles.divider1}>
                    <img className={styles.lineIcon1} alt="" src="/line2.svg" />
                  </div>
                  <div className={styles.down}>
                    <img className={styles.downIcon} alt="" src="/down.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.outActionValues}>
          <div className={styles.outActionIconsParent}>
            <div className={styles.outActionIcons} />
            <div className={styles.outInputFields}>
              <div className={styles.run1Group}>
                <img className={styles.run1Icon1} alt="" src="/2run-1.svg" />
                <div className={styles.outInputFieldLabelValues}>
                  <div className={styles.runs}>runs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber1}>
            <div className={styles.input}>
              <div className={styles.input1}>3</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionValuesContainer1}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameWrapper}>
              <div className={styles.fourParent}>
                <img className={styles.fourIcon} alt="" src="/four@2x.png" />
                <div className={styles.runsWrapper}>
                  <div className={styles.runs1}>runs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber2}>
            <div className={styles.input2}>
              <div className={styles.input3}>3</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameContainer}>
              <div className={styles.sixParent}>
                <img className={styles.sixIcon} alt="" src="/six@2x.png" />
                <div className={styles.runsContainer}>
                  <div className={styles.runs2}>runs</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber3}>
            <div className={styles.input4}>
              <div className={styles.input5}>3</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionValuesContainer2}>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.frameWrapper1}>
              <div className={styles.boldParent}>
                <img className={styles.boldIcon} alt="" src="/bold@2x.png" />
                <div className={styles.boldWrapper}>
                  <div className={styles.bold}>Bold</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputNumber4}>
            <div className={styles.input6}>
              <div className={styles.input7}>3</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameWrapper2}>
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
            <div className={styles.input8}>
              <div className={styles.input9}>3</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionValuesContainer3}>
        <div className={styles.frameParent2}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
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
          <div className={styles.inputNumber6}>
            <div className={styles.input10}>
              <div className={styles.input11}>3</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild2} />
            <div className={styles.frameWrapper4}>
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
            <div className={styles.input12}>
              <div className={styles.input13}>3</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionValuesContainer4}>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.cricketActionIconParent}>
              <div className={styles.cricketActionIcon} />
              <div className={styles.cricketActionName}>
                <div className={styles.wideballParent}>
                  <img
                    className={styles.wideballIcon}
                    alt=""
                    src="/wideball@2x.png"
                  />
                  <div className={styles.fourRun}>
                    <div className={styles.wideBall}>Wide ball</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber8}>
              <div className={styles.input14}>
                <div className={styles.input15}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.frameWrapper5}>
                <div className={styles.noballParent}>
                  <img
                    className={styles.noballIcon}
                    alt=""
                    src="/noball@2x.png"
                  />
                  <div className={styles.noBallRun}>
                    <div className={styles.noBall}>No ball</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber9}>
              <div className={styles.input16}>
                <div className={styles.input17}>3</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
            <div className={styles.outActionIconParent}>
              <div className={styles.outActionIcon} />
              <div className={styles.outActionName}>
                <div className={styles.lbwParent}>
                  <img className={styles.lbwIcon} alt="" src="/lbw@2x.png" />
                  <div className={styles.lBWActionName}>
                    <div className={styles.lbw}>LBW</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber10}>
              <div className={styles.input18}>
                <div className={styles.input19}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <div className={styles.dotBallActionName}>
                <div className={styles.dotballParent}>
                  <img
                    className={styles.dotballIcon}
                    alt=""
                    src="/dotball@2x.png"
                  />
                  <div className={styles.dotBallActionLabel}>
                    <div className={styles.dotBall}>Dot ball</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputNumber11}>
              <div className={styles.input20}>
                <div className={styles.input21}>3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionValuesContainer5}>
        <div className={styles.frameParent10}>
          <div className={styles.frameParent11}>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild5} />
              <div className={styles.noball4runWrapper}>
                <div className={styles.noball4run}>
                  <img
                    className={styles.noballIcon1}
                    alt=""
                    src="/noball@2x.png"
                  />
                  <img className={styles.fourIcon1} alt="" src="/four@2x.png" />
                </div>
              </div>
            </div>
            <div className={styles.inputNumber12}>
              <div className={styles.input22}>
                <div className={styles.input23}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent12}>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <div className={styles.wideball4runsWrapper}>
                <div className={styles.wideball4runs}>
                  <img
                    className={styles.wideIcon}
                    alt=""
                    src="/wideball@2x.png"
                  />
                  <img className={styles.fourIcon2} alt="" src="/four@2x.png" />
                </div>
              </div>
            </div>
            <div className={styles.inputNumber13}>
              <div className={styles.input24}>
                <div className={styles.input25}>3</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent13}>
          <div className={styles.rectangleParent7}>
            <div className={styles.frameChild7} />
            <div className={styles.noball6runWrapper}>
              <div className={styles.noball6run}>
                <img
                  className={styles.noballIcon2}
                  alt=""
                  src="/noball@2x.png"
                />
                <img className={styles.sixIcon1} alt="" src="/six@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.inputNumber14}>
            <div className={styles.input26}>
              <div className={styles.input27}>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Setvalues.propTypes = {
  className: PropTypes.string,
};

export default Setvalues;
