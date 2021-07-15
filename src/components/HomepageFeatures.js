import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Epidoc was designed from the ground up to be easily used
        to get your brain up and running quickly.
      </>
    ),
  },
  {
    title: '',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Epidoc lets you focus on what really matters. Try it out and
        feel free to contribute
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
