import PageContent from '../components/PageContent';
import quranLogo from '../assets/quran-logo.png';

export default function HomePage() {
  return (
    <PageContent title="Quran Lite" image={quranLogo}>
      <h3>Let's Read</h3>
    </PageContent>
  );
}
