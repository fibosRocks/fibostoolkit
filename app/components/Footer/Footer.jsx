import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import footerStyle from './footerStyle';

function Footer({ ...props }) {
  const { classes, fluid, white } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const anchor =
    classes.a +
    cx({
      [` ${classes.whiteColor}`]: white,
    });
  const block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://github.com/FIBOSIO" className={block}>
                {'GitHub'}
              </a>
            </ListItem>
            {/*<ListItem className={classes.inlineBlock}>*/}
              {/*<a href="https://steemit.com/@genereos" target="new" className={block}>*/}
                {/*{'Steemit'}*/}
              {/*</a>*/}
            {/*</ListItem>*/}
            {/*<ListItem className={classes.inlineBlock}>*/}
              {/*<a href="https://www.facebook.com/generEOS" target="new" className={block}>*/}
                {/*{'Facebook'}*/}
              {/*</a>*/}
            {/*</ListItem>*/}
            {/*<ListItem className={classes.inlineBlock}>*/}
              {/*<a href="https://www.reddit.com/r/GenerEOS/" target="new" className={block}>*/}
                {/*{'Reddit'}*/}
              {/*</a>*/}
            {/*</ListItem>*/}
            <ListItem className={classes.inlineBlock}>
              <a href="https://twitter.com/fibos_io" target="new" className={block}>
                {'Twitter'}
              </a>
            </ListItem>
            {/*<ListItem className={classes.inlineBlock}>*/}
              {/*<a href="https://www.youtube.com/channel/UCFHa6AJmcZBjXGILF2EZnHQ" target="new" className={block}>*/}
                {/*{'YouTube'}*/}
              {/*</a>*/}
            {/*</ListItem>*/}
            <ListItem className={classes.inlineBlock}>
              <a href="https://t.me/FIBOSIO" target="new" className={block}>
                {'Telegram'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="http://www.fibos123.com/" target="new" className={block}>
                {'FIBOS123'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="http://foironman.com" target="new" className={block}>
                {'Ironman'}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="http://www.ilovefibos.com" target="new" className={anchor}>
            {'ilovefibosbp'}
          </a>
          {', made with love for the FO Community'}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};

export default withStyles(footerStyle)(Footer);
