import CatCard from '../src/components/cards/cat/CatCard';
import { mockCatCardProps } from '../src/components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../src/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../src/components/layouts/sidebar/SidebarLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = page => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
