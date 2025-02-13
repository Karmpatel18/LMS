/* eslint-disable react/prop-types */

export const AnimatedShinyText = ({ children, className = "", shimmerWidth = 100, ...props }) => {
  return (
    <span
      style={{ "--shiny-width": `${shimmerWidth}px` }}
      className={
        `mx-auto max-w-md  dark:text-orange-600/60 
        animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] 
        [background-size:var(--shiny-width)_100%] 
        [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] 
        bg-gradient-to-r from-transparent via-orange-600 via-50% to-transparent 
        dark:via-orange/80 ${className}`
      }
      {...props}
    >
      {children}
    </span>
  );
};
