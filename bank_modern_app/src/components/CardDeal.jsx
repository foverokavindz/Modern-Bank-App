import styles, { layout } from '../style';
import Button from './Button';
import { card } from '../assets';

const cardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10 rounded-[10px]" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
};

export default cardDeal;
