import { BookAlertIcon, DoorOpenIcon, MailIcon } from 'lucide-react';

export const menuItems = [
  { label: 'Explore Rooms', url: '/rooms', icon: DoorOpenIcon },
  { label: 'How It Works', url: '/how-it-works', icon: BookAlertIcon },
  { label: 'Contact Us', url: '/contact-us', icon: MailIcon },
];

export const locationOptions = [
  // Tokyo (Special Wards and Major Cities)
  { label: 'Shinjuku, Tokyo', value: 'shinjuku' },
  { label: 'Shibuya, Tokyo', value: 'shibuya' },
  { label: 'Minato, Tokyo', value: 'minato' },
  { label: 'Chiyoda, Tokyo', value: 'chiyoda' },
  { label: 'Toshima, Tokyo', value: 'toshima' },
  { label: 'Nakano, Tokyo', value: 'nakano' },
  { label: 'Setagaya, Tokyo', value: 'setagaya' },
  { label: 'Meguro, Tokyo', value: 'meguro' },
  { label: 'Koto, Tokyo', value: 'koto' },
  { label: 'Sumida, Tokyo', value: 'sumida' },
  { label: 'Taito, Tokyo', value: 'taito' },
  { label: 'Adachi, Tokyo', value: 'adachi' },
  { label: 'Itabashi, Tokyo', value: 'itabashi' },
  { label: 'Hachioji, Tokyo', value: 'hachioji' },
  { label: 'Machida, Tokyo', value: 'machida' },

  // Chiba Prefecture
  { label: 'Chiba, Chiba', value: 'chiba' },
  { label: 'Funabashi, Chiba', value: 'funabashi' },
  { label: 'Ichikawa, Chiba', value: 'ichikawa' },
  { label: 'Kashiwa, Chiba', value: 'kashiwa' },
  { label: 'Matsudo, Chiba', value: 'matsudo' },
  { label: 'Narita, Chiba', value: 'narita' },
  { label: 'Urayasu, Chiba', value: 'urayasu' },

  // Saitama Prefecture
  { label: 'Saitama, Saitama', value: 'saitama' },
  { label: 'Kawaguchi, Saitama', value: 'kawaguchi' },
  { label: 'Koshigaya, Saitama', value: 'koshigaya' },
  { label: 'Tokorozawa, Saitama', value: 'tokorozawa' },
  { label: 'Kawagoe, Saitama', value: 'kawagoe' },
  { label: 'Ageo, Saitama', value: 'ageo' },

  // Osaka Prefecture
  { label: 'Osaka, Osaka', value: 'osaka' },
  { label: 'Sakai, Osaka', value: 'sakai' },
  { label: 'Hirakata, Osaka', value: 'hirakata' },
  { label: 'Toyonaka, Osaka', value: 'toyonaka' },
  { label: 'Suita, Osaka', value: 'suita' },
  { label: 'Takatsuki, Osaka', value: 'takatsuki' },
  { label: 'Izumi, Osaka', value: 'izumi' },

  // Fukuoka Prefecture
  { label: 'Fukuoka, Fukuoka', value: 'fukuoka' },
  { label: 'Kitakyushu, Fukuoka', value: 'kitakyushu' },
  { label: 'Kurume, Fukuoka', value: 'kurume' },
  { label: 'Omuta, Fukuoka', value: 'omuta' },
  { label: 'Iizuka, Fukuoka', value: 'iizuka' },

  // Aichi Prefecture (Nagoya)
  { label: 'Nagoya, Aichi', value: 'nagoya' },
  { label: 'Toyota, Aichi', value: 'toyota' },
  { label: 'Okazaki, Aichi', value: 'okazaki' },
  { label: 'Ichinomiya, Aichi', value: 'ichinomiya' },
  { label: 'Kasugai, Aichi', value: 'kasugai' },
  { label: 'Toyohashi, Aichi', value: 'toyohashi' },
];

export const availabilityOptions = [
  { label: 'Available Now', value: 'immediate' },
  { label: 'Within 1 Week', value: 'week' },
  { label: 'Within 1 Month', value: 'month' },
  { label: 'Within 6 Month', value: 'half-year' },
  { label: 'Flexible', value: 'year' },
];
