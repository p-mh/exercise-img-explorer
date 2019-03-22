import React, { PureComponent } from 'react';
import { getImagesLinks } from '../utils/apiCalls';
import {
  Menu,
  ALink,
  ContainerImg,
  BlockImg,
  Image,
} from '../style/PageImgStyled';

class PageImg extends PureComponent {
  state = {
    images: [],
    directories: [],
  };
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    this.getImages(pathname === '/' ? '' : pathname);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.path !== prevProps.match.params.path) {
      const {
        location: { pathname },
      } = this.props;
      this.getImages(pathname === '/' ? '' : pathname);
    }
  }

  getImages = async path => {
    const { directories, images } = await getImagesLinks(path);
    this.setState({
      directories,
      images,
    });
  };

  render() {
    const { images, directories } = this.state;
    const imagesMapped =
      images.length !== 0 ? (
        images.map(imgLink => (
          <BlockImg key={imgLink}>
            <Image src={imgLink} alt="" />
          </BlockImg>
        ))
      ) : (
        <p>no images</p>
      );
    const links = directories.map(({ dirTitle, path }) => (
      <ALink key={path} href={path}>
        {dirTitle}
      </ALink>
    ));

    return (
      <div>
        <Menu>
          <ALink href="/">home</ALink>
          {links}
        </Menu>
        <ContainerImg>{imagesMapped}</ContainerImg>
      </div>
    );
  }
}

export default PageImg;
