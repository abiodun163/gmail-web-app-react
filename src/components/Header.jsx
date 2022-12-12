import React from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
       dispatch(logout());
     })
   }
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdUAAABrCAMAAAAW0Oh0AAABSlBMVEX///9gYmjqQzVChfQ0qFPFIh/7vARdX2VTVVx7fYFbXWMupk9muXlArFxPUVg6gfSIrvfj4+RqbHJWWF/RNS76uBbpNjeChIjs7O3Z2tuKi4/8yVDOz9DqPzCio6bz8/SWl5roJw/CAADpOSm2t7lpa3G7vL797+7pMyHrUUXpLRn75eS3uLqen6KtrrDHx8n3w8Dwg3z2ubbxj4nucmr63dwNplfNEwDWeHf7wjHRYF/94qzsX1XrTED1r6vtaF9DRk4se/PtycjdkpHJNzXMSUjlrKz+8dn93Zv8zWPEGxf+7Mn914nKQkD80G/OVlXfmprzoZy/MDytR220tDKIZq55r0lefd/juyGnTXqntD18bb5nrU29M0OgU4fTuSu5OU+VskKWXJlsdtC/SmXDszhXkPV8wYum1LDA0vsQoT/j8eZ9pvfP59Sdjj/kAAAOF0lEQVR4nO2d63vbthXGLSo2L2mRUmimS2mRsSXFuZhKL46b9LqmbVJvXdet627Zuq3bunTd//91lEjiQuIAlATAcsT3S55HRgiJP+LFAXAA7u0RffLk8af7+5+9+/ntPUt6+uyLRwcHj7549tRWjTum+MnR0cXF/v7+xcXR0Wef2KjyvYObB0TPbNS4a/r86Gif6uLocWy6xqePDnj9wnSNO6fHLNOcq+Hm+t7NCtSDm780W+PO6csq1ExHT0zW+EaV6UK/MlnjzukrAdQM62fGoqanIqaZ2taqT78WQjXows9q7luacNu36tJtAKoxFxa6byET9e2k3r0Aqe4ffandhSH3zfWe7up2VXBTNeHCoPvmeqS3tp3VAynV/f3zt3XW9pEc6sHNdpZJi55IDHih10/uaHPhs+OfKai2FqxHX6moOod3H+ip6utbjpJqO7jRotflUDOqjnNXhwvHH504aqpfaKip1Z4C6pKqc7y5C39ycug0oPqGjt/UqhHVzV04c1+npWpNzahmLvzmBpXcfv/E2R6qcTiM5vN5NAyNr0xdlppSdY4/uLduHbn7bgPVeD72MfI8vJDnIa+XzEKzVRpSOEsnQ/Cvjak6h7feWu8LvH2LXONSqYbpFOHA7bBygwxuf3bVGm3Yy34J9qb8E5mOC61AdU0XJu57yVRnPa9ClKLFyJ8bq9iAhij/JS6K2I99HORaiapz7Kzswg/uHjpbQHXsYQBpCRanhqrWr9gj3xuxLuOXP3E1qqu7MOO+l0g19QIZ0lzYu2+kcv1KMfnSwZj5fF2qmQu/s0L1t++cOJdPddjBYo41rtOrETlNqe24U+bz9almLnzWtHbefS+LaoKk3svKRVfChj3mKyPm8w2oZi78YbPK375b+7/2qQ46NfMNFoOahXA1Is6aq6/7CxiQCaoNXfj2neP6/7RONao0VBd77iiNwkEcD8Lh7DQb6/AFgs72j3J6SgdWLNkIqTrHh0oXrrvvZVCdIb4lIn824EvEcx9xrdkNBuJrbY8mNE7gIndK9TeKVXMhVbULv1l330ZU9a7ZpCxUF3cmwnY4OOW4eqdav4MJkY7DxezHlGr3t+drUHWcE5kL3/tA4L5NqH7zis4fP2Gh4ik80RCfUqPGic6vYEZhMVILEBe0M1S7vzuXuTBE1Tk+Bl34rVsi921A9duHOqnOGagBlk8ehb3C1fBI4zcwpriPMMaoz3sPS7X7+08lLgxSdZxbX4urBNxXSfUP165d10h1yED11Kxyt74aUDPF0Tyq9icc1W73j7ALS6g6Jx8JqrvnAO6rovrNQ61UYxpSuKjJLG+Y9VZXBqpQFao3YBeWUXUO6y4Mu6+C6rcZVJ1UyU/suG6zqDbuoSsNtUo1c2EoFpZSrbvwO7D7Sqlm7ntNK9UJGaq7zUegY3WRbVaNKujCCqrOyftMSpPUfWVU//RQM9UY0Za6/dMKmiSgeuPPQhdWUXUOT0h6/4dS95VQfV5A1Ue1T0ag3tZPKmiTgOrChQXNVUmVurDCfUGqhfvqpErjX35d+eWWkKrQhRtQzV347FDhvhDV0n11UiW/L0j0XPBKCKAqcOEmVBcurHZfgOpzBqouqkMSKgVarndFBFDNXPgv52tQzZprg4YqovrdNU6aqPbLn+ddqXSkXPFg3fAOpNrt/vV8HaoNVaXKuq8+qoOyV+XWqbQrjtKR3+v5o/Ec4BCN+x2EkNcbTZpkWQwno15W2vMQ9pP56lGehGqXd2GjVJ9XoGqimpYBsGLydxXFhcgHcx/hIHAXCjDqzWr/I+qTPNVFfmpHkWYxHyGPruIvrjlNwUY7jwpxn8qodrt/O7dCteK++qh2SKyk42pLhR/n6RMfF5nV847Hrba7OOCfoGqBRbbbBLz84FSQA+liNAKa+Mc4z1PvcJ/KqbIubI7q36sNVRfVsIyVAn1zReU1vSXV2PeqCPgVhIFfZbrk2hM3vniEgBzIAI2E/6XoYtwe96mCavf7owvTVGvuq40qSRXw9KUMclRDLIQQkF68mldDW5+os5zL8loDVPf2dalSFzZE9TsRU01USQTsarhYIZbqEFVvfVlfgTWFCnRcwUzXGCxdVClYcliXavcf5wapitxXG1ViwImGixViqIJQsxqXGYoTCSa3U71yIjBzXrhf+zprU+1+vzyD1ATVR0L31UV1UN4mjREwpRrSYdMyARVzUc4iIIrowkJQLxFUWl7KQ81CX9xxER871Vd916eau7ABqoD76qIaGehWCVU8KxLnA+RPhuEgHE64HEUUk00wgddLozAMo0mfK8HtT4z4fDl3PFxGR+HMZ7tmr9q3bkI1c+EL/VQh99VF9T6huvm1iEhcXTQilNAOMk5pwOuOylvLjkq4ElweOcubz5cL2Tjbq0TCG1HNXHhfM9VH1yRQtVAdlzdK58RSyBml2+FtIKZ5124x7+DyW4YHdG8MlxeYDWqKP7ioOpyN6KMQVLJZN6Pa7f5Tvby2gu7+S8ZUD9WkoOrWg4z1xVENerW/T/mhTFDf2EEJ8ZNMxd6uoFOPjuMOfRT4xroh1RuvNVuMaaTDk7NXrxunWg5sFCFw1uMN5WKn41iqbh1qtS0LSpB1pNof06y5Ch6DPRYr5hvyxlT3zlRpK021WIa1QLX8bYqZpcBTCHvMnQ4lnRx/R5dVi0oQl0bVvwx8BPgKDbh56ptTbZTk0EDLlAmbVOXT6Q22PzK3n6GKRZM97E7hjifMv5BNeYFjMHJZ3oJ1UFWkgzbS4fEyvckiVcWRAA12nzN3klIVueseu1APdeikBF4l6YY8Clz0pYWqOnlQpTIh3Ga/ujFVZnqPUoXmNujAExonI8UVhCojet4h9FCVbrNoIJI2bIHqqLgPqn61AVWKh6EKXI90m0BjpiXEFg6obOH8M6qL6iYuzGy0skD1tKSaSIutSRW8akKW6qFl1LIEWECoAiA/YtVGFd6+qBK7KdIC1bTZeHVNqqB9kgQMcKKyLAF2DfFwlp4mo+Q0nQ1Jl1621YQtqY/qmi7Mb2C2QHVOolFpMQQOaUQJ4oQqyGxGolWoxnIqU0x1OJ4uUlxyYYyCUb4t3jhV4FgAqSqHDVigSmJN8PYuNRBpmZpEW50gBgYvSh4mcKKyLCHo8LM6aye3uYvMpQFx4IQtr5Wq+AgPmaoHg1igSrbYePDpjXKVFxCNV8FUqJKZC54CA1KNEyDDxQ0QGX1zq3F6qQqP24FVPz7CAlXSY657hh1doKWflVThXFRCFdwtSahWpupnUNbS8nLlv0apruLCggO3bFAdlasga56dJGp1hCo0bKHMEmUJnupImQxhgWr9GLum7ruQDaoz8SxbY4mGRoSq2l8TZQmOql85js9dhkv1NFLDVGtHTkLuKzrI0gZVOgpZaWBINBXMFuigGolKJCxUF3tebzTOhjd+p5LlYp5qExcGDp21QZVmecvHNoDIOgk7iDFFdc6u8Hk9duMGnzvDj76NUOWPcha6L3BAtBWqdGiyTj5aKsqQMUWVXenxazH7gJ6saYOqwoXhY4StUN1s95TQ8whVcMJqLarM+p34CSSZMXaoMq9IqLsv/OIFK1Tpz1tpIj1XJJwbVFMV9pqqEtRhhVn9e3SYZYkq7MKy4/ntUI2UKyywyNoLl6JohipdlEVglqtlquTVQxX3lb7QyA5VmhwWrJqSNhcvzphxYJIOCa8axtapilxY8fIxS1RpY60lSCtEPJFvPWao+kJf4DS0TzV/pR/nvooXBVqiyiSHoZVmg8sl92qwa4YqqQw+k028rmiWasWF1a+Ts0V1QBNOoDhEpPu0o+MfBjP9avklJck4dkc2RGfHhw3ddyFbVJkxwwqHo9FdL9VNTmbaKslkArsJsr5nmereXunCtxq8ptUa1T12k0TD1spsZapOIRumCk5tki9knWruws1e5mmPKvOCJrfZSitzSH8txjLjwOJlNkan1HHMzwNXdXZ4zJ1SCcseVW73cJP31DDbg+v7I8y01b4iBmZOI78EqpkLN3xJtkWq3AsycE+xmXU4ZU6Jrh89oJUqAZTKx6vsc3kpVJvKJlVuH7eLEknQRDccLlt2vR82QzWEQu78ityO5ZZqKe7YjQCNgO415POGRHdYJ1UGEN0gWc9dPOWOl2ipUvEHbwTeNK3dvDDt8SfjCKctDFGlWa4dxL9RMqq8srClyohzsUX6iIf76Xy4OAAyHoTzdBRUDiUD4mVDVNndzMwBAvFs6pV71luqAoVBNYFvebIKWhwa6dXf/ifa8r28jCGqXECEPX88uZ8mPfLyugybMHVx16lmw4dGOXy5wPfemKJaOZkne+Iwm4qG45YqoFmTNyUvgcB7EI1RlZ6itVg3aqkCihu9WDdAktf+maMKn3jnLuO2liqosC/Lj8+ZjmSzxQapQqdTBu4yXm+pSpSNSesn8JIb6OGxfAUgRG5+wDOcY+jlJeCXkkVFiep6kPAkWRcl+R9RsUuOp5pfqZJt5wfFxztDNdOcHq7N3L0sIsaJ8qSGgd/PBbp0VJYAp5yjnp+rfo3KM+di1C8H1qNkqRF32c40F/+MnY4K7RLVTFHqY+ThUp7n9ZKZxuMON9BshIsv5qFeuuGrlXaL6kJxGM1nk8lkNo/C7XrZ2GCYfbHZXMNTtntUd0Et1ZdRLdWXUS3Vl1H/3i6qP+itblf12o2tovofvdXtql5sFdUf/6u3up3Vz7eIatut6tILKVa7VNumqk0/yTzYKtUf215Vn36StFaLVK+3ULXqxY0bUHu1RfX69R9f/Z/eqlq9eA0Yt9qi+soPLVN9+j8c2NAiaJhh+wAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search Mail" />
        <IconButton>
          <ArrowDropDownIcon className="header__inputCaret" />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
              </IconButton>
              
              <Avatar onClick={signOut} src={user?.photoUrl} />
             
      </div>
    </div>
  );
};


/* {user?.displayName[0]}</Avatar > */
export default Header;
