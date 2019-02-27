import React, { PureComponent } from 'react';
import { getImagesLinks } from '../utils/apiCalls';

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
        images.map(imgLink => <img key={imgLink} src={imgLink} alt="" />)
      ) : (
        <p>no images</p>
      );
    const links = directories.map(({ dirTitle, path }) => (
      <a key={path} href={path}>
        {dirTitle}
      </a>
    ));

    return (
      <div className="App">
        <div>
          <a href="/">home</a>
          {links}
        </div>
        <div>{imagesMapped}</div>
      </div>
    );
  }
}

export default PageImg;
