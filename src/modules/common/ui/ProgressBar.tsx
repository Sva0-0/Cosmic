import { Box, BoxProps } from "@chakra-ui/react";
import { FC, memo } from "react";

interface ProgressBarProps {
  background?: string;
  stages: number;
  currentStage: number;
}

const ProgressBar: FC<ProgressBarProps & BoxProps> = memo(function ProgressBar({
  background,
  stages,
  currentStage,
  ...props
}) {
  return (
    <Box
      {...props}
      className="retro-card"
      p={3}
      borderRadius={0}
      bg="rgba(26, 26, 46, 0.8)"
      backdropFilter="blur(10px)"
      border="2px solid"
      borderColor="cyan.800"
      boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)"
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${stages}, 1fr)`,
        gridGap: "8px",
        padding: "8px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        ...props.sx,
      }}
    >
      {Array.apply(null, [...Array(stages)]).map((_, idx) => (
        <Box
          key={`progress-${idx}`}
          style={{
            height: "8px",
            borderRadius: 0,
            background: currentStage >= idx 
              ? (background ?? "linear-gradient(90deg, #00ffff, #ff00ff)")
              : "rgba(26, 26, 46, 0.6)",
            border: "1px solid",
            borderColor: currentStage >= idx ? "#00ffff" : "#404040",
            boxShadow: currentStage >= idx 
              ? "inset 2px 2px 0 rgba(255, 255, 255, 0.2), inset -2px -2px 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 255, 255, 0.5)"
              : "inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
            opacity: currentStage >= idx ? 1 : 0.3,
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </Box>
  );
});

export default ProgressBar;
