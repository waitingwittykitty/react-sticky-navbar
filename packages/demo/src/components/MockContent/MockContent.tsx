import React from 'react'
import { Skeleton, Stack } from '@mui/material'

type MockContentProps = {
  height?: number
  rowHeight?: number
}

const MockContent = ({ height = 600, rowHeight = 30 }: MockContentProps) => {
  const rowCount = Math.floor(height / rowHeight)
  const lastHeight = height % rowHeight

  return (
    <Stack spacing={1}>
      {Array.from(Array(rowCount), (_, index) => {
        const cols = []
        let totalCols = 12
        while (totalCols > 0) {
          const colSpan = Math.floor(Math.random() * 12)
          totalCols -= colSpan
          cols.push(colSpan)
        }
        return (
          <Stack key={index} gap={2} direction="row">
            {cols.map((col, colIndex) => (
              <Stack key={colIndex} flex={col}>
                <Skeleton
                  sx={{ bgcolor: 'grey.900' }}
                  animation={false}
                  variant="text"
                  width="100%"
                  height={rowHeight}
                ></Skeleton>
              </Stack>
            ))}
          </Stack>
        )
      })}
      {!!lastHeight && <Skeleton width="100%" height={lastHeight} />}
    </Stack>
  )
}

export default React.memo(MockContent)
