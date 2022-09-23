import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: 'relative',
      minHeight: '100vh',
    }}
  >
    <Header
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '5rem',
        backgroundColor: '#EEE',
        boxShadow: '0px 1px 10px #999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
    <div
      style={{
        paddingBottom: '8rem',
        paddingTop: '6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
    <Footer
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '7rem',
        backgroundColor: '#EEE',
        boxShadow: '0px 1px 10px #999',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  </div>
);
