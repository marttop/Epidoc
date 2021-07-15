import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    linkTitle: '',
    link: '',
    title: 'Easy to Use',
    description: (
      <>
        Epidoc was designed from the ground up to be easily used
        to get your brain up and running quickly.
      </>
    ),
  },
  {
    linkTitle: 'Contribute here!',
    link: 'http://github.com/marttop/Epidoc',
    title: 'Open source',
    description: (
      <>
        This documentation is open source!
        Feel free to contribute documentation.
      </>
    ),
  },
  {
    linkTitle: '',
    link: '',
    title: 'Focus on What Matters',
    description: (
      <>
        Epidoc lets you focus on what really matters.
        Easy to read documentation for beginners
      </>
    ),
  },
];

function Feature({title, description, link, linkTitle}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>{linkTitle}</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
