export default function LogoSymbol({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.351807 5.80116L17.2043 0.51125C17.8108 0.320319 18.4959 0.634798 18.5015 1.11213L18.5689 5.39685L0.351807 11.0686V5.80116Z"
        fill="black"
      />
      <path
        d="M0.351804 13.3933L16.9179 8.19324C17.6592 7.95738 18.4959 8.34486 18.5015 8.92327L18.5633 12.989L0.346191 18.6608V13.3933H0.351804Z"
        fill="black"
      />
      <path
        d="M10.7014 21.2497L0.346191 18.0264V22.283C0.346191 22.9007 0.857212 23.4567 1.6434 23.7038L10.7014 26.5453V21.2497Z"
        fill="black"
      />
    </svg>
  );
}
