import styles from "./style";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <h1 className="text-white">Navbar</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
