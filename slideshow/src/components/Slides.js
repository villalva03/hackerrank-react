import React, { useState } from 'react';

function Slides({slides}) {

    const [activarSlideNo, setActivarSlideNo] = useState(0);
    const [actualSlide, setActualSlide] = useState(slides[0]);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledRestart, setDisabledRestart] = useState(true);

    const onClickNext = () => {
      var actualSlideNo = activarSlideNo;
      
      if(actualSlideNo < slides.length-1) {
        actualSlideNo ++;
        setActivarSlideNo(actualSlideNo);
        setActualSlide(slides[actualSlideNo]);
        setDisabledPrev(false);
        setDisabledRestart(false);
      }

      if(actualSlideNo === slides.length-1) {
        setDisabledNext(true);
      }
    }

    const onClickPrev = () => {
      var actualSlideNo = activarSlideNo;
      
      if(actualSlideNo > 0) {
        actualSlideNo --;
        setActivarSlideNo(actualSlideNo);
        setActualSlide(slides[actualSlideNo]);
        setDisabledNext(false);
      } 
      if(actualSlideNo === 0) {
        setDisabledPrev(true);
        setDisabledRestart(true);
      }
    }

    const onClickRestart = () => {
      setActivarSlideNo(0);
      setActualSlide(slides[0]);
      setDisabledPrev(true);
      setDisabledNext(false);
      setDisabledRestart(true);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => onClickRestart()} disabled={disabledRestart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => onClickPrev()} disabled={disabledPrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => onClickNext()} disabled={disabledNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{actualSlide.title}</h1>
                <p data-testid="text">{actualSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
